import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FoodSpotItem } from "@/types";

export function FoodSpotCard({ item }: { item: FoodSpotItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{item.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {item.rating}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" />
          {item.city} &middot; {item.address}
        </p>
        {item.cuisine.length > 0 && (
          <p className="mt-2 text-sm text-muted-foreground">{item.cuisine.join(", ")}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="secondary">{item.priceRange}</Badge>
          {item.dietaryOptions.map((opt) => (
            <Badge key={opt} variant="secondary">
              {opt}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
