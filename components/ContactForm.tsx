"use client";

import { useActionState, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/action";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    { success: false }
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement): boolean {
    const errs: Record<string, string> = {};
    const name = (new FormData(form).get("name") as string)?.trim();
    const email = (new FormData(form).get("email") as string)?.trim();
    const message = (new FormData(form).get("message") as string)?.trim();

    if (!name) errs.name = "Name is required.";
    if (!email) errs.email = "Email is required.";
    else if (!EMAIL_REGEX.test(email))
      errs.email = "Please enter a valid email address.";
    if (!message) errs.message = "Message is required.";
    else if (message.length > 2000)
      errs.message = "Message must be under 2000 characters.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  if (state.success) {
    return (
      <div className="text-center py-16">
        <h2 className="font-sans text-[1.5rem] font-bold text-ink mb-3">
          Thanks for reaching out.
        </h2>
        <p className="text-text-secondary leading-[1.6]">
          We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!validate(e.currentTarget)) {
          e.preventDefault();
        }
      }}
      className="space-y-6"
      noValidate
    >
      {state.error && (
        <p className="text-red-600 text-[0.85rem]">{state.error}</p>
      )}

      <div>
        <label
          htmlFor="name"
          className="block font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full font-sans text-[0.95rem] bg-cream border border-border rounded-lg px-4 py-3 text-ink placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-shadow"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-600 text-[0.8rem] mt-1.5">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full font-sans text-[0.95rem] bg-cream border border-border rounded-lg px-4 py-3 text-ink placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-shadow"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-600 text-[0.8rem] mt-1.5">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          className="w-full font-sans text-[0.95rem] bg-cream border border-border rounded-lg px-4 py-3 text-ink placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-shadow resize-y"
          placeholder="Tell us what you're working on..."
        />
        {errors.message && (
          <p className="text-red-600 text-[0.8rem] mt-1.5">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium px-6 py-3 rounded-pill bg-ink text-cream hover:bg-green hover:text-white hover:-translate-y-px transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
