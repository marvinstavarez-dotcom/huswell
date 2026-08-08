import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Corrugated Box Packaging",
  description:
    "Corrugated box packaging with various flute types for balikbayan boxes and heavy-duty deliveries. Full-print linings, mailers, and clamshells. MOQ 1,000 pieces.",
};

export default function Page() {
  const service = SERVICES[3];
  const projects = PROJECTS.filter((p) => p.categorySlug === "corrugated");
  return <ServicePage index={3} service={service} projects={projects} />;
}