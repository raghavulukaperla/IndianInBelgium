import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TransportOperatorItem } from "@/types";

export function TransportOperatorCard({ item }: { item: TransportOperatorItem }) {
  return (
    <Card className="h-full">
      <CardContent>
        <h3 className="font-semibold">{item.operator}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{item.region}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.modes.map((mode) => (
            <Badge key={mode} variant="secondary">
              {mode}
            </Badge>
          ))}
        </div>
        {item.ticketingTypes.length > 0 && (
          <p className="mt-3 text-sm">
            <span className="font-medium">Tickets: </span>
            <span className="text-muted-foreground">{item.ticketingTypes.join(", ")}</span>
          </p>
        )}
        {item.tips.length > 0 && (
          <ul className="mt-2 flex flex-col gap-1">
            {item.tips.map((tip, idx) => (
              <li key={idx} className="text-xs text-muted-foreground">
                &bull; {tip}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
