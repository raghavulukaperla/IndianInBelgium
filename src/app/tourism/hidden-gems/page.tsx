import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "hidden-gem");

export const metadata: Metadata = buildMetadata({
  title: "Hidden Gems",
  description: "Lesser-known spots worth visiting in Belgium.",
  path: "/tourism/hidden-gems",
});

export default function HiddenGemsPage() {
  return (
    <ListPageTemplate
      title="Hidden Gems"
      description="Lesser-known spots worth visiting in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
