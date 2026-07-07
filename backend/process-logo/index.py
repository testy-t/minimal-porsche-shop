import os
import io
import json
import urllib.request
import boto3
from PIL import Image


def handler(event: dict, context) -> dict:
    '''Скачивает лого, инвертирует цвета, убирает белый фон (делает прозрачным) и загружает результат в файловое хранилище.
    Args: event с httpMethod, body (JSON: {"src": "url"}); context с request_id
    Returns: HTTP response с URL обработанного PNG в CDN
    '''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body_data = json.loads(event.get('body') or '{}')
    src_url = body_data.get('src')

    if not src_url:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'src is required'})
        }

    req = urllib.request.Request(src_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        raw = resp.read()

    img = Image.open(io.BytesIO(raw)).convert('RGBA')
    pixels = img.getdata()

    new_pixels = []
    for r, g, b, a in pixels:
        nr, ng, nb = 255 - r, 255 - g, 255 - b
        if r > 235 and g > 235 and b > 235:
            new_pixels.append((nr, ng, nb, 0))
        else:
            new_pixels.append((nr, ng, nb, a))

    img.putdata(new_pixels)

    out = io.BytesIO()
    img.save(out, format='PNG')
    out.seek(0)

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    key = 'files/logo-processed.png'
    s3.put_object(Bucket='files', Key=key, Body=out.getvalue(), ContentType='image/png')

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'url': cdn_url})
    }
