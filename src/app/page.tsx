import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { QuickActionCards } from "@/components/home/quick-action-cards";
import { UpdateFeed } from "@/components/home/update-feed";
import { EmergencyContactsWidget } from "@/components/home/emergency-contacts-widget";
import { PopularDestinations } from "@/components/home/popular-destinations";
import { BelgiumMap } from "@/components/home/belgium-map";
import { PopularCategories } from "@/components/home/popular-categories";
import { TravelChecklistWidget } from "@/components/home/travel-checklist-widget";
import { WeatherPlaceholder } from "@/components/home/weather-placeholder";
import { RecentlyViewedList } from "@/components/interaction/recently-viewed";
import { JsonLd } from "@/components/content/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
        }}
      />
      <Hero />
      <QuickActionCards />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <WeatherPlaceholder />
      </div>
      <UpdateFeed />
      <EmergencyContactsWidget />
      <PopularDestinations />
      <BelgiumMap />
      <PopularCategories />
      <TravelChecklistWidget />
      <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <RecentlyViewedList />
      </div>
    </div>
  );
}
