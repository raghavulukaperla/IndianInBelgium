import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { CityCard } from "@/components/content/city-card";
import { buildMetadata } from "@/lib/metadata";
import { getCityIndex } from "@/lib/data";

const data = getCityIndex();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/cities",
});

export default function CitiesPage() {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((city, index) => (
            <CityCard key={city.id} city={city} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
