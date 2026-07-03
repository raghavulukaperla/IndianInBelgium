import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "unesco");

export const metadata: Metadata = buildMetadata({
  title: "UNESCO Sites",
  description: "Belgium's UNESCO World Heritage Sites.",
  path: "/tourism/unesco",
});

export default function UnescoPage() {
  return (
    <ListPageTemplate
      title="UNESCO Sites"
      description="Belgium's UNESCO World Heritage Sites."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
