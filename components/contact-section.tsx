"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-data";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
const configured = FORMSPREE_ID.length > 0;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!configured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const data = new FormData(form);
    data.set("_subject", "Huswell Trading website — contact message");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("formspree rejected the submission");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-canvas-alt py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="micro-label mb-6 text-accent-hover">Contact</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Let&rsquo;s talk packaging.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-mute">
              Tell us about your project and we&rsquo;ll come back with options — usually within
              one working day. For urgent orders, call us directly.
            </p>
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
                  {CONTACT.phone}
                </a>
              </p>
              <p className="text-mute">
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                  Social
                </span>
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

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Juan Dela Cruz" required />
              <Field label="Email address" name="email" type="email" placeholder="you@company.com" required />
              <div className="md:col-span-2">
                <Field label="Phone number (optional)" name="phone" type="tel" placeholder="0917 000 0000" />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-mute"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your packaging project — box type, quantity, finish, target date…"
                  className="w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-mute focus:border-accent focus:outline-none"
                />
              </div>
              {status === "sent" && (
                <p className="md:col-span-2 text-sm text-ink">
                  Message sent — thank you. We reply within one working day.
                </p>
              )}
              {status === "error" && (
                <p className="md:col-span-2 text-sm text-mute">
                  {configured
                    ? "Something went wrong — please try again or email us at"
                    : "The contact form is still being set up — for now please email us at"}{" "}
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
                <button type="submit" className="btn-solid-light" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <p className="text-sm text-mute">
                  For urgent orders, call{" "}
                  <a href={CONTACT.phoneHref} className="underline underline-offset-4 decoration-accent">
                    {CONTACT.phone}
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
        className="w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-mute focus:border-accent focus:outline-none"
      />
    </div>
  );
}