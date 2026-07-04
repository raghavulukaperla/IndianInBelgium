import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { FoodSpotCard } from "@/components/content/cards/food-spot-card";
import { buildMetadata } from "@/lib/metadata";
import { getFoodSpots } from "@/lib/data";

const data = getFoodSpots();
const items = data.items.filter((i) => i.type === "indian-restaurant");

export const metadata: Metadata = buildMetadata({
  title: "Restaurants",
  description: "Indian restaurants across Belgium.",
  path: "/food/restaurants",
});

export default function FoodRestaurantsPage() {
  return (
    <ListPageTemplate
      title="Restaurants"
      description="Indian restaurants across Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <FoodSpotCard item={i} />}
    />
  );
}
