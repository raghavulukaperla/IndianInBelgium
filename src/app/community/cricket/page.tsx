import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { CricketClubCard } from "@/components/content/cards/cricket-club-card";
import { buildMetadata } from "@/lib/metadata";
import { getCricketClubs } from "@/lib/data";

const data = getCricketClubs();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/community/cricket",
});

export default function CricketPage() {
  return (
    <ListPageTemplate
      title={data.title}
      description={data.description}
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={data.items}
      keyFor={(i) => i.id}
      renderItem={(i) => <CricketClubCard item={i} />}
    />
  );
}
