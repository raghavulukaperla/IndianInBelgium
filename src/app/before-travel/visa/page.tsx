import type { Metadata } from "next";
import { CheckCircle2, FileText, Clock, Euro, CalendarCheck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/content/page-header";
import { buildMetadata } from "@/lib/metadata";
import { getVisaInfo } from "@/lib/data";

const data = getVisaInfo();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/before-travel/visa",
});

export default function VisaPage() {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {data.items.map((visa) => (
          <div key={visa.id} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{visa.visaType}</Badge>
              <h2 className="text-xl font-semibold">{visa.title}</h2>
            </div>
            <p className="text-muted-foreground">{visa.description}</p>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="flex items-start gap-3">
                  <Clock className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Processing Time</p>
                    <p className="text-sm text-muted-foreground">{visa.processingTime}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3">
                  <Euro className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">
                      Fee: {visa.fee.amount} {visa.fee.currency}
                    </p>
                    <p className="text-sm text-muted-foreground">{visa.fee.notes}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3">
                  <CalendarCheck className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Validity</p>
                    <p className="text-sm text-muted-foreground">{visa.validity}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent>
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <FileText className="size-4" />
                  Required Documents
                </h3>
                <ul className="flex flex-col gap-2">
                  {visa.documents.map((doc, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-3 font-semibold">Eligibility</h3>
                <ul className="flex flex-col gap-2">
                  {visa.eligibility.map((rule, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      &bull; {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-3 font-semibold">Application Steps</h3>
                <ol className="flex flex-col gap-3">
                  {visa.steps.map((step) => (
                    <li key={step.order} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {step.order}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <MapPin className="size-4" />
                  Application Centres
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {visa.applicationCenters.map((center) => (
                    <div key={center.city} className="rounded-lg bg-muted/50 p-3">
                      <p className="text-sm font-medium">{center.city}</p>
                      <p className="text-xs text-muted-foreground">{center.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
