import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FestivalItem } from "@/types";

export function FestivalCard({ item }: { item: FestivalItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{item.name}</h3>
          <Badge variant="secondary">{item.month}</Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Celebrated in: {item.typicalCelebrationCities.join(", ")}
        </p>
      </CardContent>
    </Card>
  );
}
