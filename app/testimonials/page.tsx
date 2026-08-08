import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { TESTIMONIALS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Huswell Trading clients say — five years of partnerships, from Facebook messaging to full PR kit programs.",
};

export default function Page() {
  return (
    <>
      <PageHero
        overline="Testimonials"
        title="Clients, on the record."
        body="Quotes from real orders — some small, some running for years. No stock photography, no invented reviews."
      />
      <section className="bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <div className="flex flex-col gap-20">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={t.by} className={i === 0 ? "" : "border-t border-line pt-16"}>
                <p className="text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                  “{t.text}”
                </p>
                <footer className="mt-6">
                  <p className="text-base font-medium text-ink">{t.by}</p>
                  <p className="mt-1 text-sm text-mute">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}