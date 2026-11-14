"use server";

import { sendEmail } from "@/lib/email";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  /** Echo of submitted values so the form keeps them after an error. */
  values?: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,19}$/;

const read = (formData: FormData, key: string) => String(formData.get(key) ?? "").trim();

export async function submitContact(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    service: read(formData, "service"),
    message: read(formData, "message"),
  };

  // Honeypot: real visitors never see or fill this field.
  if (read(formData, "company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const errors: ContactFormState["errors"] = {};
  if (values.name.length < 2 || values.name.length > 100) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 200)
    errors.email = "Please enter a valid email address.";
  if (values.phone && !PHONE_PATTERN.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (values.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  if (values.message.length > 3000) errors.message = "Please keep your message under 3000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const result = await sendEmail({
    subject: `New enquiry from ${values.name}${values.service ? ` — ${values.service}` : ""}`,
    replyTo: values.email,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "—"}`,
      `Service: ${values.service || "Not specified"}`,
      "",
      values.message,
    ].join("\n"),
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "Sorry, we couldn't send your message right now. Please email or WhatsApp us instead.",
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent. We'll get back to you soon." };
}
