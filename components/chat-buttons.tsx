import { siMessenger, siViber, siWhatsapp } from "simple-icons";
import { CONTACT } from "@/lib/site-data";

export default function ChatButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={CONTACT.messenger}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Huswell Trading on Messenger"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d={siWhatsapp.path} />
        </svg>
      </a>
      <a
        href={CONTACT.viber}
        aria-label="Chat with Huswell Trading on Viber"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d={siViber.path} />
        </svg>
      </a>
    </div>
  );
}