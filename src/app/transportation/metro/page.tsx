import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.modes.some((m) => m.toLowerCase().includes("metro")));

export const metadata: Metadata = buildMetadata({
  title: "Metro",
  description: "Brussels metro lines and stations.",
  path: "/transportation/metro",
});

export default function MetroPage() {
  return (
    <ListPageTemplate
      title="Metro"
      description="Brussels metro lines and stations, operated by STIB/MIVB."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
