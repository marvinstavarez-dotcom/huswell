import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact-section";
import ProjectCard from "@/components/project-card";
import TestimonialSlider from "@/components/testimonials";
import VideoStory from "@/components/video-story";
import { CONTACT, PROJECTS } from "@/lib/site-data";
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
    body: "High-end custom rigid boxes for corporate gifts, luxury products, beauty, jewelry, VIP kits, and special releases. Add printing, foil stamping, embossing, magnetic closures, inserts, and custom compartments.",
    href: "/premium-packaging",
    image: "/assets/img/services/premium.jpg",
  },
  {
    title: "Custom PR boxes and influencer kits",
    body: "Campaign packaging for product launches, influencer seeding, media kits, brand activations, press kits, and corporate events. We can plan the outer box, inserts, printed materials, and product presentation together.",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/02-smart-parenting-8211-premium-canister-top-bottom/01.jpg",
  },
  {
    title: "Corrugated boxes",
    body: "Durable custom corrugated packaging for e-commerce shipping, subscription boxes, food and beverage products, corporate kits, and heavy or fragile items. Sizes, structures, printing, and finishes follow your requirements.",
    href: "/corrugated-box-packaging",
    image: "/assets/img/services/corrugated.jpg",
  },
  {
    title: "Offset printed boxes and folding cartons",
    body: "Consistent-color printed product packaging for cosmetics, food, supplements, retail merchandise, pharmaceuticals, consumer goods, and promotions. Choose from paperboards, coatings, laminations, and finishing options.",
    href: "/offset-digital-packaging",
    image: "/assets/img/services/offset.jpg",
  },
  {
    title: "Paper mache and handcrafted boxes",
    body: "Customizable handcrafted packaging in different shapes, sizes, colors, textures, and designs for gift packaging, keepsake boxes, home and lifestyle products, special events, and creative projects.",
    href: "/projects",
    image: "/assets/img/about/cover.webp",
  },
  {
    title: "Corporate gift and giveaway packaging",
    body: "Turn client gifts, employee kits, anniversaries, executive gifts, conferences, and event giveaways into professionally presented packages with branding, inserts, personalized details, and printed messages.",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/04-shangri-la-8211-premium-basket-style-pr-kit-with/01.jpg",
  },
  {
    title: "Custom inserts and packaging accessories",
    body: "Paperboard inserts, foam inserts, dividers, compartments, sleeves, labels, bands, fabric interiors, and printed cards that hold products securely and improve presentation.",
    href: "/premium-packaging",
    image: "/assets/img/projects/premium/14-conrad-8211-drawer-box-with-textured-cover-and-d/01.jpg",
  },
  {
    title: "Shredded paper fillers",
    body: "Crinkled-cut paper fillers in 20 colors for stylish cushioning, gift-box decoration, product protection, and stronger unboxing presentation.",
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
  "Beauty and cosmetics",
  "Food and beverage",
  "Retail and e-commerce",
  "Fashion and lifestyle",
  "Corporate and professional services",
  "Advertising, PR, and marketing agencies",
  "Technology and electronics",
  "Real estate and property development",
  "Events and activations",
  "Startups and growing brands",
];

const PROCESS = [
  ["01", "Tell us what you need", "Send your preferred packaging type, size, quantity, artwork, product details, and other specifications."],
  ["02", "We review your requirements", "Our team evaluates materials, structure, printing, finishing, and production requirements."],
  ["03", "Receive your quotation", "We prepare a quotation based on the approved project specifications and quantity."],
  ["04", "Approve the design or sample", "Depending on the project, artwork, mock-ups, or physical samples are reviewed before mass production."],
  ["05", "Production", "Once approved, your order moves into production based on the agreed specifications and schedule."],
  ["06", "Quality checking", "Finished packaging is checked against the approved requirements before release."],
  ["07", "Pickup or delivery", "Orders can be prepared for pickup or coordinated for delivery based on your project requirements."],
];

const FAQS = [
  [
    "What types of custom packaging does Huswell Trading offer?",
    "Huswell Trading offers rigid boxes, PR boxes, corrugated boxes, folding cartons, printed boxes, paper mache boxes, corporate gift packaging, promotional packaging, inserts, and specialty boxes.",
  ],
  [
    "Can you customize the size and design of the box?",
    "Yes. Packaging can be customized based on your required dimensions, structure, material, artwork, colors, printing, finishing, inserts, and other project specifications.",
  ],
  [
    "Do you accept corporate and bulk orders?",
    "Yes. We work with companies, agencies, organizations, brands, and corporate procurement teams for customized and volume packaging requirements.",
  ],
  [
    "Can you produce custom PR boxes?",
    "Yes. We can develop custom PR boxes and influencer kits for product launches, campaigns, media events, influencer seeding, brand activations, and corporate promotions.",
  ],
  [
    "Can you help us choose the right packaging?",
    "Yes. Send your product details, dimensions, quantity, budget range, and intended application. We can recommend suitable structures and materials.",
  ],
  [
    "What information do you need to prepare a quotation?",
    "A packaging type, dimensions, quantity, material preference, printing and finishing requirements, artwork or logo, product details, delivery date, and delivery location help us prepare an accurate quotation. An initial concept is also enough to start.",
  ],
  [
    "Do you offer custom inserts and compartments?",
    "Yes. Depending on the packaging structure, we can develop custom inserts, dividers, holders, and compartments to improve product protection and presentation.",
  ],
  [
    "Can you create packaging based on a reference photo?",
    "Yes. Send reference photos or packaging inspiration together with your dimensions, quantity, materials, and branding requirements. We can evaluate how the concept can be adapted for production.",
  ],
  [
    "What is the minimum order quantity?",
    "Minimum order quantities vary by packaging type, material, printing method, finishing, and production process. Share your required quantity so we can recommend the most appropriate option.",
  ],
  [
    "How long does custom packaging production take?",
    "Production lead times vary by packaging type, quantity, materials, printing, finishing, and project complexity. Your estimated schedule is confirmed during quotation and project approval.",
  ],
];

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-20 md:pt-28 2xl:pb-24 2xl:pt-36">
          <p className="micro-label mb-6 text-white/70">
            Custom packaging · Printing · PR kits · Corporate boxes
          </p>
          <h1 className="max-w-4xl text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
            Custom packaging that makes your brand stand out.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Premium custom boxes, PR kits, printed packaging, and corporate packaging solutions
            designed to protect your products, elevate your brand, and create a memorable customer
            experience. From concept and prototyping to production and delivery, Huswell Trading
            helps businesses turn packaging ideas into professionally crafted solutions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
              Get a custom quote
            </Link>
            <Link href="#solutions" className="btn-line-dark w-full sm:w-auto">
              Explore packaging solutions
            </Link>
          </div>
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

      <section className="bg-canvas py-20 md:py-28">
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
                Philippines, serving products, corporate gifts, marketing campaigns, PR kits,
                events, and special projects. Our Quezon City team works closely with clients on
                specifications, budget, branding, and intended use.
              </p>
              <p>
                The goal is simple: turn your packaging idea into a solution that looks
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
              <article key={solution.title} className="group flex flex-col border-t border-line pt-5">
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute line-clamp-4 sm:line-clamp-none">{solution.body}</p>
                <Link
                  href={solution.href}
                  className="mt-6 inline-flex w-fit border border-accent-hover px-4 py-3 text-sm font-medium text-accent-hover transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-accent-hover hover:text-white active:translate-y-px"
                >
                  Explore this solution <span aria-hidden="true" className="ml-2">→</span>
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
          <div className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-5">
            {INDUSTRIES.map((industry) => (
              <div key={industry} className="border-b border-line px-0 py-5 sm:px-5 lg:px-6">
                <p className="text-base font-medium leading-snug tracking-tight text-ink">{industry}</p>
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
            {PROJECTS.slice(0, 6).map((project) => (
              <ProjectCard key={project.imgs[0]} project={project} />
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
                From custom boxes and premium rigid boxes to corrugated packaging, PR kits,
                folding cartons, corporate gift boxes, handcrafted boxes, inserts, and promotional
                packaging, we develop solutions around the requirements of the project.
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
              Clear answers for custom packaging projects.
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
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Client feedback</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Packaging partnerships built to last.
              </h2>
            </div>
            <Link href="/testimonials" className="btn-line-light w-full sm:w-auto">
              Read testimonials
            </Link>
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
              product. Whether you need custom boxes, PR kits, corporate gift packaging,
              corrugated boxes, rigid boxes, or printed packaging, Huswell Trading can help turn
              your requirements into a professionally crafted solution.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
                Request a custom quote
              </Link>
              <a href={CONTACT.phoneHref} className="btn-line-dark w-full sm:w-auto">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
