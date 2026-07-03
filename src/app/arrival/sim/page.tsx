import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { buildMetadata } from "@/lib/metadata";
import { getAirportInfo } from "@/lib/data";

const data = getAirportInfo();
const kiosks = data.items[0]?.simCardKiosks ?? [];

export const metadata: Metadata = buildMetadata({
  title: "SIM Cards",
  description: "Getting connected on arrival in Belgium.",
  path: "/arrival/sim",
});

export default function SimPage() {
  return (
    <div>
      <PageHeader
        title="SIM Cards"
        description="Getting connected on arrival in Belgium."
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Card>
          <CardContent>
            <h3 className="mb-2 font-semibold">At Brussels Airport</h3>
            <ul className="flex flex-col gap-2">
              {kiosks.map((kiosk, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  &bull; {kiosk}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
