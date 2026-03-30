import Link from "next/link";

const serviceLinks = [
  { href: "/services/kitchen-renovation-calgary", label: "Kitchen Renovation" },
  { href: "/services/bathroom-renovation-calgary", label: "Bathroom Renovation" },
  { href: "/services/basement-development-calgary", label: "Basement Development" },
  { href: "/services/commercial-renovation-calgary", label: "Commercial Renovation" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <svg className="h-9 w-auto" viewBox="0 0 50 50" fill="none">
                <path d="M8 12c4-6 12-10 20-8s14 10 14 18" stroke="rgba(255,255,255,.3)" strokeWidth=".7" fill="none" />
                <path d="M30 8c-6-1-14 2-16 8-2 7 6 10 12 12s14 4 12 12c-2 7-10 10-18 8" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
              <span className="font-serif text-lg font-bold tracking-[2px] uppercase text-white">Statera</span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-[260px]">
              Calgary&apos;s trusted renovation experts. Building balanced spaces with over 20 years of craftsmanship and care.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/people/Statera-Contracting/61559736449256/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-accent mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-accent mb-5">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-accent mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14035128755" className="text-white/55 text-sm hover:text-white transition-colors">
                  403-512-8755
                </a>
              </li>
              <li>
                <a href="mailto:statera.contracting@gmail.com" className="text-white/55 text-sm hover:text-white transition-colors">
                  statera.contracting@gmail.com
                </a>
              </li>
              <li className="text-white/55 text-sm">Calgary, AB</li>
              <li className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">WCB</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">Insured</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">Licensed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-white/35 text-xs">
          <p>© {new Date().getFullYear()} Statera Contracting. All rights reserved.</p>
          <p>Calgary&apos;s renovation experts — serving Calgary, Airdrie, Cochrane &amp; Chestermere</p>
        </div>
      </div>
    </footer>
  );
}
