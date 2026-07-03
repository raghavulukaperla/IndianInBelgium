import Link from "next/link";
import { CityCard } from "@/components/content/city-card";
import { getCityIndex } from "@/lib/data";

const FEATURED_SLUGS = ["brussels", "antwerp", "ghent", "bruges"];

export function PopularDestinations() {
  const cities = getCityIndex().items.filter((c) => FEATURED_SLUGS.includes(c.slug));

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Popular Destinations</h2>
        <Link href="/cities" className="text-sm font-medium text-primary hover:underline">
          All cities
        </Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </section>
  );
}
