import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getImmigrationTopics } from "@/lib/data";

const data = getImmigrationTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/arrival/immigration",
});

export default function ImmigrationPage() {
  return <TopicPageTemplate data={data} />;
}
