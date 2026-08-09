import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  "",
  "/projects",
  "/premium-packaging",
  "/regular-packaging",
  "/offset-digital-packaging",
  "/corrugated-box-packaging",
  "/shredded-paper-fillers",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
