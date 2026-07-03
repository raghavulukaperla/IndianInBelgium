import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Bicycle Rental",
  description: "Bike-share schemes and cycling in Belgium.",
  path: "/transportation/bicycle",
});

const TIPS = [
  "Villo! is Brussels' public bike-share scheme, with stations across the city.",
  "Antwerp (Velo), Ghent (Blue-bike) and other cities have their own bike-share networks.",
  "Belgium has extensive cycling infrastructure — dedicated bike lanes are common in most cities.",
  "Bike theft is common in student cities like Leuven and Ghent — always use a good lock.",
];

export default function BicyclePage() {
  return (
    <div>
      <PageHeader
        title="Bicycle Rental"
        description="Bike-share schemes and cycling in Belgium."
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
