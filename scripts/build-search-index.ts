import fs from "node:fs";
import path from "node:path";

interface SearchIndexEntry {
  id: string;
  title: string;
  snippet: string;
  url: string;
  category: string;
  keywords: string[];
}

const dataDir = path.join(process.cwd(), "src/data");
const outFile = path.join(process.cwd(), "public/search-index.json");

function readJson(file: string): Record<string, unknown> {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf-8"));
}

function pick(item: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return "";
}

function stringFields(item: Record<string, unknown>): string[] {
  return Object.values(item).filter((v): v is string => typeof v === "string");
}

const tourismTypeToSlug: Record<string, string> = {
  unesco: "unesco",
  museum: "museums",
  castle: "castles",
  park: "parks",
  chocolate: "chocolate",
  beer: "beer",
  "day-trip": "day-trips",
  "hidden-gem": "hidden-gems",
};

const titleKeys = ["title", "name", "question", "clubName", "label"];
const snippetKeys = ["description", "summary", "answer", "notes", "shortDescription"];

interface FileConfig {
  file: string;
  category: string;
  url: string | ((item: Record<string, unknown>) => string);
}

const envelopeFiles: FileConfig[] = [
  { file: "categories.json", category: "categories", url: (item) => String(item.href ?? "/") },
  { file: "emergency.json", category: "emergency", url: "/safety" },
  { file: "embassy.json", category: "embassy", url: "/embassy" },
  { file: "visa.json", category: "visa", url: "/before-travel/visa" },
  { file: "airport.json", category: "airport", url: "/arrival/airport" },
  { file: "transport.json", category: "transport", url: "/transportation" },
  { file: "faq.json", category: "faq", url: "/faq" },
  { file: "news.json", category: "updates", url: "/" },
  { file: "alerts.json", category: "updates", url: "/" },
  { file: "community.json", category: "community", url: "/community" },
  { file: "festivals.json", category: "community", url: "/community/festivals" },
  { file: "cricket.json", category: "community", url: "/community/cricket" },
  { file: "food.json", category: "food", url: "/food" },
  { file: "shopping.json", category: "shopping", url: "/shopping" },
  {
    file: "tourism.json",
    category: "tourism",
    url: (item) => `/tourism/${tourismTypeToSlug[String(item.type)] ?? "museums"}`,
  },
  { file: "healthcare.json", category: "healthcare", url: "/healthcare" },
  { file: "education.json", category: "education", url: "/education" },
  { file: "work.json", category: "work", url: "/work" },
  { file: "safety.json", category: "safety", url: "/safety" },
  { file: "documents.json", category: "documents", url: "/before-travel/documents" },
  { file: "insurance.json", category: "insurance", url: "/before-travel/insurance" },
  { file: "currency.json", category: "currency", url: "/before-travel/currency" },
  { file: "packing.json", category: "packing", url: "/before-travel/packing" },
  { file: "immigration.json", category: "immigration", url: "/arrival/immigration" },
];

const entries: SearchIndexEntry[] = [];

for (const { file, category, url } of envelopeFiles) {
  const data = readJson(file);
  const items = (data.items as Record<string, unknown>[] | undefined) ?? [];
  for (const item of items) {
    const title = pick(item, titleKeys) || String(data.title);
    const snippet = pick(item, snippetKeys);
    const resolvedUrl = typeof url === "function" ? url(item) : url;
    entries.push({
      id: `${category}-${String(item.id ?? title)}`,
      title,
      snippet,
      url: resolvedUrl,
      category,
      keywords: stringFields(item),
    });
  }
}

// Cities index
const cityIndex = readJson("cities.json");
for (const city of cityIndex.items as Record<string, unknown>[]) {
  entries.push({
    id: `cities-${city.slug}`,
    title: String(city.name),
    snippet: String(city.shortDescription ?? ""),
    url: `/cities/${city.slug}`,
    category: "cities",
    keywords: stringFields(city),
  });
}

// Per-city detail sections (attractions, food, hotels)
const citySlugs = ["brussels", "antwerp", "ghent", "bruges", "leuven", "liege", "namur", "mechelen"];
for (const slug of citySlugs) {
  const city = readJson(`city-${slug}.json`);
  const sections: { key: string; anchor: string }[] = [
    { key: "attractions", anchor: "attractions" },
    { key: "foodSpots", anchor: "food" },
    { key: "hotels", anchor: "hotels" },
  ];
  for (const { key, anchor } of sections) {
    const items = (city[key] as Record<string, unknown>[] | undefined) ?? [];
    for (const item of items) {
      entries.push({
        id: `city-${slug}-${key}-${item.id ?? item.name}`,
        title: String(item.name ?? city.name),
        snippet: String(item.description ?? item.notes ?? ""),
        url: `/cities/${slug}/#${anchor}`,
        category: "cities",
        keywords: [...stringFields(item), String(city.name)],
      });
    }
  }
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(entries));
console.log(`Search index written: ${entries.length} entries -> ${path.relative(process.cwd(), outFile)}`);
