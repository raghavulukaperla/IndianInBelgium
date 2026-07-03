import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "museum");

export const metadata: Metadata = buildMetadata({
  title: "Museums",
  description: "Art, history and science museums in Belgium.",
  path: "/tourism/museums",
});

export default function MuseumsPage() {
  return (
    <ListPageTemplate
      title="Museums"
      description="Art, history and science museums in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
