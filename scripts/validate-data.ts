import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const dataDir = path.join(process.cwd(), "src/data");

const baseEnvelopeSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  lastUpdated: z.string().min(1),
  category: z.string().min(1),
  isSampleData: z.boolean(),
  items: z.array(z.record(z.string(), z.unknown())),
});

const cityDetailSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  region: z.string().min(1),
  lastUpdated: z.string().min(1),
  isSampleData: z.boolean(),
  overview: z.object({
    description: z.string(),
    population: z.string(),
    foundedNote: z.string().optional(),
    whyVisit: z.array(z.string()),
  }),
  attractions: z.array(z.record(z.string(), z.unknown())),
  transportation: z.array(z.record(z.string(), z.unknown())),
  hotels: z.array(z.record(z.string(), z.unknown())),
  foodSpots: z.array(z.record(z.string(), z.unknown())),
  emergency: z.array(z.record(z.string(), z.unknown())),
  tips: z.array(z.string()),
});

const cityDetailFiles = new Set([
  "city-brussels.json",
  "city-antwerp.json",
  "city-ghent.json",
  "city-bruges.json",
  "city-leuven.json",
  "city-liege.json",
  "city-namur.json",
  "city-mechelen.json",
]);

let hasError = false;

const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const fullPath = path.join(dataDir, file);
  const raw = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
  const schema = cityDetailFiles.has(file) ? cityDetailSchema : baseEnvelopeSchema;
  const result = schema.safeParse(raw);

  if (!result.success) {
    hasError = true;
    console.error(`\n✗ ${file} failed validation:`);
    for (const issue of result.error.issues) {
      console.error(`  - ${issue.path.join(".") || "(root)"}: ${issue.message}`);
    }
  } else {
    console.log(`✓ ${file}`);
  }
}

if (hasError) {
  console.error(
    "\nData validation failed. Fix the JSON files above before building — the admin JSON-edit workflow relies on this check to catch broken shapes.",
  );
  process.exit(1);
} else {
  console.log(`\nAll ${files.length} data files are valid.`);
}
