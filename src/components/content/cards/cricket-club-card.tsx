import { Card, CardContent } from "@/components/ui/card";
import type { CricketClubItem } from "@/types";

export function CricketClubCard({ item }: { item: CricketClubItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <h3 className="font-semibold">{item.clubName}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {item.city} &middot; {item.league}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Ground: {item.groundName}</p>
        <p className="mt-1 text-xs text-muted-foreground">{item.contact}</p>
      </CardContent>
    </Card>
  );
}
