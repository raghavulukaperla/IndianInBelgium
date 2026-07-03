"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { SearchResultItem } from "./search-result-item";
import { useSearch } from "./search-provider";
import { withBasePath } from "@/lib/base-path";
import type { SearchIndexEntry } from "@/types";

let cachedFuse: Fuse<SearchIndexEntry> | null = null;

async function loadIndex(): Promise<Fuse<SearchIndexEntry>> {
  if (cachedFuse) return cachedFuse;
  const res = await fetch(withBasePath("/search-index.json"));
  const data = (await res.json()) as SearchIndexEntry[];
  cachedFuse = new Fuse(data, {
    keys: ["title", "snippet", "keywords"],
    threshold: 0.35,
  });
  return cachedFuse;
}

const CATEGORY_LABELS: Record<string, string> = {
  categories: "Sections",
  emergency: "Emergency",
  embassy: "Embassy",
  visa: "Visa",
  airport: "Airport",
  transport: "Transportation",
  faq: "FAQ",
  updates: "Latest Updates",
  community: "Indian Community",
  food: "Food",
  shopping: "Shopping",
  tourism: "Tourism",
  healthcare: "Healthcare",
  education: "Education",
  work: "Working in Belgium",
  safety: "Safety",
  documents: "Documents",
  insurance: "Insurance",
  currency: "Currency",
  packing: "Packing",
  immigration: "Immigration",
  cities: "Cities",
};

export function SearchDialog() {
  const { open, setOpen } = useSearch();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchIndexEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    loadIndex()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!query.trim() || !cachedFuse) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      const found = cachedFuse!.search(query).slice(0, 20).map((r) => r.item);
      setResults(found);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchIndexEntry[]> = {};
    for (const entry of results) {
      groups[entry.category] ??= [];
      groups[entry.category].push(entry);
    }
    return groups;
  }, [results]);

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Search Indians in Belgium"
      description="Search visas, transport, cities, FAQs and more"
    >
      <Command shouldFilter={false}>
        <CommandInput
          placeholder="Search visas, transport, cities, FAQs..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {loading && <CommandEmpty>Loading search index...</CommandEmpty>}
          {!loading && query.trim() && results.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {!loading && !query.trim() && (
            <CommandEmpty>Start typing to search the whole site.</CommandEmpty>
          )}
          {Object.entries(grouped).map(([category, entries]) => (
            <CommandGroup key={category} heading={CATEGORY_LABELS[category] ?? category}>
              {entries.map((entry) => (
                <SearchResultItem key={entry.id} entry={entry} onSelect={handleSelect} />
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
