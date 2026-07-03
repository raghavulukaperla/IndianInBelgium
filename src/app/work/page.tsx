import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getWorkTopics } from "@/lib/data";

const data = getWorkTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/work",
});

export default function WorkPage() {
  return <TopicPageTemplate data={data} />;
}
