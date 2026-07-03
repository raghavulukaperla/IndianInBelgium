import Link from "next/link";
import { getCityIndex } from "@/lib/data";

const CITY_POSITIONS: Record<string, { x: number; y: number }> = {
  bruges: { x: 15, y: 25 },
  ghent: { x: 28, y: 32 },
  antwerp: { x: 48, y: 14 },
  mechelen: { x: 45, y: 27 },
  brussels: { x: 48, y: 42 },
  leuven: { x: 58, y: 38 },
  liege: { x: 80, y: 46 },
  namur: { x: 60, y: 66 },
};

export function BelgiumMap() {
  const cities = getCityIndex().items;

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="text-2xl font-semibold">Belgium at a Glance</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        A rough layout of our city guides — click a city to explore.
      </p>
      <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-orange-500/5 via-muted/40 to-green-600/10">
        {cities.map((city) => {
          const pos = CITY_POSITIONS[city.slug];
          if (!pos) return null;
          return (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span className="size-3 rounded-full border-2 border-background bg-primary shadow transition-transform group-hover:scale-125" />
              <span className="rounded bg-background/90 px-1.5 py-0.5 text-xs font-medium shadow-sm">
                {city.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
