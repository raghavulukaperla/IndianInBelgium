import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.id === "stib");

export const metadata: Metadata = buildMetadata({
  title: "STIB / MIVB",
  description: "Brussels public transport network.",
  path: "/transportation/stib",
});

export default function StibPage() {
  return (
    <ListPageTemplate
      title="STIB / MIVB"
      description="Brussels public transport network."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
