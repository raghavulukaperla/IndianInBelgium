import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.modes.some((m) => m.toLowerCase().includes("tram")));

export const metadata: Metadata = buildMetadata({
  title: "Tram",
  description: "Tram networks across Belgian cities.",
  path: "/transportation/tram",
});

export default function TramPage() {
  return (
    <ListPageTemplate
      title="Tram"
      description="Tram networks across Belgian cities."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
