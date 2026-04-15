"use server";

import { Resend } from "resend";

export type ContactState = {
  success: boolean;
  error?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name) return { success: false, error: "Name is required." };
  if (!email) return { success: false, error: "Email is required." };
  if (!EMAIL_REGEX.test(email))
    return { success: false, error: "Please enter a valid email address." };
  if (!message) return { success: false, error: "Message is required." };
  if (message.length > 2000)
    return { success: false, error: "Message must be under 2000 characters." };

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "Unbound Contact <hello@unboundapps.com>",
        to: "hello@unboundapps.com",
        subject: `Contact from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
      if (error) {
        console.error("Resend error:", error);
        return {
          success: false,
          error: "Something went wrong. Please try again.",
        };
      }
    } catch {
      return {
        success: false,
        error: "Something went wrong. Please try again.",
      };
    }
  } else {
    console.log("Contact form submission:", { name, email, message });
  }

  return { success: true };
}
