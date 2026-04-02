import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stateracontracting.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/kitchen-renovation-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/bathroom-renovation-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/basement-living-spaces-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/commercial-renovation-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
