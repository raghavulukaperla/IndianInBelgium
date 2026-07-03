import { AlertTriangle, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { UpdateFeedEntry } from "@/types";

const SEVERITY_VARIANT: Record<string, "default" | "secondary" | "destructive"> = {
  info: "secondary",
  warning: "default",
  critical: "destructive",
};

export function UpdateFeedItem({ entry }: { entry: UpdateFeedEntry }) {
  const isAlert = entry.tag === "alert";

  return (
    <div className="flex gap-3 border-b py-3 last:border-0">
      <span className="mt-0.5 shrink-0 text-muted-foreground">
        {isAlert ? <AlertTriangle className="size-4" /> : <Newspaper className="size-4" />}
      </span>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">{entry.title}</span>
          {isAlert && (
            <Badge variant={SEVERITY_VARIANT[entry.severity]} className="text-xs">
              {entry.severity}
            </Badge>
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{entry.summary}</p>
        <time className="mt-1 block text-xs text-muted-foreground">{entry.date}</time>
      </div>
    </div>
  );
}
