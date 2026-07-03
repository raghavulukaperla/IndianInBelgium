import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { EmergencyContactItem } from "@/types";

export function EmergencyContactCard({ contact }: { contact: EmergencyContactItem }) {
  return (
    <Card>
      <CardContent className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
          <Phone className="size-5" />
        </span>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold tabular-nums">{contact.number}</span>
            <span className="text-sm font-medium">{contact.name}</span>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">{contact.description}</p>
          <p className="mt-1 text-xs text-muted-foreground">{contact.availableHours}</p>
        </div>
      </CardContent>
    </Card>
  );
}
