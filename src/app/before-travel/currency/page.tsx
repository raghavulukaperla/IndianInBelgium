import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getCurrencyTopics } from "@/lib/data";

const data = getCurrencyTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/before-travel/currency",
});

export default function CurrencyPage() {
  return <TopicPageTemplate data={data} />;
}
