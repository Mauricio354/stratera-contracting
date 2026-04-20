import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Renovation Blog | Calgary Tips & Insights | Statera Contracting",
  description:
    "Calgary renovation tips, guides, and insights from Statera Contracting. Kitchen, bathroom, basement, and commercial renovation advice from 20+ years of experience.",
  alternates: { canonical: "https://stateracontracting.com/blog" },
  openGraph: {
    title: "Renovation Blog | Calgary Tips & Insights | Statera Contracting",
    description:
      "Calgary renovation tips, guides, and insights from Statera Contracting.",
    url: "https://stateracontracting.com/blog",
  },
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featured = allPosts[0];
  const rest = allPosts.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://stateracontracting.com/blog",
    name: "Statera Contracting Blog",
    url: "https://stateracontracting.com/blog",
    description:
      "Calgary renovation tips and insights from Statera Contracting.",
    publisher: { "@id": "https://stateracontracting.com" },
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `https://stateracontracting.com/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, blogSchema]} />

      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent" />
        <div className="container relative z-10">
          <div className="section-label text-accent/80">Insights & Advice</div>
          <h1 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-white leading-[1.1] mt-2 mb-4 max-w-2xl">
            Renovation Blog
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Calgary renovation tips, project walk-throughs, and honest advice
            from 20+ years on the tools.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-gray-100">
        <div className="container max-w-6xl mx-auto">
          {allPosts.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-card p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl text-primary mb-3">
                New posts on the way
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                We&apos;re putting together renovation guides, project
                breakdowns, and planning tips for Calgary homeowners and
                business owners. Check back shortly.
              </p>
              <Link href="/contact" className="btn btn-primary text-sm">
                Get a Free Quote
              </Link>
            </div>
          ) : (
            <>
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid md:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-card overflow-hidden mb-12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
                    <Image
                      src={featured.coverImage}
                      alt={featured.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[1.5px] text-accent-dark font-semibold mb-4">
                      <span>{featured.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-normal normal-case tracking-normal">
                        {formatPostDate(featured.date)}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-3 group-hover:text-accent-dark transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {featured.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      {featured.readingTime} · By {featured.author}
                    </div>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white border border-gray-200 rounded-card overflow-hidden flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={post.coverImage}
                          alt={post.coverAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[1.5px] text-accent-dark font-semibold mb-3">
                          <span>{post.category}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-500 font-normal normal-case tracking-normal">
                            {formatPostDate(post.date)}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg text-primary leading-tight mb-2 group-hover:text-accent-dark transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="text-xs text-gray-500">
                          {post.readingTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-white mb-4">
            Planning a renovation?
          </h2>
          <p className="text-white/55 mb-8">
            Let&apos;s talk through your space. Free, no-obligation consultation
            with a Calgary renovation expert.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+14035128755" className="btn btn-outline">
              Call 403-512-8755
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
