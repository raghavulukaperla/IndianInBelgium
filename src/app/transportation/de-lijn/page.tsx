import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.id === "de-lijn");

export const metadata: Metadata = buildMetadata({
  title: "De Lijn",
  description: "Flanders public transport network.",
  path: "/transportation/de-lijn",
});

export default function DeLijnPage() {
  return (
    <ListPageTemplate
      title="De Lijn"
      description="Flanders public transport network."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
