import { CheckCircle2, ExternalLink, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PageHeader } from "./page-header";
import type { DataEnvelope, TopicItem } from "@/types";

export function TopicItemsList({ items }: { items: TopicItem[] }) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => (
        <Card key={item.id} id={item.id} className="scroll-mt-24">
          <CardContent>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>

            {item.meta && Object.keys(item.meta).length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {Object.entries(item.meta).map(([key, value]) => (
                  <Badge key={key} variant="secondary" className="font-normal">
                    {key}: {value}
                  </Badge>
                ))}
              </div>
            )}

            {item.steps && item.steps.length > 0 && (
              <ol className="mt-4 flex flex-col gap-2">
                {item.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            )}

            {item.tips && item.tips.length > 0 && (
              <ul className="mt-4 flex flex-col gap-1.5 rounded-lg bg-muted/50 p-3">
                {item.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                    <Lightbulb className="mt-0.5 size-3.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            )}

            {item.relatedLinks && item.relatedLinks.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="size-3" />
                  </Link>
                ))}
              </div>
            )}

            {!item.steps?.length && !item.tips?.length && (
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="size-3.5" />
                Verified reference information
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function TopicPageTemplate({ data }: { data: DataEnvelope<TopicItem> }) {
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <TopicItemsList items={data.items} />
      </div>
    </div>
  );
}
