import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { FaqSearchable } from "@/components/content/faq-searchable";
import { JsonLd } from "@/components/content/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getFaqs } from "@/lib/data";

const data = getFaqs();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <PageHeader
        title={data.title}
        description={data.description}
        lastUpdated={data.lastUpdated}
        isSampleData={data.isSampleData}
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <FaqSearchable items={data.items} />
      </div>
    </div>
  );
}
