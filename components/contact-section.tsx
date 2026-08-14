"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-data";

const SHEET_NAME = "Lead Tracker";
const LEAD_FIELD_HEADERS = {
  clientName: "Clients Name",
  companyName: "Company Name",
  email: "Email",
  viber: "Viber",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("sending");
    setErrorMessage("");
    const data = new FormData(form);
    const payload = {
      leadId: crypto.randomUUID(),
      sheetTab: SHEET_NAME,
      fields: {
        [LEAD_FIELD_HEADERS.clientName]: String(data.get("clientName") ?? ""),
        [LEAD_FIELD_HEADERS.companyName]: String(data.get("companyName") ?? ""),
        [LEAD_FIELD_HEADERS.email]: String(data.get("email") ?? ""),
        [LEAD_FIELD_HEADERS.viber]: String(data.get("viber") ?? ""),
      },
      fieldTypes: {
        [LEAD_FIELD_HEADERS.viber]: "phone",
      },
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to save your inquiry.");

      setStatus("sent");
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to save your inquiry.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-canvas-alt py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <p className="micro-label mb-6 text-accent-hover">Contact</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Let&rsquo;s talk packaging.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">
              Share your contact details and we&rsquo;ll come back with options — usually within one
              working day. For urgent orders, call us directly.
            </p>
            <div className="mt-8 border-t border-line pt-6">
              <p className="micro-label text-accent-hover">Special offer</p>
              <p className="mt-3 text-base font-medium leading-relaxed text-ink">
                Free Website Landing Page on Qualified Orders
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                Request a free quotation today. Landing-page eligibility and scope are confirmed
                after quotation.
              </p>
            </div>
            <div className="mt-10 space-y-5 text-sm">
              <p className="text-mute">
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                  Address
                </span>
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
              </p>
              <p className="text-mute">
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="text-mute">
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                  Phone
                </span>
                <a
                  href={CONTACT.phoneHref}
                  className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                >
                  {CONTACT.phoneLabel}
                </a>
              </p>
              <p className="text-mute">
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                  Social
                </span>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                >
                  Facebook
                </a>{" "}
                /{" "}
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                >
                  Instagram
                </a>{" "}
                /{" "}
                <a
                  href={CONTACT.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                >
                  TikTok
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field label="Client&rsquo;s name" name="clientName" placeholder="Juan Dela Cruz" required />
              <Field label="Company name (optional)" name="companyName" placeholder="Company name" />
              <Field label="Email address" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Viber" name="viber" type="tel" placeholder="0917 000 0000" required />
              {status === "sent" && (
                <p className="md:col-span-2 text-sm text-ink">
                  Message sent — thank you. We reply within one working day.
                </p>
              )}
              {status === "error" && (
                <p className="md:col-span-2 text-sm text-mute">
                  {errorMessage} Please try again or email us at{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="underline underline-offset-4 decoration-accent"
                  >
                    {CONTACT.email}
                  </a>
                  .
                </p>
              )}
              <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn-solid-light w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Get Free Quotation"}
                </button>
                <p className="text-sm text-mute">
                  For urgent orders, call{" "}
                  <a href={CONTACT.phoneHref} className="underline underline-offset-4 decoration-accent">
                    {CONTACT.phoneLabel}
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-mute"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="min-h-12 w-full border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-mute focus:border-accent focus:outline-none"
      />
    </div>
  );
}
