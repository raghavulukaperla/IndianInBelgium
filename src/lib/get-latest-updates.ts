import newsRaw from "@/data/news.json";
import alertsRaw from "@/data/alerts.json";
import type { DataEnvelope, UpdateFeedEntry } from "@/types";

export function getLatestUpdates(limit = 6): UpdateFeedEntry[] {
  const news = (newsRaw as DataEnvelope<UpdateFeedEntry>).items;
  const alerts = (alertsRaw as DataEnvelope<UpdateFeedEntry>).items;

  return [...news, ...alerts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
