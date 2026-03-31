import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { getRelatedServices } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

const serviceIcons: Record<string, React.ReactNode> = {
  "kitchen-renovation-calgary": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "bathroom-renovation-calgary": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16" /><path d="M4 12a2 2 0 01-2-2V6a2 2 0 012-2h1a2 2 0 012 2v1" /><rect x="2" y="12" width="20" height="8" rx="2" />
    </svg>
  ),
  "basement-development-calgary": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" /><path d="M17 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
    </svg>
  ),
  "commercial-renovation-calgary": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

interface Props {
  service: Service;
}

export default function ServicePageTemplate({ service }: Props) {
  const related = getRelatedServices(service.relatedSlugs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@id": "https://stateracontracting.com" },
    areaServed: { "@type": "City", name: "Calgary", addressRegion: "AB" },
    description: service.metaDescription,
    url: `https://stateracontracting.com/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const relatedDescriptions: Record<string, string> = {
    "kitchen-renovation-calgary": "Complete kitchen transformations — custom cabinetry, countertops, and full gut renovations.",
    "bathroom-renovation-calgary": "Spa-inspired bathroom renovations with expert tile work, plumbing, and custom vanities.",
    "basement-development-calgary": "Legal suites, recreation rooms, and home offices — fully permitted and built to code.",
    "commercial-renovation-calgary": "Offices, restaurants, retail, and tenant improvements — professional-grade build-outs.",
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* ── BREADCRUMB ── */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-600">
            <Link href="/" className="hover:text-accent-dark transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">Services</span>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt={service.title} fill className="object-cover opacity-20" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="container relative z-10 pt-10 pb-20">
          <div className="max-w-2xl">
            <div className="section-label text-accent/80">Calgary Renovation Contractor</div>
            <h1 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] text-white leading-[1.1] mt-2 mb-6">
              {service.heroHeadline}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-[520px] mb-8">{service.heroTagline}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href="tel:+14035128755" className="btn btn-outline">Call 403-512-8755</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-primary border-t border-white/10 py-4">
        <div className="container flex flex-wrap justify-center gap-6">
          {["Licensed & Insured", "WCB Compliant", "20+ Years Experience", "Free Consultations", "Calgary Owned & Operated"].map((item) => (
            <span key={item} className="flex items-center gap-2 text-white/50 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO + INCLUDES ── */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Overview</div>
            <h2 className="section-title">Expert {service.shortTitle} in Calgary</h2>
            <p className="text-gray-600 leading-[1.9] mt-6 text-[1.05rem]">{service.intro}</p>
            <Link href="/contact" className="btn btn-dark mt-8 inline-flex">
              Start With a Free Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div>
            <div className="section-label">What&apos;s Included</div>
            <h2 className="section-title">Everything in One Contract</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="w-5 h-5 min-w-[20px] rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent-dark" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center">How It Works</div>
            <h2 className="section-title">Our {service.shortTitle} Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-8px)] w-full h-px bg-gray-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary text-accent font-bold font-serif text-lg flex items-center justify-center mb-5 shadow-card">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST FACTORS ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label">Pricing Guide</div>
            <h2 className="section-title">What Affects the Cost of {service.shortTitle} in Calgary?</h2>
            <p className="text-gray-600 leading-relaxed mt-4 mb-10">
              Every project is unique. Here are the main factors that influence the cost of your renovation. We provide a detailed, fixed-price quote after your free consultation — no hidden fees.
            </p>
            <div className="space-y-4">
              {service.costFactors.map((cf, i) => (
                <div key={i} className="flex gap-5 p-5 bg-gray-100 rounded-card border border-gray-200">
                  <div className="w-8 h-8 min-w-[32px] rounded-lg bg-accent/15 flex items-center justify-center text-accent-dark font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{cf.factor}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cf.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label justify-center">Our Work</div>
            <h2 className="section-title">{service.shortTitle} Projects in Calgary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-card overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">{service.shortTitle} FAQs</h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-card overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-primary text-sm hover:bg-gray-100 transition-colors gap-4">
                  {faq.q}
                  <svg className="w-5 h-5 min-w-[20px] text-gray-400 transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Have more questions? <Link href="/faq" className="text-accent-dark font-medium hover:underline">View all FAQs</Link> or <Link href="/contact" className="text-accent-dark font-medium hover:underline">contact us directly</Link>.
          </p>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label justify-center text-accent/80">More From Statera</div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] text-white leading-tight">Related Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                shortTitle={s.shortTitle}
                description={relatedDescriptions[s.slug] || s.metaDescription}
                icon={serviceIcons[s.slug]}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + CONTACT ── */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-4">
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Ready to Start Your {service.shortTitle}?</h2>
            <p className="section-subtitle mt-4 mb-8">
              Get a free, no-obligation consultation. We&apos;ll assess your space, discuss your goals, and provide a detailed fixed-price quote within a few days.
            </p>
            <div className="space-y-4">
              <a href="tel:+14035128755" className="flex items-center gap-3 group">
                <div className="w-12 h-12 min-w-[48px] rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Call us directly</div>
                  <div className="text-primary font-semibold group-hover:text-accent-dark transition-colors">403-512-8755</div>
                </div>
              </a>
              <a href="mailto:statera.contracting@gmail.com" className="flex items-center gap-3 group">
<div className="w-12 h-12 min-w-[48px] rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" /></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email us</div>
                  <div className="text-primary font-semibold group-hover:text-accent-dark transition-colors">statera.contracting@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-card p-8 shadow-card border border-gray-200">
            <h3 className="font-serif text-2xl text-primary mb-1">Request a Free Quote</h3>
            <p className="text-sm text-gray-600 mb-8">We&apos;ll respond within 24 hours to schedule your consultation.</p>
            <ContactForm defaultService={service.shortTitle} />
          </div>
        </div>
      </section>
    </>
  );
}
