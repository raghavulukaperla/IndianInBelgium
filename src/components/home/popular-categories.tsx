import { CategoryCard } from "@/components/content/category-card";
import { getTopLevelCategories } from "@/lib/data";

export function PopularCategories() {
  const categories = getTopLevelCategories();

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="text-2xl font-semibold">Browse by category</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Everything you need, organized by what you&apos;re doing right now.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
