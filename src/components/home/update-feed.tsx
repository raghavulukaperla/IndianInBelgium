import { Card, CardContent } from "@/components/ui/card";
import { UpdateFeedItem } from "./update-feed-item";
import { getLatestUpdates } from "@/lib/get-latest-updates";

export function UpdateFeed() {
  const updates = getLatestUpdates(6);

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="text-2xl font-semibold">Latest Updates</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Travel advisories, immigration updates and transport disruptions — newest first.
      </p>
      <Card className="mt-5">
        <CardContent>
          {updates.map((entry) => (
            <UpdateFeedItem key={entry.id} entry={entry} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
