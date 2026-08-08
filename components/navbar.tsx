"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT, SERVICES } from "@/lib/site-data";

const PAGES = [
  { href: "/story", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="block" aria-label="Huswell Trading — home">
          <Image
            src="/assets/img/logo.webp"
            alt="Huswell Trading logo"
            width={140}
            height={32}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <NavDropdown
            label="Services"
            active={SERVICES.some((s) => pathname === `/${s.slug}`)}
            pathname={pathname}
            items={SERVICES.map((s) => ({ href: `/${s.slug}`, label: s.label }))}
          />
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                isActive(p.href) ? "text-accent-hover" : "text-ink hover:text-accent-hover"
              }`}
            >
              {p.label}
            </Link>
          ))}
          <Link href={CONTACT.quoteMailto} className="btn-solid-light !px-5 !py-2.5">
            Get a free quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-canvas px-6 pt-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <p className="micro-label mb-4 text-mute">Services</p>
        <div className="flex flex-col">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-base font-medium text-ink"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <p className="micro-label mb-4 mt-8 text-mute">Pages</p>
        <div className="flex flex-col gap-4">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setOpen(false)}
              className="border-b border-line pb-3 text-base font-medium text-ink"
            >
              {p.label}
            </Link>
          ))}
        </div>
        <Link href={CONTACT.quoteMailto} className="btn-solid-light mt-8 w-full">
          Get a free quote
        </Link>
        <p className="mt-10 pb-8 text-sm text-mute">
          {CONTACT.email}
          <br />
          {CONTACT.phone}
        </p>
      </div>
    </header>
  );
}

function NavDropdown({
  label,
  active,
  pathname,
  items,
}: {
  label: string;
  active: boolean;
  pathname: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
          active || open ? "text-accent-hover" : "text-ink hover:text-accent-hover"
        }`}
      >
        {label}
        <span
          className={`inline-block text-[9px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-4">
          <div className="w-72 border border-line bg-surface py-2 shadow-sm">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`block px-5 py-3 text-sm transition-colors duration-300 hover:bg-canvas ${
                  pathname === it.href ? "text-accent-hover" : "text-ink"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}