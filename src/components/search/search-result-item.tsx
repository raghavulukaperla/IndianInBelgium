import { CommandItem } from "@/components/ui/command";
import type { SearchIndexEntry } from "@/types";

export function SearchResultItem({
  entry,
  onSelect,
}: {
  entry: SearchIndexEntry;
  onSelect: (url: string) => void;
}) {
  return (
    <CommandItem value={entry.id} onSelect={() => onSelect(entry.url)}>
      <div className="flex flex-col gap-0.5 py-0.5">
        <span className="font-medium">{entry.title}</span>
        {entry.snippet && (
          <span className="line-clamp-1 text-xs text-muted-foreground">{entry.snippet}</span>
        )}
      </div>
    </CommandItem>
  );
}
