import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import VideoStory from "@/components/video-story";
import { TEAM } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "From exporter of papier-maché handicrafts to a full printing-and-packaging trading partner — the Huswell Trading story and the team behind your boxes.",
};

export default function Page() {
  return (
    <>
      <PageHero
        overline="Our Team"
        title="From a workbench to a full packaging line."
        body="Huswell Trading, established in 2015 in the Philippines, began as a pioneering exporter of papier-maché handicrafts to Europe and has grown into a comprehensive trading partner for the Philippine printing and packaging industry. We craft, design, produce, and deliver innovative packaging solutions from concept to completion."
      />
      <section className="border-t border-line bg-canvas py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="micro-label mb-5 text-accent-hover">Inside the plant</p>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                Two minutes around the line.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
                Cutting, printing, lamination, and finishing — all under one roof in North
                Fairview. This is where your boxes happen.
              </p>
            </div>
            <VideoStory />
          </div>
          <div className="mt-20 flex items-center gap-6 border-t border-line pt-10">
            <Image
              src="/assets/img/team/banner.jpg"
              alt="Meet our team"
              width={1600}
              height={442}
              className="w-full border border-line object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-canvas-alt border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-mute">Our Team</p>
          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
            The people behind your orders.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <article key={m.name} className="group">
                <div className="border border-line bg-surface transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1">
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-base font-medium tracking-tight text-ink">{m.name}</h3>
                <p className="mt-1 text-sm text-mute">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}