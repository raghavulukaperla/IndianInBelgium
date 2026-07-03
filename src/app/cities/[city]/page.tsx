import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/content/page-header";
import { CityDetailTabs } from "@/components/content/city-detail-tabs";
import { JsonLd } from "@/components/content/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getAllCitySlugs, getCityBySlug } from "@/lib/data";

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return buildMetadata({
    title: city.name,
    description: city.overview.description,
    path: `/cities/${slug}`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "City",
          name: city.name,
          description: city.overview.description,
          containedInPlace: { "@type": "Country", name: "Belgium" },
        }}
      />
      <PageHeader
        title={city.name}
        description={city.overview.description}
        lastUpdated={city.lastUpdated}
        isSampleData={city.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <CityDetailTabs city={city} />
      </div>
    </div>
  );
}
