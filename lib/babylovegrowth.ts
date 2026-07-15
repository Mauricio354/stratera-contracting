// BabyLoveGrowth article import.
//
// Per BabyLoveGrowth support, the API integration does not auto-publish:
// their own "Publish" button and the API's `published` field don't push
// anything live. The only way an article goes live is fetching it here and
// adding it to lib/posts.ts by hand, then their crawler notices the URL in
// our sitemap and flips their dashboard to "published" a day or two later.
// That makes this a one-off import step, not a live feed, run it locally
// when asked to bring in a specific article, never at request or build time.
//
// The article body arrives as raw HTML from a third-party generator, so it
// is sanitized before use: standard content tags are kept, and outbound
// links are kept too. Decision 2026-07-15: Mauricio was told this renders
// live, clickable links to other BabyLoveGrowth accounts (including direct
// competitors) as part of their reciprocal "backlink credit" system, that
// this is a recognized Google link-scheme pattern, and chose to accept
// that risk. Outbound links get rel="nofollow noopener noreferrer" and
// target="_blank" as a partial mitigation, they still render, but aren't
// passed as an endorsement. Do not go back to stripping them without him
// asking. It does not touch the surrounding wording, so the fetched
// article still needs a human read before it's added to lib/posts.ts.

import sanitizeHtml from "sanitize-html";
import type { Post } from "./posts";

const API_BASE = "https://api.babylovegrowth.ai/api/integrations/v1";
const SITE_HOST = "stateracontracting.com";

type ArticleDetail = {
  id: number;
  title: string;
  slug: string;
  hero_image_url: string;
  excerpt: string;
  created_at: string;
  content_html: string;
  meta_description: string;
};

async function fetchJson<T>(path: string): Promise<T> {
  const key = process.env.BABYLOVEGROWTH_API_KEY;
  if (!key) throw new Error("BABYLOVEGROWTH_API_KEY is not set");

  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "X-API-Key": key, "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`BabyLoveGrowth API error: ${res.status}`);
  return res.json();
}

// Keeps same-site links as-is. Marks any link off the Statera domain
// rel="nofollow noopener noreferrer" and target="_blank" rather than
// stripping it, see the file header for why.
function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2", "h3", "h4", "p", "ul", "ol", "li", "strong", "em", "b", "i",
      "blockquote", "table", "thead", "tbody", "tr", "th", "td", "img", "a",
      "br",
    ],
    allowedAttributes: {
      img: ["src", "alt"],
      a: ["href", "rel", "target"],
    },
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        let isExternal = false;
        try {
          const url = new URL(href, `https://${SITE_HOST}`);
          isExternal = url.hostname !== SITE_HOST && !url.hostname.endsWith(`.${SITE_HOST}`);
        } catch {
          isExternal = false; // unparseable href, leave attributes as-is
        }
        if (!isExternal) return { tagName, attribs };
        return {
          tagName,
          attribs: { ...attribs, rel: "nofollow noopener noreferrer", target: "_blank" },
        };
      },
    },
  });
}

function estimateReadingTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// Fetches one article by its BabyLoveGrowth ID and maps it into the site's
// Post shape, sanitized and ready to review before adding to lib/posts.ts.
export async function fetchArticleById(id: number): Promise<Post> {
  const detail = await fetchJson<ArticleDetail>(`/articles/${id}`);
  return {
    slug: detail.slug,
    title: detail.title,
    excerpt: detail.excerpt,
    date: detail.created_at.slice(0, 10),
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
