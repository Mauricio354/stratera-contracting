import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
  variant?: "light" | "dark";
}

export default function ServiceCard({ slug, shortTitle, description, icon, variant = "light" }: ServiceCardProps) {
  const isDark = variant === "dark";
  return (
    <Link
      href={`/services/${slug}`}
      className={`group block rounded-card p-7 border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.07]"
          : "bg-white border-gray-200 hover:shadow-card-lg hover:border-accent/30"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isDark ? "bg-accent/10" : "bg-accent/10"}`}>
        <span className="text-accent-dark">{icon}</span>
      </div>
      <h3 className={`font-serif text-xl font-bold mb-2 group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-primary"}`}>
        {shortTitle}
      </h3>
      <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-white/55" : "text-gray-600"}`}>{description}</p>
      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all`}>
        Learn more
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </span>
    </Link>
  );
}
