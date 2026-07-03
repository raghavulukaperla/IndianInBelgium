import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { CommunityOrgCard } from "@/components/content/cards/community-org-card";
import { buildMetadata } from "@/lib/metadata";
import { getCommunityOrgs } from "@/lib/data";

const data = getCommunityOrgs();
const items = data.items.filter((i) => i.type === "church");

export const metadata: Metadata = buildMetadata({
  title: "Churches",
  description: "Indian Christian congregations in Belgium.",
  path: "/community/churches",
});

export default function ChurchesPage() {
  return (
    <ListPageTemplate
      title="Churches"
      description="Indian Christian congregations in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <CommunityOrgCard item={i} />}
    />
  );
}
