import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getEducationTopics } from "@/lib/data";

const data = getEducationTopics();
export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/education",
});

export default function EducationPage() {
  return <TopicPageTemplate data={data} />;
}
