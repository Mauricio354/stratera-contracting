import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Statera Contracting | 20+ Years in Calgary",
  description:
    "Statera Contracting is a Calgary renovation contractor with 20+ years of experience. Learn about our client-first approach, our team, and why Calgarians trust us with their homes and businesses.",
  alternates: { canonical: "https://stateracontracting.com/about" },
  openGraph: {
    title: "About Statera Contracting | 20+ Years in Calgary",
    description:
      "Statera Contracting is a Calgary renovation contractor with 20+ years of experience. Learn about our client-first approach and values.",
    url: "https://stateracontracting.com/about",
  },
};

const values = [
  {
    title: "Balance",
    desc: "The name Statera comes from the Latin word for balance. We balance quality with budget, timelines with attention to detail, and your vision with practical expertise.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Transparency",
    desc: "Fixed-price quotes with no hidden fees. Clear timelines. Daily communication. You always know exactly where your project stands.",
    icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
  },
  {
    title: "Craftsmanship",
    desc: "Over 20 years of hands-on experience means we know what it takes to get it right. We don't cut corners — ever.",
    icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    title: "Accountability",
    desc: "We show up, we do the work, and we stand behind it. Your satisfaction is our reputation.",
    icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4 12 14.01 9 11.01",
  },
];

const credentials = [
  "Licensed General Contractor — Alberta",
  "WCB (Workers' Compensation Board) Insured",
  "Comprehensive General Liability Insurance",
  "20+ Years in the Calgary Market",
  "Residential & Commercial Experience",
  "City of Calgary Permit Applications",
];

const testimonials = [
  {
    initials: "JM",
    name: "Jennifer M.",
    role: "Homeowner, Kensington",
    text: "Statera transformed our 1960s bungalow into our dream home. Their team was professional, communicative, and delivered beyond our expectations. The kitchen alone is worth every penny.",
  },
  {
    initials: "DP",
    name: "David P.",
    role: "Business Owner, Beltline",
    text: "We hired Statera for our office build-out downtown. They completed the project on time, under budget, and the space looks incredible. Our team loves coming to work now.",
  },
  {
    initials: "SR",
    name: "Sarah R.",
    role: "Property Investor, Inglewood",
    text: "The carriage house restoration was a dream project and Statera handled it beautifully. They respected the history of the building while bringing it up to modern standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        <div className="container relative z-10">
          <div className="section-label text-accent/80">Our Story</div>
          <h1 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-white leading-[1.1] mt-2 mb-4 max-w-2xl">
            Calgary&apos;s Renovation Contractor — Built on Balance
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            For over 20 years, Statera Contracting has brought a unique, client-first approach to residential and commercial renovations across Calgary.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title">A Client-First Approach to Every Renovation</h2>
            <p className="text-gray-600 leading-[1.9] mt-6">
              Statera Contracting was built on a unique outlook of the renovation process. With over two decades of experience in Calgary, we believe every project deserves a dedicated, transparent, and collaborative approach — whether it&apos;s a single bathroom refresh or a full commercial fit-up.
            </p>
            <p className="text-gray-600 leading-[1.9] mt-4">
              The name &ldquo;Statera&rdquo; comes from the Latin word for balance. That&apos;s exactly what we bring to every project: we balance timelines with quality, budgets with ambition, and your vision with practical expertise. The result is a renovation that exceeds expectations without exceeding budget.
            </p>
            <p className="text-gray-600 leading-[1.9] mt-4">
              From heritage restorations in Inglewood to modern commercial build-outs in the Beltline, we&apos;ve built our reputation one project at a time — through word-of-mouth referrals and clients who come back to us again and again.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: "20+", label: "Years Experience" },
                { num: "5★", label: "Houzz Rating" },
                { num: "100%", label: "Permitted Work" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-5 bg-gray-100 rounded-card border border-gray-200">
                  <div className="text-3xl font-extrabold text-accent font-serif">{stat.num}</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-card overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
              <svg className="w-20 h-20 opacity-20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </div>
            <div className="absolute bottom-8 -right-6 bg-primary text-white p-6 rounded-card shadow-card-lg">
              <div className="text-4xl font-extrabold text-accent leading-none font-serif">20+</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center">What We Stand For</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-card p-7 border border-gray-200 hover:shadow-card-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon} /></svg>
                </div>
                <h3 className="font-serif text-xl text-primary font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Credentials</div>
            <h2 className="section-title">Licensed, Insured &amp; Fully Compliant</h2>
            <p className="section-subtitle mt-4 mb-8">
              When you hire Statera, you&apos;re hiring a contractor who takes professional standards seriously. Every project is permitted, insured, and built to Alberta Building Code.
            </p>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 min-w-[20px] rounded-full bg-accent/15 flex items-center justify-center">
                    <svg className="w-3 h-3 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary rounded-card p-10 text-white">
            <div className="section-label text-accent/80">Ready to Start?</div>
            <h3 className="font-serif text-3xl text-white mt-2 mb-4">Let&apos;s Build Something Great</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Free consultations, detailed quotes, and no-pressure conversations. We&apos;re here to help you make the right decision for your home or business.
            </p>
            <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center text-accent/80">Reviews</div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/[0.04] border border-white/[0.06] rounded-card p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-primary text-xs">{t.initials}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/45 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
