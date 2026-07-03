import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.id === "sncb");

export const metadata: Metadata = buildMetadata({
  title: "SNCB Trains",
  description: "Belgium's national railway operator.",
  path: "/transportation/sncb",
});

export default function SncbPage() {
  return (
    <ListPageTemplate
      title="SNCB Trains"
      description="Belgium's national railway operator."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
