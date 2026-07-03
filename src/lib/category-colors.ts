export interface CategoryColor {
  bg: string;
  text: string;
  gradient: string;
}

const PALETTE: Record<string, CategoryColor> = {
  "before-travel": { bg: "bg-blue-500/15", text: "text-blue-600 dark:text-blue-400", gradient: "from-blue-500/20 to-blue-600/5" },
  arrival: { bg: "bg-sky-500/15", text: "text-sky-600 dark:text-sky-400", gradient: "from-sky-500/20 to-sky-600/5" },
  transportation: { bg: "bg-indigo-500/15", text: "text-indigo-600 dark:text-indigo-400", gradient: "from-indigo-500/20 to-indigo-600/5" },
  community: { bg: "bg-pink-500/15", text: "text-pink-600 dark:text-pink-400", gradient: "from-pink-500/20 to-pink-600/5" },
  food: { bg: "bg-amber-500/15", text: "text-amber-600 dark:text-amber-400", gradient: "from-amber-500/20 to-amber-600/5" },
  shopping: { bg: "bg-purple-500/15", text: "text-purple-600 dark:text-purple-400", gradient: "from-purple-500/20 to-purple-600/5" },
  cities: { bg: "bg-teal-500/15", text: "text-teal-600 dark:text-teal-400", gradient: "from-teal-500/20 to-teal-600/5" },
  tourism: { bg: "bg-fuchsia-500/15", text: "text-fuchsia-600 dark:text-fuchsia-400", gradient: "from-fuchsia-500/20 to-fuchsia-600/5" },
  healthcare: { bg: "bg-red-500/15", text: "text-red-600 dark:text-red-400", gradient: "from-red-500/20 to-red-600/5" },
  education: { bg: "bg-cyan-500/15", text: "text-cyan-600 dark:text-cyan-400", gradient: "from-cyan-500/20 to-cyan-600/5" },
  work: { bg: "bg-lime-500/15", text: "text-lime-700 dark:text-lime-400", gradient: "from-lime-500/20 to-lime-600/5" },
  safety: { bg: "bg-orange-500/15", text: "text-orange-600 dark:text-orange-400", gradient: "from-orange-500/20 to-orange-600/5" },
  embassy: { bg: "bg-violet-500/15", text: "text-violet-600 dark:text-violet-400", gradient: "from-violet-500/20 to-violet-600/5" },
  faq: { bg: "bg-yellow-500/15", text: "text-yellow-700 dark:text-yellow-400", gradient: "from-yellow-500/20 to-yellow-600/5" },
};

const FALLBACK_ORDER = Object.values(PALETTE);

export function getCategoryColor(slug: string, index = 0): CategoryColor {
  return PALETTE[slug] ?? FALLBACK_ORDER[index % FALLBACK_ORDER.length];
}
