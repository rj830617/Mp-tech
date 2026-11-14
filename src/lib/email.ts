import "server-only";

type EmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export type EmailResult = { ok: true } | { ok: false; reason: "not-configured" | "send-failed" };

/**
 * Sends an email to the site owner via the Resend API (https://resend.com).
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY      – API key from Resend
 *   CONTACT_FROM_EMAIL  – verified sender, e.g. "MP Tecc Website <website@mptecc.com>"
 *   CONTACT_TO_EMAIL    – inbox that receives enquiries, e.g. "info@mptecc.com"
 *
 * In development, if these are missing the email is printed to the server console instead.
 */
export async function sendEmail({ subject, text, replyTo }: EmailInput): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`\n[contact] Email not configured — printing instead.\nSubject: ${subject}\n\n${text}\n`);
      return { ok: true };
    }
    console.error("[contact] RESEND_API_KEY, CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL is not set.");
    return { ok: false, reason: "not-configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject, text, reply_to: replyTo }),
    });
    if (!response.ok) {
      console.error("[contact] Resend error", response.status, await response.text());
      return { ok: false, reason: "send-failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[contact] Failed to reach Resend", error);
    return { ok: false, reason: "send-failed" };
  }
}
