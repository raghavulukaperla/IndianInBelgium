import type { Metadata } from "next";
import { ListPageTemplate } from "@/components/content/list-page-template";
import { EventCard } from "@/components/content/cards/event-card";
import { buildMetadata } from "@/lib/metadata";
import { getEvents } from "@/lib/data";

const data = getEvents();

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: "/events",
});

export default function EventsPage() {
  return (
    <ListPageTemplate
      title={data.title}
      description={data.description}
      lastUpdated={data.lastUpdated}
      isSampleData={data.isSampleData}
      items={data.items}
      keyFor={(i) => i.id}
      renderItem={(i) => <EventCard item={i} />}
      emptyMessage="No upcoming events yet — check back soon."
    />
  );
}
