export interface CategoryNavEntry {
  id: string;
  slug: string;
  title: string;
  icon: string;
  parentSlug: string | null;
  description: string;
  order: number;
  href: string;
}
