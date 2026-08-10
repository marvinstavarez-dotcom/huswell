import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
import TestimonialSlider from "@/components/testimonials";
import VideoStory from "@/components/video-story";
import { CONTACT, FAQS } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Packaging Supplier in the Philippines | Huswell Trading",
  description:
    "Custom packaging, rigid boxes, PR kits, printed cartons, corrugated boxes, corporate gift packaging, and paper fillers for brands across the Philippines.",
  path: "/",
});

const SOLUTIONS = [
  {
    title: "Premium rigid boxes",
    body: "Create a high-end presentation with professionally crafted custom rigid boxes.",
    idealFor: ["Corporate gifts", "Luxury products", "Beauty and cosmetics", "Jewelry and accessories", "VIP kits", "Special edition products"],
    cta: "Request a rigid box quote",
    href: "/premium-packaging",
    image: "/assets/img/services/premium.jpg",
  },
  {
    title: "Custom PR boxes and influencer kits",
    body: "Make your product launch or campaign memorable with customized PR boxes and influencer kits.",
    idealFor: ["Product launches", "Influencer campaigns", "Media kits", "Brand activations", "Press kits", "Corporate events"],
    cta: "Build your PR kit",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/02-smart-parenting-8211-premium-canister-top-bottom/01.jpg",
  },
  {
    title: "Corrugated boxes",
    body: "Durable and practical custom corrugated packaging for businesses that require strength, protection, and flexibility.",
    idealFor: ["E-commerce shipping", "Product packaging", "Subscription boxes", "Corporate kits", "Food and beverage packaging", "Heavy or fragile products"],
    cta: "Explore corrugated boxes",
    href: "/corrugated-box-packaging",
    image: "/assets/img/services/corrugated.jpg",
  },
  {
    title: "Offset printed boxes and folding cartons",
    body: "Professional printed product packaging for brands that need consistent colors, detailed graphics, and scalable production.",
    idealFor: ["Cosmetics", "Food products", "Supplements", "Retail merchandise", "Pharmaceutical packaging", "Consumer goods"],
    cta: "Explore printed packaging",
    href: "/offset-digital-packaging",
    image: "/assets/img/services/offset.jpg",
  },
  {
    title: "Paper mache and handcrafted boxes",
    body: "Customizable paper mache boxes and specialty handcrafted packaging in shapes, sizes, colors, textures, and designs suited to your application.",
    idealFor: ["Gift packaging", "Corporate giveaways", "Keepsake boxes", "Home and lifestyle products", "Special events", "Creative projects"],
    cta: "Explore handcrafted boxes",
    href: "/projects",
    image: "/assets/img/about/cover.webp",
  },
  {
    title: "Corporate gift and giveaway packaging",
    body: "Transform ordinary corporate giveaways into professionally presented gifts with customized inserts, branding, and special finishing.",
    idealFor: ["Employee gifts", "Client appreciation gifts", "Company anniversaries", "Executive gifts", "Conference kits", "Event giveaways"],
    cta: "Plan corporate packaging",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/04-shangri-la-8211-premium-basket-style-pr-kit-with/01.jpg",
  },
  {
    title: "Custom inserts and packaging accessories",
    body: "Internal packaging components designed to hold and present your products properly.",
    idealFor: ["Paperboard inserts", "Foam inserts", "Product dividers", "Custom compartments", "Fabric interiors", "Printed cards"],
    cta: "Discuss packaging inserts",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/14-conrad-8211-drawer-box-with-textured-cover-and-d/01.jpg",
  },
  {
    title: "Shredded paper fillers",
    body: "Crinkled-cut paper fillers in 20 colors for stylish cushioning, gift-box decoration, product protection, and stronger unboxing presentation.",
    idealFor: ["Gift boxes", "Fragile products", "Retail presentation", "Corporate giveaways"],
    cta: "Explore paper fillers",
    href: "/shredded-paper-fillers",
    image: "/assets/img/services/fillers.jpg",
  },
];

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

const PROCESS = [
  ["01", "Tell us what you need", "Send your preferred packaging type, size, quantity, artwork, product details, and other specifications."],
  ["02", "We review your requirements", "Our team evaluates materials, structure, printing, finishing, and production requirements."],
  ["03", "Receive your quotation", "We prepare a quotation based on the approved project specifications and quantity."],
  ["04", "Approve the design or sample", "Depending on the project, artwork, mock-ups, or physical samples are reviewed before mass production."],
  ["05", "Production", "Once approved, your order moves into production based on the agreed specifications and schedule."],
  ["06", "Quality checking", "Finished packaging is checked against the approved requirements before release."],
  ["07", "Pickup or delivery", "Orders can be prepared for pickup or coordinated for delivery based on your project requirements."],
];

const STATS = [
  ["11", "Years of experience"],
  ["5,000+", "Projects completed"],
  ["10,000", "Boxes produced"],
  ["100%", "Customized solutions"],
] as const;

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-canvas-dark">
        <Image
          src="/assets/img/hero/hero.jpg"
          alt="Custom packaging manufactured by Huswell Trading"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
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
            <Link href="/#contact" className="btn-line-accent-dark w-full sm:w-auto">
              Free box consultation
            </Link>
            <Link href="#solutions" className="btn-line-dark w-full sm:w-auto">
              Our services
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

      <nav className="border-b border-line bg-canvas lg:hidden" aria-label="Homepage sections">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-5 sm:grid-cols-4 md:px-8">
          {[
            ["Solutions", "#solutions"],
            ["Process", "#process"],
            ["FAQs", "#faqs"],
            ["Quote", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="border-b border-r border-line px-3 py-4 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:bg-canvas-alt hover:text-accent-hover sm:border-b-0 sm:tracking-[0.14em]"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <section id="about" className="bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <p className="micro-label mb-6 text-accent-hover">About Huswell Trading</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              More than a box. We build packaging experiences.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Great packaging should do more than protect what is inside. It should communicate
                your brand, improve product presentation, and create an experience customers
                remember.
              </p>
              <p>
                We provide custom packaging and printing solutions for businesses in the
                Philippines, serving companies that need reliable, creative, and professionally
                produced packaging for products, corporate gifts, marketing campaigns, PR kits,
                events, and special projects.
              </p>
              <p>
                From small customized requirements to larger production runs, our Quezon City team
                works closely with clients to understand their specifications, budget, branding,
                and intended use.
              </p>
              <p>
                Our goal is simple: turn your packaging idea into a solution that looks
                professional, performs well, and represents your brand properly.
              </p>
            </div>
            <Link href="#process" className="btn-line-light mt-10 w-full sm:w-auto">
              Our packaging process
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="border border-line bg-surface">
              <Image
                src="/assets/img/about/cover.webp"
                alt="Huswell Trading creates custom packaging and printing solutions in Quezon City"
                width={1137}
                height={921}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-accent-hover">Our packaging services</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Custom packaging solutions for every brand.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Whether you are launching a product, preparing a PR campaign, creating corporate
            giveaways, or upgrading existing packaging, we tailor the structure, material,
            printing, and finish to your requirements.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <article key={solution.title} className="group flex h-full flex-col border-t border-line pt-5">
                <div className="border border-line bg-surface">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/3] w-full object-cover transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-90"
                  />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-ink">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{solution.body}</p>
                <ul className="mb-6 mt-4 grid grid-cols-1 gap-x-4 gap-y-2 border-t border-line pt-4 text-xs leading-relaxed text-mute sm:grid-cols-2">
                  {solution.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="mt-auto inline-flex w-full justify-center border border-accent-hover px-4 py-3 text-sm font-medium text-accent-hover transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-accent-hover hover:text-white active:translate-y-px sm:w-fit sm:justify-start"
                >
                  {solution.cta} <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-line bg-canvas py-20 md:py-28">
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

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <p className="micro-label mb-6 text-accent-hover">Our process</p>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                From packaging idea to production.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mute">
                Clear requirements, approved specifications, and practical production coordination
                from the first conversation through pickup or delivery.
              </p>
            </div>
            <div className="divide-y divide-line md:col-span-8">
              {PROCESS.map(([number, title, body]) => (
                <article key={number} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                  <p className="micro-label text-accent-hover sm:col-span-2">{number}</p>
                  <div className="sm:col-span-10">
                    <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-12 border-t border-line pt-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="micro-label mb-5 text-accent-hover">Inside the plant</p>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                Packaging built under one roof in Quezon City.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-mute">
                Our team coordinates design, printing, cutting, lamination, finishing, and quality
                checking so every project moves forward with a clear production plan.
              </p>
            </div>
            <div className="md:col-span-7">
              <VideoStory />
            </div>
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
