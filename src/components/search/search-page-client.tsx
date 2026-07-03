"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { SearchIndexEntry } from "@/types";

export function SearchPageClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [index, setIndex] = useState<SearchIndexEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(withBasePath("/search-index.json"))
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => setIndex(data))
      .finally(() => setLoading(false));
  }, []);

  const fuse = useMemo(
    () => new Fuse(index, { keys: ["title", "snippet", "keywords"], threshold: 0.35 }),
    [index],
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 40).map((r) => r.item);
  }, [fuse, query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Search</h1>
      <div className="relative mt-5">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          placeholder="Search the whole site..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {loading && <p className="text-sm text-muted-foreground">Loading search index...</p>}
        {!loading && query.trim() && results.length === 0 && (
          <p className="text-sm text-muted-foreground">No results found.</p>
        )}
        {results.map((entry) => (
          <Link key={entry.id} href={entry.url}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardContent>
                <p className="font-medium">{entry.title}</p>
                {entry.snippet && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {entry.snippet}
                  </p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
