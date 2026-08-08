import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Regular Box Packaging",
  description:
    "Regular rigid box packaging — durable chipboard with paste adhesive assembly, wrapped in premium plain specialty paper for gifts, souvenirs, and personal occasions.",
};

export default function Page() {
  const service = SERVICES[1];
  const projects = PROJECTS.filter((p) => p.categorySlug === "regular");
  return <ServicePage index={1} service={service} projects={projects} />;
}