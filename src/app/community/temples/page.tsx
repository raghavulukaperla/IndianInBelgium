import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { CommunityOrgCard } from "@/components/content/cards/community-org-card";
import { buildMetadata } from "@/lib/metadata";
import { getCommunityOrgs } from "@/lib/data";

const data = getCommunityOrgs();
const items = data.items.filter((i) => i.type === "temple");

export const metadata: Metadata = buildMetadata({
  title: "Temples",
  description: "Hindu temples across Belgium.",
  path: "/community/temples",
});

export default function TemplesPage() {
  return (
    <ListPageTemplate
      title="Temples"
      description="Hindu temples across Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <CommunityOrgCard item={i} />}
    />
  );
}
