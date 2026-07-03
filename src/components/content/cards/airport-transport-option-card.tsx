import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AirportTransportOption } from "@/types";

export function AirportTransportOptionCard({ option }: { option: AirportTransportOption }) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-semibold">{option.line}</h3>
          <Badge variant="secondary">{option.mode}</Badge>
        </div>
        <div className="mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-3">
          <span>Duration: {option.duration}</span>
          <span>Price: {option.price}</span>
          <span>Frequency: {option.frequency}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{option.priceNote}</p>
        <p className="mt-2 text-sm">{option.howTo}</p>
      </CardContent>
    </Card>
  );
}
