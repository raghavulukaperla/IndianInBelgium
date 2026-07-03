import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "chocolate");

export const metadata: Metadata = buildMetadata({
  title: "Chocolate Shops",
  description: "Belgium's famous chocolatiers.",
  path: "/tourism/chocolate",
});

export default function ChocolatePage() {
  return (
    <ListPageTemplate
      title="Chocolate Shops"
      description="Belgium's famous chocolatiers."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
