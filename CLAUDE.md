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

As of 2026-07-14, this runs unattended, no manual "please fetch this" request needed day to day. Mauricio has opted into full automation on the mechanical items below, on the condition that anything matching a hard trip-wire is held instead of published. Do not loosen the trip-wire without him explicitly asking.

This runs as a Claude Code cloud routine (Routines → Statera BabyLoveGrowth Daily Publish), on Anthropic-managed cloud infrastructure, so it works even when nobody's machine is on. As of 2026-07-15 the routine has two triggers:

- **API trigger (primary)**. BabyLoveGrowth's webhook fires the moment an article is finalized on their end, confirmed with their support: this happens before any manual publish step on our side and doesn't depend on our sitemap being crawled, which is the reliable "this article is really done" signal the old polling approach never had. Their webhook can't call the routine directly (it requires a beta header their wizard has no way to set, and its body only accepts freeform text, not their article JSON), so it posts to a relay at `app/api/babylovegrowth-webhook/route.ts` on this site. That route checks BabyLoveGrowth's bearer token against `BABYLOVEGROWTH_WEBHOOK_SECRET`, then fires the routine via `https://api.anthropic.com/v1/claude_code/routines/{id}/fire` using `CLAUDE_ROUTINE_TOKEN`, passing the article's ID and title as the run's `text` context. This depends on BabyLoveGrowth's "Automatically Publish" toggle (Settings → Integrations) staying on, if it's ever off, their own dashboard Publish button becomes the gate again and the webhook only fires when a human clicks it over there.
- **Schedule trigger (fallback)**. Runs daily as a backstop for a webhook delivery that's missed, delayed by relay downtime, or dropped. It starts with no specific article in mind, so it falls back to listing all articles and diffing against the state file.

If the relay can't reach the routine (routine paused, token rotated, etc.) it emails mauricio@mrwebsolutions.ca via Resend and logs the failure in Vercel. That's the only proactive signal a webhook delivery failed; the daily schedule trigger will still catch anything missed within 24 hours regardless.

State tracking: `.automation/babylovegrowth-seen.json` in this repo's root, a JSON object keyed by article ID, value `{"status": "published"}` or `{"status": "held", "reason": "..."}`. Check this file before processing an ID a second time, even one delivered by the webhook, this is what stops a retried webhook delivery or an overlapping schedule run from double-publishing. It lives inside the repo (not on a local machine) on purpose: a cloud routine gets a fresh checkout each run, so state has to be committed to persist. Commit updates to this file in the same commit as any content change.

New-article detection: when a run starts with a message naming a specific "Article ID" (the webhook path), process only that article, fetch it directly by ID and skip the list step entirely. When a run starts with no specific article (the daily schedule fallback), list the full article set and process every ID not yet in the state file. Either way, do NOT filter on `published`. Per BabyLoveGrowth support, that field only flips true after we've already published something ourselves and their crawler confirms it off our sitemap days later, it is a confirmation, never a trigger. Confirmed 2026-07-14: fetched an article whose created_at and updated_at were under a second apart (as fresh as it's possible to catch one) and its content_html was already complete (17k+ characters, properly closed, not truncated). Their system evidently only creates the article record once generation has finished, it doesn't stream partial content into a record while a job like the dashboard's "GENERATING... ready by [time]" countdown is running. No same-day buffer is needed on the fallback path either.

Hard trip-wire, hold and notify, never auto-publish:

1. Title matches a comparison/listicle pattern: "top N", "vs", "versus", "alternatives", "best ... companies/contractors/providers", or similar.
2. The article's raw `content_html` (before sanitizing) contains an `<a href>` to any domain other than stateracontracting.com. `lib/babylovegrowth.ts`'s sanitizer strips these before they'd ever render, but a competitor or product vendor link in the raw source is itself the signal that this is a comparison-shaped article, whether or not the safe text still reads fine.

When a trip-wire fires: do not touch `lib/posts.ts`. Mark the state file entry `"held"` with the reason. Send a notification so Mauricio knows without checking manually. Leave it held until he says otherwise, don't re-notify every single day, once per newly-held article is enough. A held article still needs its state-file entry landed on `main` (see the PR step below), otherwise the next run won't see it as already handled.

Mechanical fixes, apply automatically, no hold needed:

3. Byline: any first-person "what I've learned" style section must be attributed to Patrick, never Mauricio. Fix if blank, unclear, or wrongly attributed.
4. Company name: "Statera Contracting" is always two words in body text and visible link text. One word only inside an actual href/domain.
5. Missing-word generation bug: sentences with a dropped subject or clause, often visible as a stray double-space or a sentence starting mid-thought. Fill the gap based on context, this is a known BabyLoveGrowth generation defect, not a reason to hold.
6. Spelling/typos introduced by the generator.
7. Drop the article's opening image if it duplicates `coverImage`, the page template already renders that above the content.

Note every mechanical fix actually applied in the commit message so there's a record, even though nobody has to approve it first.

Once clean, add the post to `lib/posts.ts`, run `npx tsc --noEmit` and `npm run build` to confirm it's valid, then commit and push to a `claude/`-prefixed branch (the routine can't push to `main` directly), and open a pull request against `main` with `gh pr create`, titled exactly `[BabyLoveGrowth Auto-Publish] <article title>` (or `[BabyLoveGrowth Auto-Publish] hold: <article title>` for a held article). A GitHub Action (`.github/workflows/babylovegrowth-automerge.yml`) auto-merges any PR with that exact title prefix from a `claude/` branch, no human review needed, that title tag is reserved for this routine, don't reuse it elsewhere. Mark the state file entry `"published"` (or leave the `"held"` entry from above as-is).
