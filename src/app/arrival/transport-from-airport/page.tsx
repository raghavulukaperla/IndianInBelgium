import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { AirportTransportOptionCard } from "@/components/content/cards/airport-transport-option-card";
import { buildMetadata } from "@/lib/metadata";
import { getAirportInfo } from "@/lib/data";

const data = getAirportInfo();
const options = data.items[0]?.transportOptions ?? [];

export const metadata: Metadata = buildMetadata({
  title: "Airport to City",
  description: "Train, bus, taxi and hotel check-in options from Brussels Airport.",
  path: "/arrival/transport-from-airport",
});

export default function TransportFromAirportPage() {
  return (
    <div>
      <PageHeader
        title="Airport to City"
        description="Train, bus, taxi and hotel check-in options from Brussels Airport."
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <AirportTransportOptionCard key={opt.id} option={opt} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Once you arrive at your accommodation, hotel check-in in Belgium typically requires
          your passport (and visa, for non-EU visitors) for registration — this is a standard
          legal requirement, not a scam.
        </p>
      </div>
    </div>
  );
}
