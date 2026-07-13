// BabyLoveGrowth content feed.
//
// Pulls published articles from the BabyLoveGrowth API and maps them into
// the same `Post` shape the hand-written blog uses, so they render through
// the existing page templates and styling. Publish state is whatever
// BabyLoveGrowth's own dashboard has set, this module just mirrors it.
//
// The article body arrives as raw HTML from a third-party generator, so it
// is sanitized before rendering: standard content tags are kept, but any
// link pointing off the Statera domain is stripped to text. BabyLoveGrowth's
// own network model places outbound links to other accounts (including
// direct competitors) inside the generated body text, so this is a hard
// requirement, not a style preference.

import sanitizeHtml from "sanitize-html";
import type { Post } from "./posts";

const API_BASE = "https://api.babylovegrowth.ai/api/integrations/v1";
const SITE_HOST = "stateracontracting.com";

type ArticleSummary = {
  id: number;
  title: string;
  slug: string;
  hero_image_url: string;
  excerpt: string;
  created_at: string;
  published: boolean;
};

type ArticleDetail = ArticleSummary & {
  content_html: string;
  meta_description: string;
};

function apiKey(): string | undefined {
  return process.env.BABYLOVEGROWTH_API_KEY;
}

async function fetchJson<T>(path: string): Promise<T> {
  const key = apiKey();
  if (!key) throw new Error("BABYLOVEGROWTH_API_KEY is not set");

  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "X-API-Key": key, "Content-Type": "application/json" },
    // Mirrors BabyLoveGrowth's own guidance: revalidate once a day rather
    // than polling on every request.
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`BabyLoveGrowth API error: ${res.status}`);
  return res.json();
}

async function fetchAllSummaries(): Promise<ArticleSummary[]> {
  const all: ArticleSummary[] = [];
  let offset = 0;
  const limit = 50;

  while (true) {
    const page = await fetchJson<ArticleSummary[]>(
      `/articles?limit=${limit}&offset=${offset}`
    );
    all.push(...page);
    if (page.length < limit) break;
    offset += limit;
  }

  return all;
}

// Strips any link that doesn't point at the Statera domain down to plain
// text, keeping same-site links and every other standard content tag.
function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2", "h3", "h4", "p", "ul", "ol", "li", "strong", "em", "b", "i",
      "blockquote", "table", "thead", "tbody", "tr", "th", "td", "img", "a",
      "br",
    ],
    allowedAttributes: {
      img: ["src", "alt"],
      a: ["href"],
    },
    exclusiveFilter: (frame) => {
      if (frame.tag !== "a") return false;
      const href = frame.attribs.href || "";
      try {
        const url = new URL(href, `https://${SITE_HOST}`);
        return url.hostname !== SITE_HOST && !url.hostname.endsWith(`.${SITE_HOST}`);
      } catch {
        return true; // unparseable href, drop the link, keep the text
      }
    },
  });
}

function estimateReadingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toPost(detail: ArticleDetail): Post {
  const date = detail.created_at.slice(0, 10);
  return {
    slug: detail.slug,
    title: detail.title,
    excerpt: detail.excerpt,
    date,
    author: "Industry News",
    coverImage: detail.hero_image_url,
    coverAlt: detail.title,
    category: "Industry News",
    readingTime: estimateReadingTime(detail.content_html),
    metaTitle: detail.title,
    metaDescription: detail.meta_description,
    content: [{ type: "html", html: sanitizeArticleHtml(detail.content_html) }],
  };
}

// Returns every published BabyLoveGrowth article mapped into the site's
// Post shape. Returns an empty array (rather than throwing) if the feed is
// unreachable or unconfigured, so a feed outage never takes down the blog.
export async function getIndustryPosts(): Promise<Post[]> {
  if (!apiKey()) return [];

  try {
    const summaries = (await fetchAllSummaries()).filter((a) => a.published);
    const details = await Promise.all(
      summaries.map((a) => fetchJson<ArticleDetail>(`/articles/${a.id}`))
    );
    return details.map(toPost);
  } catch (err) {
    console.error("BabyLoveGrowth feed error:", err);
    return [];
  }
}
