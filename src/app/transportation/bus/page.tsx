import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { TransportOperatorCard } from "@/components/content/cards/transport-operator-card";
import { buildMetadata } from "@/lib/metadata";
import { getTransportOperators } from "@/lib/data";

const data = getTransportOperators();
const items = data.items.filter((i) => i.modes.some((m) => m.toLowerCase().includes("bus")));

export const metadata: Metadata = buildMetadata({
  title: "Bus",
  description: "City and regional bus services across Belgium.",
  path: "/transportation/bus",
});

export default function BusPage() {
  return (
    <ListPageTemplate
      title="Bus"
      description="City and regional bus services across Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      columns="one"
      renderItem={(i) => <TransportOperatorCard item={i} />}
    />
  );
}
