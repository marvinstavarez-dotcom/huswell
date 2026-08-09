"use client";

import { useState } from "react";
import { siMessenger, siViber, siWhatsapp } from "simple-icons";
import { CONTACT } from "@/lib/site-data";

export default function ChatButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-30 flex flex-col gap-3 lg:hidden">
        {open && <ChatLinks />}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close chat options" : "Open chat options"}
          aria-expanded={open}
          title="Chat options"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-xl text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {open ? "x" : "+"}
        </button>
      </div>

      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 hidden flex-col gap-3 lg:flex">
        <ChatLinks />
      </div>
    </>
  );
}

function ChatLinks() {
  return (
    <>
      <a
        href={CONTACT.messenger}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Huswell Trading on Messenger"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siMessenger.path} />
        </svg>
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Huswell Trading on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siWhatsapp.path} />
        </svg>
      </a>
      <a
        href={CONTACT.viber}
        aria-label="Chat with Huswell Trading on Viber"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siViber.path} />
        </svg>
      </a>
    </>
  );
}
