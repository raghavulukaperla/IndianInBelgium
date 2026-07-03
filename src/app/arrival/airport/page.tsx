import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { AirportTransportOptionCard } from "@/components/content/cards/airport-transport-option-card";
import { buildMetadata } from "@/lib/metadata";
import { getAirportInfo } from "@/lib/data";

const data = getAirportInfo();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/arrival/airport",
});

export default function AirportPage() {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {data.items.map((airport) => (
          <div key={airport.id} className="flex flex-col gap-8">
            <div>
              <h2 className="mb-3 text-lg font-semibold">Getting into the city</h2>
              <div className="flex flex-col gap-3">
                {airport.transportOptions.map((opt) => (
                  <AirportTransportOptionCard key={opt.id} option={opt} />
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent>
                  <h3 className="mb-2 font-semibold">Immigration Tips</h3>
                  <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                    {airport.immigrationTips.map((tip, idx) => (
                      <li key={idx}>&bull; {tip}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="mb-2 font-semibold">Customs Rules</h3>
                  <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                    {airport.customsRules.map((rule, idx) => (
                      <li key={idx}>&bull; {rule}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="mb-2 font-semibold">SIM Card Kiosks</h3>
                  <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                    {airport.simCardKiosks.map((kiosk, idx) => (
                      <li key={idx}>&bull; {kiosk}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
