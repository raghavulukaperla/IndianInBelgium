import type { Metadata } from "next";
import { CategoryHubTemplate } from "@/components/content/category-hub-template";
import { buildMetadata } from "@/lib/metadata";
import { getCategoryBySlug } from "@/lib/data";

const category = getCategoryBySlug("tourism")!;
export const metadata: Metadata = buildMetadata({
  title: category.title,
  description: category.description,
  path: category.href,
});

export default function TourismPage() {
  return <CategoryHubTemplate categorySlug="tourism" />;
}
