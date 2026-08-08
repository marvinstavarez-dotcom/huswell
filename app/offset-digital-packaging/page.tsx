import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Offset & Digital Box Packaging",
  description:
    "Offset and digital printing on Foldcote, Claycote, and Carrier Board materials — vibrant, elegant packaging for cosmetics and budget-friendly branding. MOQ 1,000 pieces.",
};

export default function Page() {
  const service = SERVICES[2];
  const projects = PROJECTS.filter((p) => p.categorySlug === "offset");
  return <ServicePage index={2} service={service} projects={projects} />;
}