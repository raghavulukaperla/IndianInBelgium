import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { FoodSpotCard } from "@/components/content/cards/food-spot-card";
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
    <ListPageTemplate
      title={data.title}
      description={data.description}
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={data.items}
      keyFor={(i) => i.id}
      renderItem={(i) => <FoodSpotCard item={i} />}
    />
  );
}
