import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import QuoteForm from "@/components/quote-form";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell us what you're packing — description, size, quantity, and target date — and we'll come back with a quote, usually the same day.",
};

export default function Page() {
  return (
    <>
      <PageHero
        overline="Get a Free Quote"
        title="Send us your specs."
        body={`Fill in the form and we'll come back with figures — usually within one working day. For urgent orders, call ${CONTACT.phone}.`}
      />
      <section className="bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
            <div className="lg:col-span-5">
              <div className="border border-line bg-surface p-10">
                <p className="micro-label mb-6 text-mute">Direct lines</p>
                <dl className="space-y-8 text-base">
                  <div>
                    <dt className="micro-label mb-2 text-mute">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-ink underline decoration-accent underline-offset-4 hover:text-accent-hover"
                      >
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="micro-label mb-2 text-mute">Phone</dt>
                    <dd>
                      <a
                        href={CONTACT.phoneHref}
                        className="text-ink underline decoration-accent underline-offset-4 hover:text-accent-hover"
                      >
                        {CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="micro-label mb-2 text-mute">Plant &amp; pick-up</dt>
                    <dd className="text-ink">
                      {CONTACT.address[0]}
                      <br />
                      {CONTACT.address[1]}
                    </dd>
                  </div>
                  <div>
                    <dt className="micro-label mb-2 text-mute">Follow</dt>
                    <dd className="flex gap-6">
                      <a
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                      >
                        Instagram
                      </a>
                      <a
                        href={CONTACT.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink underline underline-offset-4 decoration-accent hover:text-accent-hover"
                      >
                        TikTok
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}