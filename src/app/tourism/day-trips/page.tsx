import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TourismSiteCard } from "@/components/content/cards/tourism-site-card";
import { buildMetadata } from "@/lib/metadata";
import { getTourismSites } from "@/lib/data";

const data = getTourismSites();
const items = data.items.filter((i) => i.type === "day-trip");

export const metadata: Metadata = buildMetadata({
  title: "Day Trips",
  description: "Easy day trips from major Belgian cities.",
  path: "/tourism/day-trips",
});

export default function DayTripsPage() {
  return (
    <ListPageTemplate
      title="Day Trips"
      description="Easy day trips from major Belgian cities."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <TourismSiteCard item={i} />}
    />
  );
}
