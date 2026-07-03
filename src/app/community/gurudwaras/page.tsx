import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { CommunityOrgCard } from "@/components/content/cards/community-org-card";
import { buildMetadata } from "@/lib/metadata";
import { getCommunityOrgs } from "@/lib/data";

const data = getCommunityOrgs();
const items = data.items.filter((i) => i.type === "gurudwara");

export const metadata: Metadata = buildMetadata({
  title: "Gurudwaras",
  description: "Sikh gurudwaras across Belgium.",
  path: "/community/gurudwaras",
});

export default function GurudwarasPage() {
  return (
    <ListPageTemplate
      title="Gurudwaras"
      description="Sikh gurudwaras across Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <CommunityOrgCard item={i} />}
    />
  );
}
