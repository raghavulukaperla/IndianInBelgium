"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FaqAccordion } from "./faq-accordion";
import type { FaqEntryItem } from "@/types";

export function FaqSearchable({ items }: { items: FaqEntryItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search frequently asked questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      {filtered.length > 0 ? (
        <FaqAccordion items={filtered} />
      ) : (
        <p className="text-sm text-muted-foreground">No questions match your search.</p>
      )}
    </div>
  );
}
