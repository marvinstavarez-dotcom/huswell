import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Premium Box Packaging",
  description:
    "Premium PR kit box packaging — chipboard construction, rugby adhesive assembly, and matte or glossy lamination for corporate giveaways, PR kits, and brand promotions.",
};

export default function Page() {
  const service = SERVICES[0];
  const projects = PROJECTS.filter((p) => p.categorySlug === "premium");
  return <ServicePage index={0} service={service} projects={projects} />;
}