import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.id === "tec");

export const metadata: Metadata = buildMetadata({
  title: "TEC",
  description: "Wallonia public transport network.",
  path: "/transportation/tec",
});

export default function TecPage() {
  return (
    <ListPageTemplate
      title="TEC"
      description="Wallonia public transport network."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
