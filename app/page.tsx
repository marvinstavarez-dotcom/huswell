import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
import TestimonialSlider from "@/components/testimonials";
import { CONTACT, FAQS } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Packaging Supplier in the Philippines | Huswell Trading",
  description:
    "Custom packaging, rigid boxes, PR kits, printed cartons, corrugated boxes, corporate gift packaging, and paper fillers for brands across the Philippines.",
  path: "/",
});

const REASONS = [
  {
    title: "Customized to your brand",
    body: "We develop packaging around your size, structure, materials, colors, artwork, finishing, and presentation requirements.",
  },
  {
    title: "One partner for packaging and printing",
    body: "Coordinate your packaging and print requirements under one project instead of splitting them between multiple suppliers.",
  },
  {
    title: "Built for corporate requirements",
    body: "Clear quotations, approved specifications, production schedules, quality checks, and dependable communication for procurement and marketing teams.",
  },
  {
    title: "Flexible packaging solutions",
    body: "Choose premium presentation boxes, practical corrugated packaging, printed cartons, PR kits, handcrafted boxes, or a combination suited to the job.",
  },
  {
    title: "Attention to presentation",
    body: "Structure, material, color, printing, finishing, product placement, and the unboxing experience are considered as one system.",
  },
  {
    title: "Designed around your requirements",
    body: "Share your product dimensions, quantity, budget, branding, target market, delivery needs, and preferred presentation. We recommend the right approach.",
  },
];

const INDUSTRIES = [
  ["Beauty and cosmetics", "Premium packaging for skincare, cosmetics, fragrances, beauty kits, influencer campaigns, and product launches."],
  ["Food and beverage", "Custom printed packaging, gift boxes, promotional kits, beverage packaging, and presentation boxes."],
  ["Retail and e-commerce", "Branded packaging designed to improve product presentation and customer unboxing experiences."],
  ["Fashion and lifestyle", "Custom boxes for apparel, accessories, shoes, watches, jewelry, lifestyle products, and merchandise."],
  ["Corporate and professional services", "Packaging for client gifts, employee kits, executive giveaways, company anniversaries, and corporate events."],
  ["Advertising, PR, and marketing agencies", "Custom PR kits, influencer boxes, media kits, event packaging, brand activations, and campaign materials."],
  ["Technology and electronics", "Custom packaging and presentation boxes for gadgets, accessories, corporate technology gifts, and promotional products."],
  ["Real estate and property development", "Premium turnover kits, broker kits, welcome packages, property presentation kits, and client gifts."],
  ["Events and activations", "Customized event boxes, launch kits, conference packages, media kits, promotional materials, and branded giveaways."],
  ["Startups and growing brands", "Packaging solutions for businesses launching products, developing their branding, or upgrading from generic packaging."],
] as const;

const FEATURED_SOLUTIONS = [
  ["Rigid boxes", "Premium presentation packaging for luxury products, corporate gifts, and high-value merchandise.", "/premium-packaging", "/assets/img/services/premium.jpg"],
  ["PR boxes", "Customized campaign packaging designed for influencers, media, and product launches.", "/premium-packaging", "/assets/img/projects/premium/02-smart-parenting-8211-premium-canister-top-bottom/01.jpg"],
  ["Corrugated boxes", "Durable packaging for shipping, e-commerce, product protection, and branded kits.", "/corrugated-box-packaging", "/assets/img/services/corrugated.jpg"],
  ["Printed boxes", "Custom offset printed cartons for retail and consumer products.", "/offset-digital-packaging", "/assets/img/services/offset.jpg"],
  ["Corporate packaging", "Professionally designed boxes for client gifts, employee kits, events, and giveaways.", "/premium-packaging", "/assets/img/projects/premium/04-shangri-la-8211-premium-basket-style-pr-kit-with/01.jpg"],
  ["Handcrafted boxes", "Custom specialty packaging for unique presentation requirements.", "/projects", "/assets/img/about/cover.webp"],
] as const;

const STATS = [
  ["11", "Years of experience"],
  ["5,000+", "Projects completed"],
  ["500K+", "Boxes produced"],
  ["100%", "Customized solutions"],
] as const;

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-canvas-dark">
        <Image
          src="/hero/huswell-hero-wide.png"
          alt="Philippine-themed custom presentation boxes made by Huswell Trading"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-center md:px-8 md:pb-16 md:pt-24 2xl:pb-24 2xl:pt-32">
          <p className="micro-label mb-6 text-white/70">Designed &amp; Made in the Philippines</p>
          <h1 className="mx-auto max-w-4xl text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
            Custom Box Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:max-w-3xl">
            Huswell Trading primarily serves small and medium enterprises (SMEs) across the
            Philippines, while also catering to established local and international brands.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
              Free box consultation
            </Link>
            <Link href="#capabilities" className="btn-line-dark w-full sm:w-auto">
              Manufacturing capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-12 md:py-16" aria-label="Huswell Trading statistics">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 text-center md:grid-cols-4 md:px-8">
          {STATS.map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">{value}</p>
              <p className="micro-label mt-3 text-mute">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <p className="micro-label mb-6 text-accent-hover">Company overview</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Packaging made for growing Philippine brands.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Established in 2015, Huswell Trading creates custom box solutions for small and
                medium enterprises nationwide. Our Quezon City production team handles rigid boxes
                and PR kit boxes in-house.
              </p>
              <p>
                We also supply custom corrugated boxes and offset-printed folding cartons, giving
                brands one practical partner for premium presentation, shipping, storage, and
                retail packaging.
              </p>
            </div>
            <Link href="/company-profile" className="btn-line-light mt-10 w-full sm:w-auto">
              Company overview
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="border border-line bg-surface">
              <Image
                src="/images/watch.jpg"
                alt="Custom Philippine heritage presentation box for a watch"
                width={1448}
                height={1086}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:items-start md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <p className="micro-label mb-6 text-accent-hover">Manufacturing</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Products &amp; Manufacturing Capabilities
            </h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">In-House Manufacturing</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  Rigid Boxes and PR Kit Boxes for premium gifting, launches, and branded campaigns.
                </p>
              </article>
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">Custom Corrugated Boxes</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  Plain or custom-printed boxes for shipping, storage, and product packaging.
                </p>
                <p className="micro-label mt-4 text-accent-hover">MOQ: 1,000 pcs</p>
              </article>
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">Offset-Printed Folding Cartons</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  High-quality printed cartons for retail products and branded packaging.
                </p>
                <p className="micro-label mt-4 text-accent-hover">MOQ: 1,000 pcs</p>
              </article>
            </div>
          </div>
          <div className="border border-line bg-surface md:col-span-5">
            <Image
              src="/images/tumbler.jpg"
              alt="Custom Philippine heritage gift box with tumbler and accessories"
              width={1122}
              height={1402}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="why-huswell" className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Why choose Huswell Trading</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Your packaging partner from idea to finished product.
            </h2>
          </div>
          <div className="divide-y divide-line md:col-span-8">
            {REASONS.map((reason, index) => (
              <article key={reason.title} className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-6">
                <p className="micro-label text-accent-hover sm:col-span-2">0{index + 1}</p>
                <div className="sm:col-span-10">
                  <h3 className="text-xl font-medium tracking-tight text-ink">{reason.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">{reason.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-accent-hover">Industries we serve</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Custom packaging for businesses across different industries.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Huswell Trading works with businesses, organizations, agencies, and brands that need
            packaging built around the product, campaign, customer, and delivery requirement.
          </p>
          <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map(([industry, description]) => (
              <div key={industry} className="border-b border-line px-0 py-5 sm:px-5 lg:px-6">
                <p className="text-base font-medium leading-snug tracking-tight text-ink">{industry}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Featured packaging solutions</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Packaging built around your product.
              </h2>
            </div>
            <Link href="/projects" className="btn-line-light w-full sm:w-auto">
              View all projects
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SOLUTIONS.map(([title, body, href, image]) => (
              <Link key={title} href={href} className="group flex flex-col border-t border-line pt-5">
                <div className="border border-line bg-surface">
                  <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/3] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-ink">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{body}</p>
                <span className="mt-6 inline-flex w-full items-center justify-center border border-accent-hover px-4 py-3 text-sm font-medium text-accent-hover transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-accent-hover group-hover:text-white sm:w-fit sm:justify-start">
                  Explore this solution <span aria-hidden="true" className="ml-2 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <p className="micro-label mb-6 text-accent-hover">Custom packaging supplier in the Philippines</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Packaging that reflects your brand identity.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Huswell Trading provides customized packaging and printing solutions for brands,
                companies, agencies, and organizations that need professional packaging tailored to
                their products and campaigns.
              </p>
              <p>
                We work on projects involving custom boxes, premium rigid boxes, corrugated boxes,
                PR boxes, printed packaging, corporate gift boxes, folding cartons, handcrafted
                boxes, product packaging, and promotional packaging.
              </p>
              <p>
                Instead of settling for generic packaging, businesses can develop packaging that
                reflects their brand identity and improves how customers experience their products.
              </p>
              <p>
                Whether you are preparing a product launch, corporate event, marketing campaign,
                seasonal promotion, or ongoing packaging requirement, our team can help turn your
                specifications into a practical production plan.
              </p>
            </div>
          </div>
          <aside className="border-l-0 border-t border-line pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="micro-label text-mute">Talk to our packaging team</p>
            <p className="mt-6 text-xl font-medium leading-snug tracking-tight text-ink">
              Share the product, box style, dimensions, quantity, artwork or logo, reference
              photo, and target completion date.
            </p>
            <p className="mt-5 text-base leading-relaxed text-mute">
              If you do not have complete specifications yet, send the initial concept. We will
              help determine the right packaging solution.
            </p>
            <Link href="/#contact" className="btn-solid-light mt-8">
              Tell us about your project
            </Link>
          </aside>
        </div>
      </section>

      <section id="faqs" className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Frequently asked questions</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Frequently asked questions about custom packaging.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mute">
              Still need to discuss a requirement? Call {" "}
              <a href={CONTACT.phoneHref} className="text-ink underline decoration-accent underline-offset-4 hover:text-accent-hover">
                {CONTACT.phone}
              </a>{" "}
              or request a custom quote.
            </p>
          </div>
          <div className="divide-y divide-line md:col-span-8">
            {FAQS.map(([question, answer], index) => (
              <details key={question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-300 hover:text-accent-hover">
                  <span className="text-lg font-medium leading-snug tracking-tight text-ink group-open:text-accent-hover">
                    {question}
                  </span>
                  <span className="relative mt-1 h-3 w-3 shrink-0 text-ink transition-transform duration-300 group-open:rotate-45">
                    <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
                  </span>
                </summary>
                <p className="max-w-3xl pb-7 text-base leading-relaxed text-mute">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-12">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Client feedback</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Packaging partnerships built to last.
              </h2>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <ContactSection />

      <section className="relative overflow-hidden border-t border-line-dark bg-canvas-dark py-24 md:py-28">
        <Image
          src="/assets/img/hero/campaign-1.webp"
          alt="Custom branded packaging campaign by Huswell Trading"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="micro-label mb-6 text-white/70">Start your project</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-grease md:text-5xl">
              Ready to create packaging that represents your brand?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Your packaging is often the first physical interaction customers have with your
              product. Make it count. Whether you need custom boxes, PR kits, corporate gift packaging,
              corrugated boxes, rigid boxes, or printed packaging, Huswell Trading can help turn
              your requirements into a professionally crafted solution.
            </p>
            <div className="mt-8 max-w-2xl border-t border-line-dark pt-6">
              <p className="micro-label text-white/70">Tell us about your project</p>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Send your product or packaging requirement, preferred box style, dimensions,
                quantity, artwork or logo, reference photo, and target completion date.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
                Request a custom quote
              </Link>
              <Link href="/#contact" className="btn-line-dark w-full sm:w-auto">
                Send your packaging requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
