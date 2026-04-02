import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getServiceBySlug("home-additions-calgary")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `https://stateracontracting.com/services/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `https://stateracontracting.com/services/${service.slug}`,
    images: [{ url: service.heroImage, width: 1200, height: 700, alt: service.title }],
  },
};

export default function HomeAdditionsPage() {
  return <ServicePageTemplate service={service} />;
}
