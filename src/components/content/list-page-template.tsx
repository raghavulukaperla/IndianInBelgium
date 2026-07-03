import type { ReactNode } from "react";
import { PageHeader } from "./page-header";

interface ListPageTemplateProps<T> {
  title: string;
  description: string;
  lastUpdated?: string;
  isSampleData?: boolean;
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyFor: (item: T) => string;
  columns?: "one" | "two";
  emptyMessage?: string;
}

export function ListPageTemplate<T>({
  title,
  description,
  lastUpdated,
  isSampleData,
  items,
  renderItem,
  keyFor,
  columns = "two",
  emptyMessage = "No entries yet — check back soon.",
}: ListPageTemplateProps<T>) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        lastUpdated={lastUpdated}
        isSampleData={isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {items.length === 0 ? (
          <p className="text-muted-foreground">{emptyMessage}</p>
        ) : (
          <div className={columns === "two" ? "grid gap-4 sm:grid-cols-2" : "flex flex-col gap-4"}>
            {items.map((item) => (
              <div key={keyFor(item)}>{renderItem(item)}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
