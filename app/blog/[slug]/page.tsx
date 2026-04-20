import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";
import PostContent from "@/components/PostContent";
import {
  getAllPosts,
  getPostBySlug,
  formatPostDate,
} from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://stateracontracting.com/blog/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://stateracontracting.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Statera Contracting",
      logo: {
        "@type": "ImageObject",
        url: "https://stateracontracting.com/images/statera-logo-navbar.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stateracontracting.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, articleSchema]} />

      {/* Hero */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent" />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent/80 hover:text-accent text-xs font-semibold uppercase tracking-[1.5px] mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[1.5px] text-accent font-semibold mb-4">
            <span>{post.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60 font-normal normal-case tracking-normal">
              {formatPostDate(post.date)}
            </span>
          </div>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.15] mb-5">
            {post.title}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="text-white/45 text-xs">
            By {post.author} · {post.readingTime}
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-gray-100">
        <div className="container max-w-4xl mx-auto -mt-8 relative z-20">
          <div className="relative aspect-[16/9] rounded-card overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-3xl mx-auto">
          <article className="bg-white border border-gray-200 rounded-card p-8 md:p-12">
            <PostContent blocks={post.content} />
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl text-primary mb-8">
              More from the blog
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-gray-100 border border-gray-200 rounded-card overflow-hidden flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.coverImage}
                      alt={p.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[11px] uppercase tracking-[1.5px] text-accent-dark font-semibold mb-2">
                      {p.category}
                    </div>
                    <h3 className="font-serif text-lg text-primary leading-tight group-hover:text-accent-dark transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-white/55 mb-8">
            Free, no-obligation consultation with a Calgary renovation expert.
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
