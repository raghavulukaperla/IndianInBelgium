import type { Metadata } from "next";
import { PageHeader } from "@/components/content/page-header";
import { EmergencyContactCard } from "@/components/content/emergency-contact-card";
import { TopicItemsList } from "@/components/content/topic-page-template";
import { buildMetadata } from "@/lib/metadata";
import { getSafetyTopics, getEmergencyContacts } from "@/lib/data";

const safety = getSafetyTopics();
const emergency = getEmergencyContacts();

export const metadata: Metadata = buildMetadata({
  title: safety.title,
  description: safety.description,
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <div>
      <PageHeader
        title={safety.title}
        description={safety.description}
        lastUpdated={safety.lastUpdated}
        isSampleData={safety.isSampleData}
      />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h2 className="mb-4 text-lg font-semibold">Emergency Numbers</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {emergency.items.map((contact) => (
            <EmergencyContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        <h2 className="mt-10 mb-4 text-lg font-semibold">Safety Guidance</h2>
        <TopicItemsList items={safety.items} />
      </div>
    </div>
  );
}
