import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { buildMetadata } from "@/lib/metadata";
import { getAirportInfo } from "@/lib/data";

const data = getAirportInfo();
const rules = data.items[0]?.customsRules ?? [];

export const metadata: Metadata = buildMetadata({
  title: "Customs",
  description: "What you can and can't bring into Belgium.",
  path: "/arrival/customs",
});

export default function CustomsPage() {
  return (
    <div>
      <PageHeader
        title="Customs"
        description="What you can and can't bring into Belgium."
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Card>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {rules.map((rule, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  &bull; {rule}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
