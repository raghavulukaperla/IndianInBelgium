import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getHealthcareTopics } from "@/lib/data";

const data = getHealthcareTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/healthcare",
});

export default function HealthcarePage() {
  return <TopicPageTemplate data={data} />;
}
