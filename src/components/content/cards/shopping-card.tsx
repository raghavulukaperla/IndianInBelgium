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
        {item.popularBrands && item.popularBrands.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.popularBrands.map((brand) => (
              <Badge key={brand} variant="secondary">
                {brand}
              </Badge>
            ))}
          </div>
        )}
        {item.nearbyAttractions && item.nearbyAttractions.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Nearby: {item.nearbyAttractions.join(", ")}
          </p>
        )}
        {item.coordinates && (
          <a
            href={`https://www.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-medium text-primary hover:underline"
          >
            View on map
          </a>
        )}
      </CardContent>
    </Card>
  );
}
