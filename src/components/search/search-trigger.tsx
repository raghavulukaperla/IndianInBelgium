"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "./search-provider";

export function SearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <Button
      variant="outline"
      className="w-full justify-between text-muted-foreground sm:w-56"
      onClick={() => setOpen(true)}
    >
      <span className="flex items-center gap-2">
        <Search className="size-4" />
        Search...
      </span>
      <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 text-xs sm:inline">
        Ctrl K
      </kbd>
    </Button>
  );
}
