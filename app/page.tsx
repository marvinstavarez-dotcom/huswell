import Image from "next/image";
import Link from "next/link";
import FaqImage from "@/components/faq-image";
import ContactSection from "@/components/contact-section";
import ProjectCard from "@/components/project-card";
import TestimonialSlider from "@/components/testimonials";
import VideoStory from "@/components/video-story";
import { CONTACT, CTA_COPY, CTA_SUB, FAQS, PROJECTS, SERVICES } from "@/lib/site-data";

const PROCESS = [
  {
    n: "01",
    title: "Quote & requirements",
    body: "Tell us the product, size, quantity, material, and deadline. A sales manager comes back with figures — usually the same day.",
  },
  {
    n: "02",
    title: "Design & sampling",
    body: "Our graphic designers prepare the artwork, print a proof, and build a physical sample before anything goes into production.",
  },
  {
    n: "03",
    title: "Production & QC",
    body: "Cutting, printing, lamination, and finishing under one roof — checked piece-by-piece before the run ships.",
  },
  {
    n: "04",
    title: "Delivery & support",
    body: "Delivered nationwide by courier, or picked up from our Quezon City plant. We stay on the line after the boxes arrive.",
  },
];

export default function Page() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-line bg-canvas-dark">
<Image
          src="/assets/img/hero/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
          <p className="micro-label mb-6 text-white/70">
            Quezon City · Est. 2015 · Nationwide delivery
          </p>
          <h1 className="max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
            Elevate your brand through{" "}
            <span className="text-accent">packaging</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            From first sketch to final box — premium &amp; regular rigid boxes, offset and
            digital print, corrugated cartons, and 20 colors of shredded paper fillers.
            Designed, printed, and finished under one roof in Quezon City.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-solid-dark">
              Get a free quote
            </Link>
            <Link href="/projects" className="btn-line-dark">
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="bg-canvas">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {[
              ["2015", "Founded in Quezon City"],
              ["20", "Filler colors in stock"],
              ["5", "Product lines"],
              ["1,000+", "Boxes a year — and counting"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{v}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
            <div className="md:col-span-7">
              <p className="micro-label mb-6 text-accent-hover">About Huswell Trading</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Best boxes, best branding.
                <span className="text-accent">Crafting packaging that elevates every brand.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
                Huswell Trading, established in 2015 in the Philippines, began as a pioneering
                exporter of papier-maché handicrafts to Europe and has grown into a
                comprehensive trading partner for the Philippine printing and packaging
                industry. We craft, design, produce, and deliver innovative packaging
                solutions from concept to completion.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/story" className="btn-solid-light">
                  Our story
                </Link>
                <Link href="/projects" className="btn-line-light">
                  See the work
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="border border-line bg-surface">
                <Image
                  src="/assets/img/about/cover.webp"
                  alt="Huswell Trading — handicrafts exporter and packaging partner"
                  width={1137}
                  height={921}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="border-t border-line bg-canvas pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="micro-label mb-6 text-accent-hover">Our services</p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Everything you need in one house.
          </h2>
          <div className="mt-16 divide-y divide-line">
            {SERVICES.map((s, i) => (
              <article
                key={s.slug}
                className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-12 md:gap-12"
              >
                <div className="md:col-span-3">
                  <div className="border border-line bg-surface">
                    <Image
                      src={s.img}
                      alt={s.label}
                      width={1200}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-6">
                  <p className="micro-label mb-3 text-accent-hover">0{i + 1}</p>
                  <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                    {s.label}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">{s.short}</p>
                  {s.moq && (
                    <p className="mt-4 inline-block border border-line bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink">
                      {s.moq}
                    </p>
                  )}
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Link
                    href={`/${s.slug}`}
                    className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-hover transition-colors duration-300"
                  >
                    Explore line
                    <span className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Featured work</p>
              <h2 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Fresh off the line.
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-hover transition-colors duration-300"
            >
              View all work
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((p) => (
              <ProjectCard key={p.imgs[0]} project={p} autoRotate />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="border-t border-line bg-canvas pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="micro-label mb-6 text-accent-hover">How we work</p>
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Four steps, zero surprises.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px bg-line md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-canvas p-8">
                <p className="micro-label text-accent-hover">{p.n}</p>
                <h3 className="mt-6 text-lg font-medium text-ink md:text-xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STORY + VIDEO ---------- */}
      <section className="border-t border-line bg-canvas-alt pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
            <div className="md:col-span-5">
              <p className="micro-label mb-6 text-accent-hover">Our journey</p>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                From a single workbench to your door.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-mute">
                Exporters of papier-maché since 2015, today a full printing-and-packaging
                trading partner. The same hands run design, printing, cutting, and finishing
                under one roof.
              </p>
              <Link
                href="/story"
                className="group mt-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-hover transition-colors duration-300"
              >
                Read the full story
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <div className="md:col-span-7">
              <VideoStory />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Our clients</p>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                They came. They boxed. They stayed.
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent-hover transition-colors duration-300"
            >
              See more testimonials
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faqs" className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10 lg:gap-16">
            <div className="md:col-span-4">
              <p className="micro-label mb-6 text-accent-hover">FAQ</p>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                Quick answers.
              </h2>
              <p className="mt-6 text-sm text-mute">
                Still unanswered? Call{" "}
                <a
                  href={CONTACT.phoneHref}
                  className="underline underline-offset-4 decoration-accent"
                >
                  {CONTACT.phone}
                </a>{" "}
                or{" "}
                <Link href="/#contact" className="underline underline-offset-4 decoration-accent">
                  request a quote
                </Link>
                .
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
                {FAQS.map((q, i) => (
                  <details key={q} className="group border-b border-line py-1" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition-colors duration-300 hover:text-accent-hover">
                      <span className="text-base font-medium tracking-tight text-ink group-open:text-accent-hover">
                        {q}
                      </span>
                      <span className="relative h-3 w-3 shrink-0 text-ink transition-transform duration-300 group-open:rotate-45">
                        <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                        <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
                      </span>
                    </summary>
                    <div className="pb-8">
                      <FaqImage
                        src={`/assets/img/faq/faq-${String(i + 1).padStart(2, "0")}-master.jpg`}
                        question={q}
                      />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <ContactSection />

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden border-t border-line-dark bg-canvas-dark py-24 md:py-28">
        <Image
          src="/assets/img/hero/campaign-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-10 py-16 md:flex-row md:items-center md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-grease md:text-5xl">
                {CTA_COPY}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute-dark">{CTA_SUB}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="btn-solid-dark">
                Contact us
              </Link>
              <a href={CONTACT.phoneHref} className="btn-line-dark">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}