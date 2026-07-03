import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CityIndexEntry } from "@/types";

export function CityCard({ city }: { city: CityIndexEntry }) {
  return (
    <Link href={`/cities/${city.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex h-28 items-center justify-center bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-green-600/20">
          <MapPin className="size-8 text-foreground/40" />
        </div>
        <CardContent>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold">{city.name}</h3>
            {city.isCapital && <Badge>Capital</Badge>}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {city.region} &middot; {city.population}
          </p>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {city.shortDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
