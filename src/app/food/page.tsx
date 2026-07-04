import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { FoodTabs } from "@/components/content/food-tabs";
import { buildMetadata } from "@/lib/metadata";
import { getFoodSpots } from "@/lib/data";

const data = getFoodSpots();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/food",
});

export default function FoodPage() {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <FoodTabs items={data.items} />
      </div>
    </div>
  );
}
