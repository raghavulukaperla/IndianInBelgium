import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CommunityOrgItem } from "@/types";

export function CommunityOrgCard({ item }: { item: CommunityOrgItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" />
          {item.city} &middot; {item.address}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        {item.events.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Events: {item.events.join(", ")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
