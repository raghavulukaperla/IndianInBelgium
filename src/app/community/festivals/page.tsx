import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { FestivalCard } from "@/components/content/cards/festival-card";
import { buildMetadata } from "@/lib/metadata";
import { getFestivals } from "@/lib/data";

const data = getFestivals();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/community/festivals",
});

export default function FestivalsPage() {
  return (
    <ListPageTemplate
      title={data.title}
      description={data.description}
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={data.items}
      keyFor={(i) => i.id}
      renderItem={(i) => <FestivalCard item={i} />}
    />
  );
}
