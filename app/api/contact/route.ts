import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CLIENT_EMAIL = "statera.contracting@gmail.com";
const FROM_EMAIL = "Statera Website <noreply@stateracontracting.com>";

export async function POST(req: NextRequest) {
  // Initialise lazily so missing env var doesn't crash the build
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please call us at 403-512-8755." },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectType, message } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Send notification email to Statera
    await resend.emails.send({
      from: FROM_EMAIL,
      to: CLIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${projectType} | ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f7f7; padding: 32px 24px;">

          <!-- Header -->
          <div style="background: #111111; border-radius: 12px 12px 0 0; padding: 28px 32px; margin-bottom: 0;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-family: Georgia, serif; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 2px; text-transform: uppercase;">STATERA</span>
            </div>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0;">New quote request from your website</p>
          </div>

          <!-- Body -->
          <div style="background: #ffffff; border-radius: 0 0 12px 12px; padding: 32px; border: 1px solid #e4e4e4; border-top: none;">

            <!-- Project Type Badge -->
            <div style="display: inline-block; background: rgba(194,217,81,0.15); border: 1px solid rgba(168,191,58,0.3); color: #a8bf3a; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 50px; margin-bottom: 24px;">
              ${projectType}
            </div>

            <!-- Contact Details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 130px;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 14px; color: #111; font-weight: 600;">${firstName} ${lastName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #a8bf3a; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="tel:${phone}" style="font-size: 14px; color: #a8bf3a; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 10px 0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999;">Project</span>
                </td>
                <td style="padding: 10px 0;">
                  <span style="font-size: 14px; color: #111; font-weight: 600;">${projectType}</span>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: #f7f7f7; border-radius: 8px; padding: 20px; margin-bottom: 28px;">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999; margin: 0 0 10px;">Project Details</p>
              <p style="font-size: 14px; color: #333; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <!-- Reply CTA -->
            <a href="mailto:${email}?subject=Re: Your Renovation Quote Request — ${projectType}"
               style="display: inline-block; background: #111111; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 50px;">
              Reply to ${firstName}
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
            This message was sent from the contact form at stateracontracting.com
          </p>
        </div>
      `,
    });

    // Send confirmation email to the person who submitted
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We received your request — Statera Contracting`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f7f7; padding: 32px 24px;">

          <div style="background: #111111; border-radius: 12px 12px 0 0; padding: 28px 32px;">
            <span style="font-family: Georgia, serif; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 2px; text-transform: uppercase;">STATERA</span>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0;">Calgary Renovation Contractor</p>
          </div>

          <div style="background: #ffffff; border-radius: 0 0 12px 12px; padding: 32px; border: 1px solid #e4e4e4; border-top: none;">
            <h2 style="font-family: Georgia, serif; font-size: 24px; color: #111; margin: 0 0 12px;">Thanks, ${firstName}!</h2>
            <p style="font-size: 14px; color: #555; line-height: 1.7; margin: 0 0 20px;">
              We've received your request for a <strong>${projectType}</strong> quote and will be in touch within <strong>24 hours</strong> to schedule your free consultation.
            </p>
            <p style="font-size: 14px; color: #555; line-height: 1.7; margin: 0 0 28px;">
              In the meantime, if you have any questions feel free to call us directly at <a href="tel:+14035128755" style="color: #a8bf3a; text-decoration: none; font-weight: 600;">403-512-8755</a>.
            </p>
            <div style="background: #f7f7f7; border-radius: 8px; padding: 20px; margin-bottom: 28px; border-left: 3px solid #c2d951;">
              <p style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999; margin: 0 0 8px;">Your request summary</p>
              <p style="font-size: 13px; color: #333; margin: 0; line-height: 1.6;">
                <strong>Project:</strong> ${projectType}<br/>
                <strong>Name:</strong> ${firstName} ${lastName}<br/>
                ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ""}
              </p>
            </div>
            <p style="font-size: 13px; color: #999; margin: 0;">— The Statera Contracting Team</p>
          </div>

          <p style="text-align: center; font-size: 12px; color: #bbb; margin-top: 20px;">
            Statera Contracting · Calgary, AB · <a href="https://stateracontracting.com" style="color: #bbb;">stateracontracting.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly at 403-512-8755." },
      { status: 500 }
    );
  }
}
