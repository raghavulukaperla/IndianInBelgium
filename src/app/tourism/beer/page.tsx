import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "beer");

export const metadata: Metadata = buildMetadata({
  title: "Beer Experience",
  description: "Trappist breweries and beer cafes in Belgium.",
  path: "/tourism/beer",
});

export default function BeerPage() {
  return (
    <ListPageTemplate
      title="Beer Experience"
      description="Trappist breweries and beer cafes in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
