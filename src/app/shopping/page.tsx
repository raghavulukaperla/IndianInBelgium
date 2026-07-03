import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { ShoppingCard } from "@/components/content/cards/shopping-card";
import { buildMetadata } from "@/lib/metadata";
import { getShopping } from "@/lib/data";

const data = getShopping();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/shopping",
});

export default function ShoppingPage() {
  return (
    <ListPageTemplate
      title={data.title}
      description={data.description}
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={data.items}
      keyFor={(i) => i.id}
      renderItem={(i) => <ShoppingCard item={i} />}
    />
  );
}
