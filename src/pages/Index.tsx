import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/faecd8f5-4313-40d9-88d3-cd00c59e6848/files/a96ddb21-d5fd-4c14-b5ac-a3c9c3ba0e0a.jpg";

const services = [
  {
    id: "01",
    name: "Express Detail",
    price: "from $149",
    duration: "2–3 h",
    description:
      "Hand wash, clay bar, tire dressing, interior vacuum and glass cleaning. The perfect weekly refresh.",
    items: ["Hand wash & dry", "Clay bar decontamination", "Tire & trim dressing", "Interior vacuum", "Glass cleaning"],
    featured: false,
  },
  {
    id: "02",
    name: "Full Detail",
    price: "from $299",
    duration: "5–6 h",
    description:
      "Everything in Express plus single-stage polish, leather conditioning and engine bay.",
    items: ["All Express services", "Single-stage polish", "Leather conditioning", "Engine bay cleaning", "Door jambs"],
    featured: true,
  },
  {
    id: "03",
    name: "Signature 911",
    price: "from $599",
    duration: "1–2 days",
    description:
      "Our flagship: multi-stage paint correction, 2-year ceramic coating and concours-level finish.",
    items: ["All Full Detail services", "Multi-stage correction", "Ceramic coating 2yr", "Headlight restoration", "White-glove delivery"],
    featured: false,
  },
];

const faqs = [
  { q: "How long does a full detail take?", a: "Express takes 2–3 hours, Full Detail 5–6 hours, and Signature 911 up to 2 days. We confirm exact timing at booking." },
  { q: "Do you come to my location?", a: "Yes — mobile detailing at your home or office. We just need water access. Studio visits are available too." },
  { q: "How often should I get my car detailed?", a: "Daily drivers: full detail every 3–4 months, express refresh monthly. Collector cars can benefit from more frequent care." },
  { q: "Is ceramic coating worth it?", a: "Absolutely. It delivers 2–5 years of UV and contaminant protection, significantly reducing long-term maintenance costs." },
  { q: "What cars do you work on?", a: "All makes — from daily drivers to exotics. We have hands-on experience with Porsche, Ferrari, McLaren and BMW." },
  { q: "How do I book?", a: "Tap Book Now, fill the form. We confirm within 2 hours." },
];

const stats = [
  { n: "1,200+", l: "Vehicles detailed" },
  { n: "4.9★", l: "Stars on Google" },
  { n: "7 yrs", l: "In business" },
  { n: "100%", l: "Satisfaction guaranteed" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 h-14 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <span className="text-[15px] font-medium tracking-tight">
          911 Detailing
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 flex items-center justify-center text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors"
          aria-label="Menu"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-1 animate-fade-in">
          {[
            { label: "Services", href: "#services" },
            { label: "About",    href: "#about" },
            { label: "FAQ",      href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[2.6rem] font-light tracking-tight text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-3 rounded-full bg-[#1d1d1f] text-white text-[15px] font-medium"
          >
            Book Now
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[100svh] flex flex-col justify-end pb-14 px-5 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Car detailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
        <div className="relative z-10 animate-fade-up">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/50 mb-3">
            Premium Automotive Detailing
          </p>
          <h1 className="text-[13vw] font-light leading-[1.02] tracking-tight text-white mb-5">
            Your Car.<br />
            <span className="italic">Perfected.</span>
          </h1>
          <p className="text-[15px] font-light text-white/55 max-w-[280px] leading-relaxed mb-8">
            Porsche-level care for every vehicle. Mobile & studio, across the US.
          </p>
          <div className="flex gap-3">
            <a
              href="#services"
              className="px-6 py-2.5 rounded-full bg-white text-[#1d1d1f] text-[13px] font-medium hover:bg-white/90 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur text-white text-[13px] font-medium border border-white/20 hover:bg-white/20 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 pt-20 pb-16">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-3">
          Our Philosophy
        </p>
        <h2 className="text-[2.4rem] font-light leading-tight tracking-tight text-[#1d1d1f] mb-5">
          Engineered<br />like a 911.
        </h2>
        <p className="text-[15px] font-light text-[#6e6e73] leading-relaxed max-w-sm mb-12">
          Every Porsche 911 is built with obsessive precision. We apply that same philosophy to every vehicle — no shortcuts, no compromise.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.n} className="rounded-2xl bg-[#f5f5f7] p-5">
              <p className="text-[1.9rem] font-light tracking-tight text-[#1d1d1f] leading-none mb-1.5">
                {s.n}
              </p>
              <p className="text-[12px] text-[#6e6e73]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 pt-16 pb-20 border-t border-black/[0.06]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-3">
          Packages
        </p>
        <h2 className="text-[2.4rem] font-light leading-tight tracking-tight text-[#1d1d1f] mb-10">
          Choose<br />your level.
        </h2>
        <div className="flex flex-col gap-4">
          {services.map((s) => (
            <div
              key={s.id}
              className={`rounded-2xl p-6 ${s.featured ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7]"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className={`text-[11px] font-medium tracking-[0.1em] uppercase mb-1 ${s.featured ? "text-white/40" : "text-[#6e6e73]"}`}>
                    {s.id}
                  </p>
                  <h3 className={`text-[1.35rem] font-light tracking-tight ${s.featured ? "text-white" : "text-[#1d1d1f]"}`}>
                    {s.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className={`text-[1.1rem] font-light ${s.featured ? "text-white" : "text-[#1d1d1f]"}`}>
                    {s.price}
                  </p>
                  <p className={`text-[12px] mt-0.5 ${s.featured ? "text-white/40" : "text-[#6e6e73]"}`}>
                    {s.duration}
                  </p>
                </div>
              </div>
              <p className={`text-[14px] leading-relaxed mb-5 ${s.featured ? "text-white/60" : "text-[#6e6e73]"}`}>
                {s.description}
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2.5 text-[13px] ${s.featured ? "text-white/70" : "text-[#424245]"}`}
                  >
                    <Icon name="Check" size={14} className={s.featured ? "text-white/40" : "text-[#6e6e73]"} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
                  s.featured ? "text-white/70 hover:text-white" : "text-[#1d1d1f] hover:text-[#6e6e73]"
                }`}
              >
                Book this package
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 bg-[#f5f5f7]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-3">
          How It Works
        </p>
        <h2 className="text-[2.4rem] font-light leading-tight tracking-tight text-[#1d1d1f] mb-10">
          Simple.<br />Seamless.
        </h2>
        <div className="flex flex-col">
          {[
            { n: "1", t: "Book online", d: "Choose your package and time. We confirm in 2 hours." },
            { n: "2", t: "We come to you", d: "Our team arrives at your home, office, or any location." },
            { n: "3", t: "Precision work", d: "Professional equipment and tested products — every time." },
            { n: "4", t: "Perfection delivered", d: "Your car returned spotless. Satisfaction guaranteed." },
          ].map((step, i, arr) => (
            <div key={step.n} className={`flex gap-5 py-6 ${i < arr.length - 1 ? "border-b border-black/[0.07]" : ""}`}>
              <span className="text-[2rem] font-light text-[#1d1d1f]/15 leading-none flex-shrink-0 w-8">
                {step.n}
              </span>
              <div>
                <h3 className="text-[17px] font-light text-[#1d1d1f] mb-1">{step.t}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-3">
          FAQ
        </p>
        <h2 className="text-[2.4rem] font-light leading-tight tracking-tight text-[#1d1d1f] mb-10">
          Questions<br />answered.
        </h2>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-black/[0.07] last:border-b last:border-black/[0.07]">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-[15px] font-light text-[#1d1d1f] leading-snug">{faq.q}</span>
                <span className={`flex-shrink-0 text-[#6e6e73] transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                  <Icon name="Plus" size={16} />
                </span>
              </button>
              {openFaq === i && (
                <div className="pb-5 animate-fade-in">
                  <p className="text-[14px] font-light text-[#6e6e73] leading-relaxed pr-6">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-20 bg-[#f5f5f7]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-3">
          Book Now
        </p>
        <h2 className="text-[2.4rem] font-light leading-tight tracking-tight text-[#1d1d1f] mb-3">
          Ready for<br />perfection?
        </h2>
        <p className="text-[15px] font-light text-[#6e6e73] mb-10 leading-relaxed">
          We'll confirm your appointment within 2 hours.
        </p>
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Your Name",     placeholder: "John Carter",             type: "text" },
            { label: "Phone / Email", placeholder: "+1 (555) 000-0000",       type: "text" },
            { label: "Vehicle",       placeholder: "2022 Porsche 911 Carrera", type: "text" },
          ].map(({ label, placeholder, type }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium tracking-wide uppercase text-[#6e6e73]">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                className="bg-white rounded-xl px-4 py-3.5 text-[15px] font-light text-[#1d1d1f] placeholder-[#b0b0b5] border border-black/[0.08] focus:outline-none focus:border-[#1d1d1f] transition-colors"
              />
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium tracking-wide uppercase text-[#6e6e73]">
              Package
            </label>
            <select className="bg-white rounded-xl px-4 py-3.5 text-[15px] font-light text-[#1d1d1f] border border-black/[0.08] focus:outline-none focus:border-[#1d1d1f] transition-colors appearance-none">
              <option value="">Select a package</option>
              <option>Express Detail — from $149</option>
              <option>Full Detail — from $299</option>
              <option>Signature 911 — from $599</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-full bg-[#1d1d1f] text-white text-[15px] font-medium hover:bg-black transition-colors"
          >
            Request Appointment
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pt-12 pb-10 border-t border-black/[0.06] bg-white">
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-[15px] font-medium tracking-tight text-[#1d1d1f] mb-1">
              911 Detailing
            </p>
            <p className="text-[13px] text-[#6e6e73]">Premium Automotive Care</p>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors">
              <Icon name="Instagram" size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors">
              <Icon name="Facebook" size={16} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#6e6e73] mb-3">Pages</p>
            {["Services", "About", "FAQ", "Book Now"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block text-[13px] text-[#1d1d1f]/55 hover:text-[#1d1d1f] transition-colors py-1"
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#6e6e73] mb-3">Contact</p>
            <p className="text-[13px] text-[#1d1d1f]/55 py-1">+1 (555) 911-0000</p>
            <p className="text-[13px] text-[#1d1d1f]/55 py-1">hello@911detailing.com</p>
            <p className="text-[13px] text-[#1d1d1f]/55 py-1">Los Angeles, CA</p>
          </div>
        </div>
        <div className="border-t border-black/[0.06] pt-5">
          <p className="text-[12px] text-[#b0b0b5]">© 2026 911 Detailing. All rights reserved.</p>
          <p className="text-[12px] text-[#b0b0b5] mt-0.5">Not affiliated with Porsche AG.</p>
        </div>
      </footer>

    </div>
  );
}