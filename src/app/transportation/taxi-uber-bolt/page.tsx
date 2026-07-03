import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Taxi, Uber & Bolt",
  description: "Ride-hailing and taxi options in Belgium.",
  path: "/transportation/taxi-uber-bolt",
});

const TIPS = [
  "Uber and Bolt operate in Brussels, Antwerp and other major Belgian cities via their apps.",
  "Official taxis are metered — always confirm the driver is using the meter, especially from airports and stations.",
  "Avoid unmarked/unofficial taxis touting for business, particularly at Brussels Airport.",
  "Ride-hailing fares are generally comparable to or slightly higher than metered taxis during peak times.",
];

export default function TaxiUberBoltPage() {
  return (
    <div>
      <PageHeader
        title="Taxi, Uber & Bolt"
        description="Ride-hailing and taxi options in Belgium."
        isSampleData
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Card>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {TIPS.map((tip, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  &bull; {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
