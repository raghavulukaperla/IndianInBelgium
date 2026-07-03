import { PageHeader } from "./page-header";
import { CategoryCard } from "./category-card";
import { getCategoryBySlug, getChildCategories } from "@/lib/data";
import { notFound } from "next/navigation";

export function CategoryHubTemplate({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const children = getChildCategories(categorySlug);

  return (
    <div>
      <PageHeader title={category.title} description={category.description} />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {children.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {children.map((child) => (
              <CategoryCard key={child.id} category={child} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">More content for this section is coming soon.</p>
        )}
      </div>
    </div>
  );
}
