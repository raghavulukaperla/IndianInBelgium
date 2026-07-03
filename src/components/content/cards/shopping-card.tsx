import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ShoppingItem } from "@/types";

export function ShoppingCard({ item }: { item: ShoppingItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{item.name}</h3>
          <Badge variant="secondary">{item.category}</Badge>
        </div>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" />
          {item.city} &middot; {item.address}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}
