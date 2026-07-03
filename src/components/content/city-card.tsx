import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CityIndexEntry } from "@/types";

const BANNER_GRADIENTS = [
  "from-orange-500/25 via-amber-500/15 to-green-600/20",
  "from-blue-500/25 via-sky-500/15 to-cyan-500/20",
  "from-pink-500/25 via-rose-500/15 to-fuchsia-500/20",
  "from-teal-500/25 via-emerald-500/15 to-lime-500/20",
  "from-purple-500/25 via-violet-500/15 to-indigo-500/20",
  "from-red-500/25 via-orange-500/15 to-amber-500/20",
  "from-indigo-500/25 via-blue-500/15 to-sky-500/20",
  "from-emerald-500/25 via-teal-500/15 to-cyan-500/20",
];

const ICON_COLORS = [
  "text-orange-600/70 dark:text-orange-400/70",
  "text-blue-600/70 dark:text-blue-400/70",
  "text-pink-600/70 dark:text-pink-400/70",
  "text-teal-600/70 dark:text-teal-400/70",
  "text-purple-600/70 dark:text-purple-400/70",
  "text-red-600/70 dark:text-red-400/70",
  "text-indigo-600/70 dark:text-indigo-400/70",
  "text-emerald-600/70 dark:text-emerald-400/70",
];

export function CityCard({ city, index = 0 }: { city: CityIndexEntry; index?: number }) {
  const gradient = BANNER_GRADIENTS[index % BANNER_GRADIENTS.length];
  const iconColor = ICON_COLORS[index % ICON_COLORS.length];

  return (
    <Link href={`/cities/${city.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
        <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${gradient}`}>
          <MapPin className={`size-8 ${iconColor}`} />
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
