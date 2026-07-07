import { useEffect, useState } from "react";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Logo({ src, alt, className }: LogoProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = 255 - data[i];
        const g = 255 - data[i + 1];
        const b = 255 - data[i + 2];
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        if (r > 235 && g > 235 && b > 235) {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      if (!cancelled) setDataUrl(canvas.toDataURL("image/png"));
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!dataUrl) return <div className={className} />;
  return <img src={dataUrl} alt={alt} className={className} />;
}
