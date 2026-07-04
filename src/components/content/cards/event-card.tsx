import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { withBasePath } from "@/lib/base-path";
import type { EventItem } from "@/types";

function formatEventDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function EventCard({ item }: { item: EventItem }) {
  return (
    <Card className="h-full">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={withBasePath(item.image)}
          alt={item.title}
          className="max-h-96 w-full object-contain bg-muted"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-muted">
          <CalendarDays className="size-10 text-muted-foreground/50" />
        </div>
      )}
      <CardContent>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{item.title}</h3>
          <Badge variant="secondary">{formatEventDate(item.date)}</Badge>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {item.time && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {item.time}
            </span>
          )}
          <span className="flex items-center gap-1">
            <MapPin className="size-3" />
            {item.location}, {item.city}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      {(item.organizer || item.registrationLink) && (
        <CardFooter className="flex items-center justify-between gap-2 text-xs">
          {item.organizer && <span className="text-muted-foreground">By {item.organizer}</span>}
          {item.registrationLink && (
            <a
              href={item.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Register
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
