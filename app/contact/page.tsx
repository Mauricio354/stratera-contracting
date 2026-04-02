import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Get a Free Renovation Quote in Calgary | Statera Contracting",
  description:
    "Contact Statera Contracting for a free renovation consultation in Calgary. Kitchen, bathroom, basement & commercial renovations. Call 403-512-8755 or request a quote online.",
  alternates: { canonical: "https://stateracontracting.com/contact" },
  openGraph: {
    title: "Get a Free Renovation Quote in Calgary | Statera Contracting",
    description:
      "Contact Statera Contracting for a free renovation consultation in Calgary. Call 403-512-8755 or request a quote online.",
    url: "https://stateracontracting.com/contact",
  },
};

const contactDetails = [
  {
    icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
    label: "Phone",
    value: "403-512-8755",
    href: "tel:+14035128755",
    desc: "Mon–Fri, 8am–6pm",
  },
  {
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
    label: "Email",
    value: "statera.contracting@gmail.com",
    href: "mailto:statera.contracting@gmail.com",
    desc: "We respond within 24 hours",
  },
  {
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 100 6 3 3 0 000-6z",
    label: "Location",
    value: "Dalhousie, Calgary, Alberta",
    href: null,
    desc: "Serving Calgary & surrounding areas",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        <div className="container relative z-10">
          <div className="section-label text-accent/80">Free Consultation</div>
          <h1 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-white leading-[1.1] mt-2 mb-4 max-w-xl">
            Get a Free Renovation Quote in Calgary
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Tell us about your project and we&apos;ll schedule a free in-home or on-site consultation within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <div className="section-label">Contact Info</div>
            <h2 className="section-title">Let&apos;s Talk About Your Project</h2>
            <p className="section-subtitle mt-4 mb-10">
              Whether you have a detailed plan or just an idea, we&apos;re happy to talk through your options. Free consultations — no pressure, no obligation.
            </p>
            <div className="space-y-6 mb-10">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 stroke-accent-dark" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d.icon} /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="text-primary font-semibold hover:text-accent-dark transition-colors">{d.value}</a>
                    ) : (
                      <div className="text-primary font-semibold">{d.value}</div>
                    )}
                    <div className="text-xs text-gray-500 mt-0.5">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gray-100 rounded-card p-6">
              <h3 className="font-semibold text-primary text-sm mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "By appointment" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-medium text-primary">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <span className="text-xs bg-accent/10 text-accent-dark border border-accent/20 px-3 py-1 rounded-full font-medium">WCB</span>
              <span className="text-xs bg-accent/10 text-accent-dark border border-accent/20 px-3 py-1 rounded-full font-medium">Insured</span>
              <span className="text-xs bg-accent/10 text-accent-dark border border-accent/20 px-3 py-1 rounded-full font-medium">Licensed</span>
              <span className="text-xs bg-accent/10 text-accent-dark border border-accent/20 px-3 py-1 rounded-full font-medium">20+ Years</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-card p-8 shadow-card border border-gray-200">
            <h3 className="font-serif text-2xl text-primary mb-1">Request a Free Quote</h3>
            <p className="text-sm text-gray-600 mb-8">We&apos;ll respond within 24 hours to schedule your free consultation.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
