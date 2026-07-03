import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/icon-map";
import { getCategoryColor } from "@/lib/category-colors";
import type { CategoryNavEntry } from "@/types";

export function CategoryCard({ category, index = 0 }: { category: CategoryNavEntry; index?: number }) {
  const Icon = getIcon(category.icon);
  const color = getCategoryColor(category.parentSlug ?? category.slug, index);

  return (
    <Link href={category.href}>
      <Card className="group h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent className="flex items-start gap-3">
          <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${color.bg} ${color.text}`}>
            <Icon className="size-5" />
          </span>
          <div className="flex-1">
            <h3 className="font-semibold">{category.title}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{category.description}</p>
          </div>
          <ChevronRight className="mt-2 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </CardContent>
      </Card>
    </Link>
  );
}
