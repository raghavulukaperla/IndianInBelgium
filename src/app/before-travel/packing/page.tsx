import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getPackingTopics } from "@/lib/data";

const data = getPackingTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/before-travel/packing",
});

export default function PackingPage() {
  return <TopicPageTemplate data={data} />;
}
