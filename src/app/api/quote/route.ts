import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const maxDuration = 30;

const TO_EMAIL = "mbs0785@gmail.com";
const FROM_EMAIL = "Boone PDR Website <onboarding@resend.dev>";

type Photo = {
  name: string;
  size: number;
  type: string;
  data: string;
};

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  damage?: string;
  contactMethod?: string;
  photoCount?: number;
  photos?: Photo[];
};

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let body: QuotePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const damage = (body.damage || "").trim();

  if (!name || !phone || !damage) {
    return NextResponse.json(
      { error: "Name, phone, and damage description are required" },
      { status: 400 }
    );
  }

  const email = body.email || "Not provided";
  const vehicle = body.vehicle || "Not provided";
  const contactMethod = body.contactMethod || "call";
  const photos = Array.isArray(body.photos) ? body.photos.slice(0, 3) : [];

  const attachments = photos
    .filter((p) => p && p.data && typeof p.data === "string")
    .map((p) => {
      const base64 = p.data.includes(",") ? p.data.split(",")[1] : p.data;
      return {
        filename: p.name || "photo.jpg",
        content: base64,
      };
    });

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2842;">
      <div style="background: linear-gradient(135deg, #1a2842, #0f1a2e); padding: 24px; border-radius: 12px 12px 0 0; color: white;">
        <h1 style="margin: 0; font-size: 22px;">New Quote Request</h1>
        <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">boonepdr.com</p>
      </div>
      <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escape(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0; font-weight: 600;"><a href="tel:${escape(phone)}" style="color: #E84040; text-decoration: none;">${escape(phone)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;">${escape(email)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Vehicle</td><td style="padding: 8px 0;">${escape(vehicle)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Preferred Contact</td><td style="padding: 8px 0; text-transform: capitalize;">${escape(contactMethod)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Photos</td><td style="padding: 8px 0;">${photos.length} attached</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-left: 4px solid #E84040; border-radius: 4px;">
          <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Damage Description</div>
          <div style="color: #1a2842; line-height: 1.5; white-space: pre-wrap;">${escape(damage)}</div>
        </div>
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
          Received ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} (CT)
        </div>
      </div>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: body.email && body.email.includes("@") ? body.email : undefined,
      subject: `New Quote Request — ${name} (${phone})`,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote submission error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
