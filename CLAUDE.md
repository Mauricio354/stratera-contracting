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

### Automated daily publish

As of 2026-07-14, this runs unattended via a scheduled routine, no manual "please fetch this" request needed day to day. Mauricio has opted into full automation on the mechanical items below, on the condition that anything matching a hard trip-wire is held instead of published. Do not loosen the trip-wire without him explicitly asking.

This runs as a Claude Code cloud routine (Routines → Statera BabyLoveGrowth Daily Publish), not a local scheduled task, so it works even when nobody's machine is on. A local scheduled task with the same job exists as a fallback and is normally disabled once the cloud routine is confirmed working.

State tracking: `.automation/babylovegrowth-seen.json` in this repo's root, a JSON object keyed by article ID, value `{"status": "published"}` or `{"status": "held", "reason": "..."}`. Check this file before processing an ID a second time. It lives inside the repo (not on a local machine) on purpose: a cloud routine gets a fresh checkout each run, so state has to be committed to persist. Commit updates to this file in the same commit as any content change.

New-article detection: do NOT filter BabyLoveGrowth's article list on `published`. Per their support, that field only flips true after we've already published something ourselves and their crawler confirms it off our sitemap days later, it is never a signal that something is new. A genuinely new article sits at `published: false` forever until we act on it, using it as the trigger means nothing would ever fire. The trigger is simply "its ID is not yet in the state file." Confirmed 2026-07-14: fetched an article whose created_at and updated_at were under a second apart (as fresh as it's possible to catch one) and its content_html was already complete (17k+ characters, properly closed, not truncated). Their system evidently only creates the article record once generation has finished, it doesn't stream partial content into a record while a job like the dashboard's "GENERATING... ready by [time]" countdown is running. No same-day buffer is needed.

Hard trip-wire, hold and notify, never auto-publish:

1. Title matches a comparison/listicle pattern: "top N", "vs", "versus", "alternatives", "best ... companies/contractors/providers", or similar.
2. The article's raw `content_html` (before sanitizing) contains an `<a href>` to any domain other than stateracontracting.com. `lib/babylovegrowth.ts`'s sanitizer strips these before they'd ever render, but a competitor or product vendor link in the raw source is itself the signal that this is a comparison-shaped article, whether or not the safe text still reads fine.

When a trip-wire fires: do not touch `lib/posts.ts`. Mark the state file entry `"held"` with the reason. Send a notification so Mauricio knows without checking manually. Leave it held until he says otherwise, don't re-notify every single day, once per newly-held article is enough.

Mechanical fixes, apply automatically, no hold needed:

3. Byline: any first-person "what I've learned" style section must be attributed to Patrick, never Mauricio. Fix if blank, unclear, or wrongly attributed.
4. Company name: "Statera Contracting" is always two words in body text and visible link text. One word only inside an actual href/domain.
5. Missing-word generation bug: sentences with a dropped subject or clause, often visible as a stray double-space or a sentence starting mid-thought. Fill the gap based on context, this is a known BabyLoveGrowth generation defect, not a reason to hold.
6. Spelling/typos introduced by the generator.
7. Drop the article's opening image if it duplicates `coverImage`, the page template already renders that above the content.

Note every mechanical fix actually applied in the commit message so there's a record, even though nobody has to approve it first.

Once clean, add the post to `lib/posts.ts`, run `npx tsc --noEmit` and `npm run build` to confirm it's valid, commit, and push to `origin main`. Mark the state file entry `"published"`.
