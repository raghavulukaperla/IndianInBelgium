import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TourismSiteItem } from "@/types";

export function TourismSiteCard({ item }: { item: TourismSiteItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{item.name}</h3>
          <Badge variant="secondary">{item.city}</Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        {item.ticketInfo && (
          <p className="mt-2 text-xs font-medium text-muted-foreground">{item.ticketInfo}</p>
        )}
      </CardContent>
    </Card>
  );
}
