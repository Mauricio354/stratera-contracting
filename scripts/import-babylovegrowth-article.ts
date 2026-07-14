// One-off import: fetch a single BabyLoveGrowth article by ID and print it
// as a Post object ready to paste into lib/posts.ts. Does not write any
// file itself, review the output before adding it to the posts array.
//
// Usage: npx tsx scripts/import-babylovegrowth-article.ts <articleId>

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fetchArticleById } from "../lib/babylovegrowth";

// Next.js loads .env.local automatically at runtime; a standalone script
// doesn't get that for free, so load it here.
try {
  const envPath = join(__dirname, "..", ".env.local");
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^([\w.-]+)=(.*)$/);
    if (match) process.env[match[1]] ??= match[2].trim();
  }
} catch {
  // .env.local not found, rely on whatever is already in the environment
}

const id = Number(process.argv[2]);
if (!id) {
  console.error("Usage: npx tsx scripts/import-babylovegrowth-article.ts <articleId>");
  process.exit(1);
}

fetchArticleById(id)
  .then((post) => {
    console.log(JSON.stringify(post, null, 2));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
