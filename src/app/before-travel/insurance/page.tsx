import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getInsuranceTopics } from "@/lib/data";

const data = getInsuranceTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/before-travel/insurance",
});

export default function InsurancePage() {
  return <TopicPageTemplate data={data} />;
}
