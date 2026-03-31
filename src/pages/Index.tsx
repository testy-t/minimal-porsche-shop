import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/faecd8f5-4313-40d9-88d3-cd00c59e6848/files/a96ddb21-d5fd-4c14-b5ac-a3c9c3ba0e0a.jpg";

const services = [
  {
    id: "01",
    name: "Express Detail",
    tagline: "The Essentials",
    price: "from $149",
    duration: "2–3 hrs",
    description: "Hand wash, clay bar, tire dressing, interior vacuum and wipe-down. The perfect refresh.",
    items: ["Hand wash & dry", "Clay bar decontamination", "Tire & trim dressing", "Interior vacuum", "Glass cleaning"],
    featured: false,
  },
  {
    id: "02",
    name: "Full Detail",
    tagline: "The Standard",
    price: "from $299",
    duration: "5–6 hrs",
    description: "Everything in Express plus paint correction prep, leather conditioning and full polish.",
    items: ["All Express services", "Single-stage polish", "Leather conditioning", "Engine bay cleaning", "Door jambs detail"],
    featured: true,
  },
  {
    id: "03",
    name: "Signature 911",
    tagline: "The Pinnacle",
    price: "from $599",
    duration: "1–2 days",
    description: "Our flagship treatment. Multi-stage paint correction, ceramic coating and concours-level finish.",
    items: ["All Full Detail services", "Multi-stage paint correction", "Ceramic coating (2yr)", "Headlight restoration", "White-glove delivery"],
    featured: false,
  },
];

const faqs = [
  {
    q: "How long does a full detail take?",
    a: "Depending on the package and vehicle condition, our services range from 2 hours for Express up to 2 days for the Signature 911. We'll give you a precise estimate when you book.",
  },
  {
    q: "Do you come to my location?",
    a: "Yes. We offer mobile detailing — we come to your home, office, or parking lot. All we need is access to a water source. Otherwise, visit our studio.",
  },
  {
    q: "How often should I get my car detailed?",
    a: "For daily drivers, we recommend a full detail every 3–4 months and an express refresh monthly. Performance or collector cars may benefit from more frequent care.",
  },
  {
    q: "Is ceramic coating worth it?",
    a: "Absolutely. A quality ceramic coating provides 2–5 years of protection against UV, contaminants and minor scratches — significantly reducing long-term maintenance costs.",
  },
  {
    q: "What cars do you work on?",
    a: "All makes and models. From daily drivers to exotics. We have experience with Porsche, Ferrari, McLaren, BMW, and everything in between.",
  },
  {
    q: "How do I book an appointment?",
    a: "Simply tap 'Book Now' and fill out the form. We'll contact you within 2 hours to confirm your appointment and answer any questions.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <a href="#" className="font-display text-xl font-light tracking-[0.15em] text-white">
          911 <span className="text-gold">DETAILING</span>
        </a>
        <button
          className="p-1 text-white/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 animate-fade-in">
          {["Services", "About", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-light text-white/80 hover:text-gold transition-colors tracking-widest"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-10 py-3 border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all"
          >
            Book Now
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-12 px-5 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        <div className="relative z-10">
          <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-4 opacity-0 animate-fade-up delay-100">
            Premium Automotive Detailing
          </p>
          <h1 className="font-display text-[13vw] leading-[0.9] font-light text-white mb-6 opacity-0 animate-fade-up delay-200">
            Precision.<br />
            <span className="italic text-gold">Perfection.</span>
          </h1>
          <p className="font-body text-white/50 text-sm tracking-wide max-w-xs mb-8 opacity-0 animate-fade-up delay-300">
            Porsche-level attention to detail for every vehicle. Mobile & studio service across the US.
          </p>
          <div className="flex gap-4 opacity-0 animate-fade-up delay-400">
            <a
              href="#services"
              className="px-7 py-3 bg-gold text-black font-body text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E5C97A] transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-white/30 text-white/80 font-body text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-500">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <div className="border-y border-white/5 py-5 px-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap">
          {["Mobile Service", "Paint Correction", "Ceramic Coating", "Concours Finish", "Exotic Specialists", "Same-Day Booking"].map((t) => (
            <span key={t} className="font-body text-[10px] tracking-[0.25em] text-white/30 uppercase flex items-center gap-4">
              {t}
              <span className="text-gold">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-5 py-20">
        <div className="mb-12">
          <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-3">Our Philosophy</p>
          <h2 className="font-display text-5xl font-light leading-tight">
            Engineered<br />
            <span className="italic">like a 911.</span>
          </h2>
        </div>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-12 max-w-sm">
          Every Porsche 911 is built with obsessive precision — we apply that same philosophy to every vehicle we touch. No shortcuts. No compromise. Only flawless results.
        </p>

        <div className="grid grid-cols-2 gap-px bg-white/5">
          {[
            { n: "1,200+", l: "Vehicles Detailed" },
            { n: "4.9★", l: "Average Rating" },
            { n: "7 yrs", l: "In Business" },
            { n: "100%", l: "Satisfaction Guaranteed" },
          ].map((s) => (
            <div key={s.n} className="bg-[#0A0A0A] p-6">
              <p className="font-display text-3xl text-gold font-light mb-1">{s.n}</p>
              <p className="font-body text-xs text-white/40 tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-20 border-t border-white/5">
        <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-3">Packages</p>
        <h2 className="font-display text-5xl font-light leading-tight mb-12">
          Choose<br />
          <span className="italic">your level.</span>
        </h2>

        <div className="flex flex-col gap-px bg-white/5">
          {services.map((s) => (
            <div
              key={s.id}
              className={`relative p-6 ${s.featured ? "bg-[#141414]" : "bg-[#0A0A0A]"}`}
            >
              {s.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
              )}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-body text-[10px] text-gold/60 tracking-widest">{s.id}</span>
                  <h3 className="font-display text-2xl font-light text-white mt-1">{s.name}</h3>
                  <p className="font-body text-[10px] text-white/40 tracking-widest uppercase mt-0.5">{s.tagline}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl text-gold font-light">{s.price}</p>
                  <p className="font-body text-[10px] text-white/30 mt-1">{s.duration}</p>
                </div>
              </div>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
              <ul className="flex flex-col gap-2 mb-5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/60 font-body">
                    <span className="w-3 h-px bg-gold flex-shrink-0 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body transition-all ${
                  s.featured
                    ? "bg-gold text-black hover:bg-[#E5C97A]"
                    : "border border-white/20 text-white/60 hover:border-gold hover:text-gold"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 bg-[#0D0D0D] border-t border-white/5">
        <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-3">How It Works</p>
        <h2 className="font-display text-5xl font-light leading-tight mb-12">
          Simple.<br />
          <span className="italic">Seamless.</span>
        </h2>

        <div className="flex flex-col gap-8">
          {[
            { n: "01", t: "Book Online", d: "Choose your package and preferred time. We confirm within 2 hours." },
            { n: "02", t: "We Come to You", d: "Our team arrives at your home, office, or preferred location." },
            { n: "03", t: "Precision Work", d: "Every step is performed with professional equipment and tested products." },
            { n: "04", t: "Perfection Delivered", d: "Your vehicle is returned spotless. Guaranteed satisfaction — always." },
          ].map((step) => (
            <div key={step.n} className="flex gap-5 items-start">
              <span className="font-display text-4xl text-gold/20 font-light flex-shrink-0 leading-none">{step.n}</span>
              <div className="pt-1">
                <h3 className="font-display text-xl font-light text-white mb-1">{step.t}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20 border-t border-white/5">
        <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-3">FAQ</p>
        <h2 className="font-display text-5xl font-light leading-tight mb-12">
          Questions<br />
          <span className="italic">answered.</span>
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-white/[0.08] last:border-b last:border-white/[0.08]">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-body text-sm text-white/80 leading-relaxed">{faq.q}</span>
                <span className="flex-shrink-0 text-gold">
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} />
                </span>
              </button>
              {openFaq === i && (
                <div className="pb-5 animate-fade-in">
                  <p className="font-body text-sm text-white/40 leading-relaxed pr-8">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-20 bg-[#0D0D0D] border-t border-white/5">
        <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase mb-3">Book Now</p>
        <h2 className="font-display text-5xl font-light leading-tight mb-4">
          Ready for<br />
          <span className="italic">perfection?</span>
        </h2>
        <p className="font-body text-white/40 text-sm mb-10 leading-relaxed">
          Fill out the form and we'll get back to you within 2 hours to confirm your appointment.
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1">
            <label className="font-body text-[10px] tracking-widest text-white/30 uppercase">Your Name</label>
            <input
              type="text"
              placeholder="John Carter"
              className="bg-[#111] border border-white/10 text-white font-body text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-body text-[10px] tracking-widest text-white/30 uppercase">Phone / Email</label>
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              className="bg-[#111] border border-white/10 text-white font-body text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-body text-[10px] tracking-widest text-white/30 uppercase">Package</label>
            <select className="bg-[#111] border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
              <option value="">Select a package</option>
              <option>Express Detail — from $149</option>
              <option>Full Detail — from $299</option>
              <option>Signature 911 — from $599</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-body text-[10px] tracking-widest text-white/30 uppercase">Vehicle</label>
            <input
              type="text"
              placeholder="2022 Porsche 911 Carrera"
              className="bg-[#111] border border-white/10 text-white font-body text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-8 py-4 bg-gold text-black font-body text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#E5C97A] transition-colors"
          >
            Request Appointment
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-12 border-t border-white/5 bg-[#0A0A0A]">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="font-display text-xl font-light tracking-[0.15em] text-white mb-1">
              911 <span className="text-gold">DETAILING</span>
            </p>
            <p className="font-body text-xs text-white/30">Premium Automotive Care</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all">
              <Icon name="Instagram" size={15} />
            </a>
            <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all">
              <Icon name="Facebook" size={15} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="font-body text-[10px] tracking-widest text-gold/60 uppercase mb-3">Navigation</p>
            <div className="flex flex-col gap-2">
              {["Services", "About", "FAQ", "Book Now"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="font-body text-xs text-white/40 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-body text-[10px] tracking-widest text-gold/60 uppercase mb-3">Contact</p>
            <div className="flex flex-col gap-2">
              <p className="font-body text-xs text-white/40">+1 (555) 911-0000</p>
              <p className="font-body text-xs text-white/40">hello@911detailing.com</p>
              <p className="font-body text-xs text-white/40">Los Angeles, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col gap-1">
          <p className="font-body text-[10px] text-white/20">© 2026 911 Detailing. All rights reserved.</p>
          <p className="font-body text-[10px] text-white/15">Not affiliated with Porsche AG.</p>
        </div>
      </footer>
    </div>
  );
}
