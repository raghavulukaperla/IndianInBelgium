import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "castle");

export const metadata: Metadata = buildMetadata({
  title: "Castles",
  description: "Medieval castles and fortresses in Belgium.",
  path: "/tourism/castles",
});

export default function CastlesPage() {
  return (
    <ListPageTemplate
      title="Castles"
      description="Medieval castles and fortresses in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
