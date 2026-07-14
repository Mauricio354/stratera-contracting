# Statera Contracting — Project Context

Calgary renovation contractor. Next.js 16 App Router, React 19, Tailwind, deployed to Vercel. Service area: Calgary, Bearspaw, Rocky View County.

## BabyLoveGrowth content import

Statera uses BabyLoveGrowth (AI SEO content generator) on the API integration method. This is a manual import workflow, not a live feed. Confirmed with BabyLoveGrowth support:

- Their "Publish" button does not push anything live. The API's `published` field never flips to true from their side.
- The only way an article goes live is: fetch it, add it to `lib/posts.ts` by hand, deploy. Their crawler then finds the URL in our sitemap and flips their dashboard to "published" a day or two later, as a confirmation, not a trigger.
- There is no auto-publish path for a custom Next.js site on this integration type. Every article requires a human read before it goes live.

Fetch a specific article with:

```
npx tsx scripts/import-babylovegrowth-article.ts <articleId>
```

This prints a `Post` object (sanitized HTML, any link off the Statera domain already stripped) ready to review and paste into `lib/posts.ts`. It does not publish anything itself.

### Checklist for every fetched article, before it goes into lib/posts.ts

Apply all of these. Fix what can be fixed inline, flag anything that needs a judgment call rather than guessing.

1. Reject anything shaped like a competitor comparison, "top providers," "best of," or "alternatives" listicle that names other companies. The BabyLoveGrowth Article Types setting has "Listicle Product Comparison" unchecked to prevent most of these, but re-check, a new draft naming competitors (e.g. Pinnacle Group Renovations, Reborn Renovations) must never be published.
2. Byline: any first-person "what I've learned" style section must be attributed to Patrick, never Mauricio. If it's blank, unclear, or wrongly attributed, fix it.
3. Company name: "Statera Contracting" is always two words in body text and in visible link text. It's one word only inside an actual href/domain (stateracontracting.com).
4. Scan for the missing-word generation bug: sentences with a dropped subject or clause, usually visible as a stray double-space or a sentence that starts mid-thought ("The costs between $25,000 and $55,000..."). This shows up often, propose a fix based on context and confirm it rather than inventing a stat silently.
5. Flag unsourced statistics presented as fact ("72% of professionals...") with no citation. Confirm with Mauricio whether to cut or verify before publishing.
6. Check spelling/typos introduced by the generator (e.g. "programes").
7. Outbound links off the Statera domain are already stripped automatically by `lib/babylovegrowth.ts`'s sanitizer, this doesn't need manual checking, but the surrounding text may still name a competitor even with the link removed, that's covered by rule 1.

After fixes, show Mauricio the specific changes before adding the post to `lib/posts.ts`, don't publish silently even when a fix looks obvious.
