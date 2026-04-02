import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import GalleryGrid from "@/components/GalleryGrid";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Statera Contracting | Calgary Renovation Experts",
  description:
    "Calgary's trusted renovation contractor with 20+ years of experience. Kitchen, bathroom, basement & commercial renovations. Licensed, insured & WCB compliant. Free consultation.",
  alternates: { canonical: "https://stateracontracting.com" },
  openGraph: {
    title: "Statera Contracting | Calgary Renovation Experts",
    description:
      "Calgary's trusted renovation contractor with 20+ years of experience. Kitchen, bathroom, basement & commercial renovations. Free consultation.",
    url: "https://stateracontracting.com",
  },
};

const serviceCards = [
  {
    slug: "kitchen-renovation-calgary",
    shortTitle: "Kitchen Renovation",
    description:
      "Complete kitchen transformations — custom cabinetry, countertops, appliances, and layouts that maximize function and style.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    slug: "bathroom-renovation-calgary",
    shortTitle: "Bathroom Renovation",
    description:
      "From powder rooms to luxury master ensuites — spa-inspired designs with expert tile work, plumbing, and custom vanities.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16" /><path d="M4 12a2 2 0 01-2-2V6a2 2 0 012-2h1a2 2 0 012 2v1" /><rect x="2" y="12" width="20" height="8" rx="2" />
      </svg>
    ),
  },
  {
    slug: "basement-living-spaces-calgary",
    shortTitle: "Basement & Living Spaces",
    description:
      "Unlock the potential beneath your home. Legal suites, recreation rooms, home offices — all fully permitted and built to code.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" /><path d="M17 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    slug: "commercial-renovation-calgary",
    shortTitle: "Commercial Renovation",
    description:
      "Offices, restaurants, retail, and tenant improvements — professional-grade commercial build-outs built on time and on budget.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    slug: "home-additions-calgary",
    shortTitle: "Home Additions",
    description:
      "Room additions, bump-outs, second-storey extensions, and sunrooms — seamlessly blended with your existing home.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    initials: "L",
    name: "Lee",
    role: "Commercial Client",
    text: "Statera has been a partner with us for several years now, managing rebuild projects of assorted sizes. Statera has demonstrated repeatedly an ability to deliver projects on time and budget, without sacrificing quality. I have found Statera to be both collaborative and reasonable, adapting to our unique needs.",
  },
  {
    initials: "MG",
    name: "Michael & Gen",
    role: "Residential Client",
    text: "We hired Patrick and his company for a renovation of our recent purchase home before we moved in. From that first meeting to get our estimate up until the very end, Patrick was great to work with. He was incredibly honest, upfront, and professional. He listened to our concerns and provided solutions with no judgement. We were very comfortable going to him with any questions or concerns. Patrick and his team paid great attention to detail and you could tell they took pride in their work. As for the renovation itself, we were very impressed with how well it turned out. Communication was quick, clear, and concise, so we always knew what to expect next. Overall, great experience and a job well done. We will certainly use him again for our future projects.",
  },
  {
    initials: "S",
    name: "Samantha",
    role: "Designer",
    text: "I have known Patrick for over fifteen years and have worked with him on multiple projects. As an interior designer I\u2019ve worked with a lot of general contractors over the years and Patrick is one of the best. He is very easy to work with, a great communicator, transparent and an overall awesome guy. I can\u2019t recommend him enough, you won\u2019t be disappointed!",
  },
  {
    initials: "MM",
    name: "Matty & Maria",
    role: "Residential Client",
    text: "Fantastic job Patrick and his team at Statera contracting did on our home renovation. We have used them multiple times and have been happy each time! Communication was a breeze throughout the project, and they were always attentive to our needs and our preferences. The end result exceeded our expectations - our space looks absolutely lovely! Highly recommend their services to anyone looking for top notch craftmanship and professionalism.",
  },
  {
    initials: "R",
    name: "Richard",
    role: "Commercial Client",
    text: "I don\u2019t normally write reviews but I just had to say something about Patrick Ballard and the great service he provided me. I told him what I was envisioning and asked him for suggestions. The ideas he came back with were creative and embodied what I was trying to achieve. He made it happen and it turned out better than I imagined. Thank you, Patrick and the Statera team for the top-notch customer care. Keep up the great work.",
  },
  {
    initials: "D",
    name: "Dennis",
    role: "Real Estate Investor",
    text: "I\u2019ve used Statera on many different occasions and have found their work to be both innovative and creative. Their crew is professional to work with in all aspects. I would have no hesitation or reservation in utilizing their services again in the future or recommending them to anyone needing renovation work.",
  },
];

const galleryItems = [
  { src: "/images/kitchens/DSC_9938 (1).jpg", alt: "Kitchen renovation Calgary — modern finishes", label: "Modern Kitchen — Complete Renovation" },
  { src: "/images/bathrooms/DSC_6625.jpg", alt: "Bathroom renovation Calgary — contemporary design", label: "Contemporary Bathroom — Full Remodel" },
  { src: "/images/living-spaces/04_127_Hidden_Spring_Mews_NW4 - Copy.jpg", alt: "Hidden Spring Mews Calgary — living space renovation", label: "Hidden Spring Mews — Living Space" },
  { src: "/images/kitchens/14-web-or-mls-_MG_0029_1.jpg", alt: "Kitchen renovation Calgary", label: "Custom Kitchen — Full Gut Renovation" },
  { src: "/images/living-spaces/DSC_5276 - Copy.jpg", alt: "Basement and living space renovation Calgary", label: "Basement & Living Space — Full Development" },
  { src: "/images/commercial/TheStill_Mar8_MichaelTrudeauPhotography_-6.jpg", alt: "The Still Calgary — bar and dining area", label: "The Still — Bar & Dining Area" },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#222]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent opacity-[0.08]" style={{ clipPath: "polygon(100% 0,100% 100%,0 100%)" }} />
        <div className="absolute top-[20%] right-[10%] w-36 h-36 border-2 border-accent/[0.12] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white to-transparent" />
        <div className="container relative z-10 pt-12 pb-24">
          <div className="max-w-2xl">
            <div className="section-label text-accent/80 mb-6">Calgary&apos;s Renovation Experts</div>
            <h1 className="font-serif text-[clamp(2.75rem,5vw,4.25rem)] text-white leading-[1.1] mb-6">
              Renovation Solutions<br /><span className="text-accent">Built for You.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-[500px] mb-10">
              Calgary&apos;s trusted renovation contractor with over 20 years of experience transforming residential and commercial spaces into extraordinary environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/kitchen-renovation-calgary" className="btn btn-outline">View Our Services</Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              {["Licensed & Insured", "WCB Compliant", "20+ Years Experience", "Free Consultations"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-white/50 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-card overflow-hidden">
              <Image src="/images/patrick-headshot.jpg" alt="Patrick Ballard - Owner of Statera Contracting" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="absolute bottom-8 -right-6 bg-primary text-white p-6 rounded-card shadow-card-lg text-center">
              <div className="text-4xl font-extrabold text-accent leading-none">20+</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">Years of<br />Excellence</div>
            </div>
          </div>
          <div>
            <div className="section-label">About Statera</div>
            <h2 className="section-title">A Client-First Approach to Every Renovation</h2>
            <p className="text-gray-600 leading-[1.9] mt-6">
              Statera Contracting was built on a unique outlook of the renovation process. With over two decades of experience in Calgary, we believe every project deserves a dedicated, transparent, and collaborative approach. From heritage restorations to modern commercial build-outs, we bring meticulous craftsmanship and honest communication to every job we take on.
            </p>
            <p className="text-gray-600 leading-[1.9] mt-4">
              The name &quot;Statera&quot; comes from the Latin word for balance — and that&apos;s exactly what we bring to your project. We balance timelines with quality, budgets with ambition, and your vision with practical expertise.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { title: "Licensed & Insured", desc: "Full coverage for your peace of mind", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                { title: "On-Time Delivery", desc: "We respect your schedule and budget", icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4 12 14.01 9 11.01" },
                { title: "Dedicated Team", desc: "Skilled tradespeople on every job", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z" },
                { title: "Clear Communication", desc: "Transparent updates every step", icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 items-start">
                  <div className="w-10 h-10 min-w-[40px] rounded-[10px] bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={f.icon} /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">{f.title}</h4>
                    <p className="text-xs text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center">What We Do</div>
            <h2 className="section-title">Our Renovation Services</h2>
            <p className="section-subtitle mx-auto max-w-xl mt-4">
              From concept to completion, comprehensive renovation solutions tailored to your unique needs and vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center">Our Portfolio</div>
            <h2 className="section-title">Recent Renovation Projects</h2>
            <p className="section-subtitle mx-auto max-w-xl mt-4">
              A selection of our proudest transformations across Calgary. Each project tells a story of collaboration and craftsmanship.
            </p>
          </div>
          <GalleryGrid images={galleryItems} columns={3} />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center text-accent/80">Client Reviews</div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] text-white leading-tight mb-4">What Our Clients Say</h2>
            <p className="text-white/50 text-[1.05rem] max-w-xl mx-auto">Our reputation is built on trust, transparency, and exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/[0.04] border border-white/[0.06] rounded-card p-8 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                </div>
                <p className="text-white/75 text-[0.95rem] leading-relaxed italic mb-6 line-clamp-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center font-bold text-primary text-sm">{t.initials}</div>
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

      {/* ── SERVICE AREAS ── */}
      <section className="py-16 bg-gray-100">
        <div className="container text-center">
          <div className="section-label justify-center">Where We Work</div>
          <h2 className="section-title">Serving Calgary &amp; Surrounding Areas</h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Statera Contracting serves homeowners and businesses throughout Calgary and the surrounding region, including neighbourhoods like{" "}
            <strong>Kensington, Beltline, Inglewood, Bridgeland, Mount Royal, Altadore, Marda Loop, Ramsay, Hillhurst, Sunnyside</strong>, and communities across{" "}
            <strong>NW, NE, SW, and SE Calgary</strong>. We also serve{" "}
            <strong>Airdrie, Cochrane, Chestermere, and Okotoks</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Kensington", "Beltline", "Inglewood", "Bridgeland", "Mount Royal", "Altadore", "Marda Loop", "NW Calgary", "NE Calgary", "SW Calgary", "SE Calgary", "Airdrie", "Cochrane", "Chestermere"].map((area) => (
              <span key={area} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 font-medium">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-4">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let&apos;s Build Something Great Together</h2>
            <p className="section-subtitle mt-4 mb-10">Ready to start your renovation? Fill out the form and we&apos;ll get back to you within 24 hours with a free consultation.</p>
            <div className="space-y-6">
              {[
                { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 100 6 3 3 0 000-6z", label: "Location", value: "Calgary, Alberta, Canada" },
                { icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z", label: "Phone", value: "403-512-8755", href: "tel:+14035128755" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", label: "Email", value: "statera.contracting@gmail.com", href: "mailto:statera.contracting@gmail.com" },
              ].map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d.icon} /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">{d.label}</h4>
                    {d.href ? (
                      <a href={d.href} className="text-sm text-gray-600 hover:text-accent-dark transition-colors font-medium">{d.value}</a>
                    ) : (
                      <p className="text-sm text-gray-600">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-card p-8 shadow-card border border-gray-200">
            <h3 className="font-serif text-2xl text-primary mb-1">Request a Free Quote</h3>
            <p className="text-sm text-gray-600 mb-8">Tell us about your project and we&apos;ll get back to you promptly.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
