import type { Metadata } from "next";
import { Mail, Phone, Globe, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/content/page-header";
import { JsonLd } from "@/components/content/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getEmbassyInfo } from "@/lib/data";

const data = getEmbassyInfo();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/embassy",
});

export default function EmbassyPage() {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {data.items.map((embassy) => (
          <div key={embassy.id} className="flex flex-col gap-6">
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "GovernmentOffice",
                name: embassy.name,
                address: embassy.address,
                telephone: embassy.phone[0],
                email: embassy.email,
                url: embassy.website,
              }}
            />
            <h2 className="text-xl font-semibold">{embassy.name}</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{embassy.address}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3">
                  <Phone className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{embassy.phone.join(" / ")}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{embassy.email}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-3">
                  <Globe className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Website</p>
                    <a
                      href={embassy.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {embassy.website}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent>
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <Clock className="size-4" />
                  Working Hours
                </h3>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {embassy.hours.map((h) => (
                    <li key={h.day} className="text-sm">
                      <span className="font-medium">{h.day}</span>
                      <br />
                      <span className="text-muted-foreground">
                        {h.open} - {h.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-3 font-semibold">Services</h3>
                <ul className="flex flex-col gap-2">
                  {embassy.services.map((service, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
