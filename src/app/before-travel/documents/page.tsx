import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getDocumentsTopics } from "@/lib/data";

const data = getDocumentsTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/before-travel/documents",
});

export default function DocumentsPage() {
  return <TopicPageTemplate data={data} />;
}
