import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { Resend } from "resend";

// Claude Code routine "Statera BabyLoveGrowth Daily Publish" — its API trigger.
// Routine IDs aren't secret, only the bearer tokens used to call it are.
const ROUTINE_ID = "trig_01VaqgKqMH9g7mXdxKxVA59L";
const CLAUDE_FIRE_URL = `https://api.anthropic.com/v1/claude_code/routines/${ROUTINE_ID}/fire`;
const CLAUDE_BETA_HEADER = "experimental-cc-routine-2026-04-01";

const ALERT_EMAIL = "mauricio@mrwebsolutions.ca";
const FROM_EMAIL = "Statera Website <noreply@stateracontracting.com>";

// BabyLoveGrowth retries a failed webhook delivery several times within
// seconds. Without this, each retry for the same article sends its own
// alert email. Best-effort only: a cold serverless instance can still let
// a duplicate through, that's fine, a couple of alerts beats missing one.
const ALERT_DEDUPE_WINDOW_MS = 10 * 60 * 1000;
const recentAlerts = new Map<number, number>();

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

async function alertFailure(articleId: number, subject: string, detail: string) {
  const now = Date.now();
  const lastAlert = recentAlerts.get(articleId);
  if (lastAlert && now - lastAlert < ALERT_DEDUPE_WINDOW_MS) {
    console.error("babylovegrowth-webhook: suppressing duplicate alert within dedupe window:", subject, detail);
    return;
  }
  recentAlerts.set(articleId, now);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("babylovegrowth-webhook: cannot send failure alert, RESEND_API_KEY not set:", subject, detail);
    return;
  }
  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ALERT_EMAIL,
      subject: `[BabyLoveGrowth webhook] ${subject}`,
      text: detail,
    });
  } catch (err) {
    console.error("babylovegrowth-webhook: failed to send failure alert email:", err);
  }
}

// Receives BabyLoveGrowth's publish webhook and relays it to the Claude Code
// routine that does the actual review/sanitize/publish work. BabyLoveGrowth
// can't call the routine's /fire endpoint directly: it requires a beta header
// their webhook wizard has no way to set, and its body only accepts a
// freeform "text" string, not their article JSON shape.
export async function POST(req: NextRequest) {
  const webhookSecret = process.env.BABYLOVEGROWTH_WEBHOOK_SECRET;
  const routineToken = process.env.CLAUDE_ROUTINE_TOKEN;

  if (!webhookSecret || !routineToken) {
    console.error("babylovegrowth-webhook: missing BABYLOVEGROWTH_WEBHOOK_SECRET or CLAUDE_ROUTINE_TOKEN");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const authHeader = req.headers.get("authorization") || "";
  if (!safeCompare(authHeader, `Bearer ${webhookSecret}`)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: { id?: number; title?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const articleId = payload.id;
  const title = typeof payload.title === "string" ? payload.title.slice(0, 300) : "(untitled)";

  if (typeof articleId !== "number") {
    return NextResponse.json({ error: "Missing article id" }, { status: 400 });
  }

  const text =
    `BabyLoveGrowth webhook fired for a newly finalized article.\n` +
    `Article ID: ${articleId}\n` +
    `Title: ${title}\n\n` +
    `Process this specific article per the "Automated daily publish" policy in this repo's CLAUDE.md: fetch it, run the hard trip-wire checks, apply the mechanical fixes, and publish or hold accordingly.`;

  try {
    const fireResponse = await fetch(CLAUDE_FIRE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${routineToken}`,
        "anthropic-beta": CLAUDE_BETA_HEADER,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!fireResponse.ok) {
      const body = await fireResponse.text();
      console.error(`babylovegrowth-webhook: routine fire failed (${fireResponse.status}):`, body);
      await alertFailure(
        articleId,
        `Failed to trigger publish routine for article ${articleId}`,
        `Article "${title}" (ID ${articleId}) arrived via webhook but the routine fire call failed with status ${fireResponse.status}:\n\n${body}`
      );
      return NextResponse.json({ error: "Failed to trigger routine" }, { status: 502 });
    }
  } catch (err) {
    console.error("babylovegrowth-webhook: routine fire request threw:", err);
    await alertFailure(
      articleId,
      `Failed to trigger publish routine for article ${articleId}`,
      `Article "${title}" (ID ${articleId}) arrived via webhook but the request to fire the routine threw an error: ${String(err)}`
    );
    return NextResponse.json({ error: "Failed to trigger routine" }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
