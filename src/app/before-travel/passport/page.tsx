import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { TopicItemsList } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getDocumentsTopics } from "@/lib/data";

const documents = getDocumentsTopics();
const passportItems = documents.items.filter((item) => ["passport-doc", "oci"].includes(item.id));

export const metadata: Metadata = buildMetadata({
  title: "Passport",
  description: "Passport validity rules, renewal and OCI guidance for Indians in Belgium.",
  path: "/before-travel/passport",
});

export default function PassportPage() {
  return (
    <div>
      <PageHeader
        title="Passport"
        description="Passport validity rules, renewal and OCI guidance for Indians in Belgium."
        lastUpdated={documents.lastUpdated}
        isSampleData={documents.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <TopicItemsList items={passportItems} />
      </div>
    </div>
  );
}
