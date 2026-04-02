import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Renovation FAQs | Calgary Homeowners & Business Owners | Statera",
  description:
    "Answers to the most common questions about renovation costs, timelines, permits, and what to expect when working with a Calgary renovation contractor.",
  alternates: { canonical: "https://stateracontracting.com/faq" },
  openGraph: {
    title: "Renovation FAQs | Calgary Homeowners & Business Owners | Statera",
    description:
      "Answers to the most common questions about renovation costs, timelines, permits, and what to expect when working with a Calgary renovation contractor.",
    url: "https://stateracontracting.com/faq",
  },
};

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "Are you licensed and insured?",
        a: "Yes. Statera Contracting is a fully licensed general contractor in Alberta, WCB (Workers' Compensation Board) insured, and carries comprehensive general liability insurance. We provide certificates of insurance on request.",
      },
      {
        q: "What areas do you serve?",
        a: "We serve Calgary and the surrounding region, including Airdrie, Cochrane, Chestermere, and Okotoks. Within Calgary, we work in all communities — from Kensington and Beltline to NE, NW, SE, and SW Calgary.",
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes — all consultations are free and come with no obligation. We visit your home or commercial space, assess the project, answer your questions, and follow up with a detailed fixed-price quote.",
      },
      {
        q: "How do I get a quote?",
        a: "Fill out our contact form, call us at 403-512-8755, or email statera.contracting@gmail.com. We'll schedule a free in-home or on-site consultation and provide a detailed written quote within a few days.",
      },
      {
        q: "Do you provide warranties on your work?",
        a: "Yes. All Statera renovations come with a workmanship warranty. The duration varies by project type. We stand behind our work and address any deficiencies promptly after project completion.",
      },
    ],
  },
  {
    category: "Residential Renovations",
    questions: [
      {
        q: "How much does a kitchen renovation cost in Calgary?",
        a: "Kitchen renovation costs in Calgary range from $15,000 for a basic cosmetic refresh to $80,000+ for a full custom renovation. Mid-range kitchen renovations typically cost $30,000–$50,000. The main cost drivers are cabinet quality, countertop material, appliances, and whether structural changes are needed. We provide a detailed fixed-price quote after your free consultation.",
        link: { href: "/services/kitchen-renovation-calgary", label: "Learn more about kitchen renovations" },
      },
      {
        q: "How much does a bathroom renovation cost in Calgary?",
        a: "Bathroom renovations in Calgary range from $8,000 for a basic powder room to $50,000+ for a full luxury master ensuite. A standard 5-piece bathroom typically costs $15,000–$30,000. Tile selection, fixture quality, and custom features are the main cost variables.",
        link: { href: "/services/bathroom-renovation-calgary", label: "Learn more about bathroom renovations" },
      },
      {
        q: "How much does basement development cost in Calgary?",
        a: "Basement development in Calgary typically costs $45–$75/sq ft for a standard recreational finish, or $65–$100+/sq ft for a legal suite. A 1,000 sq ft basement runs approximately $45,000–$100,000 depending on complexity and finish level.",
        link: { href: "/services/basement-living-spaces-calgary", label: "Learn more about basement & living spaces" },
      },
      {
        q: "Can you help design the renovation or do I need my own designer?",
        a: "Statera includes design and drawings in our renovation packages. Our team works with you to develop a practical, beautiful design that fits your goals and budget. For high-end architectural or interior design, we can also work alongside your chosen designer.",
      },
      {
        q: "Can I live in my home during the renovation?",
        a: "In most cases, yes. For kitchen renovations, we set up a temporary kitchen area. For bathroom renovations, we sequence work to keep at least one bathroom functional. For large whole-home renovations, some clients choose to temporarily relocate during the heaviest construction phases.",
      },
    ],
  },
  {
    category: "Commercial Renovations",
    questions: [
      {
        q: "Do you handle commercial permit applications in Calgary?",
        a: "Yes. Statera manages all commercial permit applications with the City of Calgary, including development permits, building permits, and occupancy certificates. For restaurant fit-ups, we also coordinate with Alberta Health Services (AHS) as required.",
        link: { href: "/services/commercial-renovation-calgary", label: "Learn more about commercial renovations" },
      },
      {
        q: "Can you work in an occupied building?",
        a: "Yes. We regularly perform tenant improvements and renovations in occupied commercial buildings. We establish clear hoarding and access protocols, work in phases to minimize disruption, and can schedule noisy or dusty work outside of business hours when required.",
      },
      {
        q: "Do you do restaurant fit-ups in Calgary?",
        a: "Yes — restaurant and café fit-ups are one of our specialties. We handle commercial kitchen coordination, ventilation hoods, plumbing, accessible washroom construction, and all front-of-house finishing. We're familiar with AHS inspection requirements.",
      },
      {
        q: "Do you work with franchise build-outs?",
        a: "Yes. We have experience building to franchise standards and brand guidelines. We work directly with your franchise development coordinator and can meet required timelines tied to franchise agreements.",
      },
    ],
  },
  {
    category: "Process & Permits",
    questions: [
      {
        q: "Do I need a permit for my renovation in Calgary?",
        a: "It depends on the scope. Permits are required in Calgary for: structural changes (moving walls, adding windows, removing load-bearing walls), plumbing rough-in and relocation, electrical upgrades, new basement development, and legal suites. Purely cosmetic work (new flooring, paint, cabinet replacement in same location) typically does not require a permit. Statera handles all permit applications as part of our project management.",
      },
      {
        q: "How long does the permit process take in Calgary?",
        a: "Permit timelines vary. Simple residential permits are often approved within 2–4 weeks. Complex projects (legal suites, commercial renovations, structural changes) can take 4–10 weeks. We factor permit timelines into your project schedule and begin pre-construction planning while permits are pending.",
      },
      {
        q: "What happens during inspections?",
        a: "The City of Calgary requires inspections at specific stages of construction (framing, electrical rough-in, plumbing rough-in, insulation, etc.). Statera schedules and coordinates all inspections. Our work is built to pass inspections the first time — we don't cut corners on code compliance.",
      },
      {
        q: "How do you handle project communication?",
        a: "You'll have a dedicated project manager as your single point of contact throughout your renovation. We provide regular progress updates, flag any decisions that require your input promptly, and are available by phone or email throughout the project.",
      },
      {
        q: "What does your cleanup process look like?",
        a: "We maintain a clean and organized worksite throughout the project and do a thorough cleanup at the end of each workday. Final project handover includes a complete cleanup and removal of all construction debris.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema]} />

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent" />
        <div className="container relative z-10">
          <div className="section-label text-accent/80">Help Centre</div>
          <h1 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-white leading-[1.1] mt-2 mb-4 max-w-2xl">
            Renovation FAQs
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Answers to Calgary homeowners&apos; and business owners&apos; most common renovation questions.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-100">
        <div className="container max-w-4xl mx-auto">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-14">
              <h2 className="font-serif text-2xl text-primary mb-6 pb-3 border-b-2 border-accent/30">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((faq, i) => (
                  <details key={i} className="group bg-white border border-gray-200 rounded-card overflow-hidden">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-primary text-sm hover:bg-gray-50 transition-colors gap-4">
                      {faq.q}
                      <svg className="w-5 h-5 min-w-[20px] text-gray-400 transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </summary>
                    <div className="px-5 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {faq.a}
                      {"link" in faq && faq.link && (
                        <Link href={faq.link.href} className="block mt-3 text-accent-dark font-medium hover:underline text-xs">
                          → {faq.link.label}
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-white mb-4">Still have questions?</h2>
          <p className="text-white/55 mb-8">We&apos;re happy to answer any questions about your specific project. Get in touch for a free, no-obligation consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <a href="tel:+14035128755" className="btn btn-outline">Call 403-512-8755</a>
          </div>
        </div>
      </section>
    </>
  );
}
