import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { CommunityOrgCard } from "@/components/content/cards/community-org-card";
import { buildMetadata } from "@/lib/metadata";
import { getCommunityOrgs } from "@/lib/data";

const data = getCommunityOrgs();
const items = data.items.filter((i) => i.type === "association");

export const metadata: Metadata = buildMetadata({
  title: "Indian Associations",
  description: "Community groups and welfare associations for Indians in Belgium.",
  path: "/community/associations",
});

export default function AssociationsPage() {
  return (
    <ListPageTemplate
      title="Indian Associations"
      description="Community groups and welfare associations for Indians in Belgium."
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={items}
      keyFor={(i) => i.id}
      renderItem={(i) => <CommunityOrgCard item={i} />}
    />
  );
}
