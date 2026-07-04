import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { FoodSpotCard } from "@/components/content/cards/food-spot-card";
import { buildMetadata } from "@/lib/metadata";
import { getFoodSpots } from "@/lib/data";

const data = getFoodSpots();
const items = data.items.filter((i) => i.type !== "indian-restaurant");

export const metadata: Metadata = buildMetadata({
  title: "Grocery Stores",
  description: "Indian grocery and spice stores across Belgium.",
  path: "/food/grocery-stores",
});

export default function FoodGroceryStoresPage() {
  return (
    <ListPageTemplate
      title="Grocery Stores"
      description="Indian grocery and spice stores across Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <FoodSpotCard item={i} />}
    />
  );
}
