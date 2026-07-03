"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { getCategoryTree, getCityIndex } from "@/lib/data";

export function Breadcrumbs() {
  const pathname = usePathname();
  const categories = getCategoryTree();
  const cities = getCityIndex().items;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = segments.map((slug, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const category = categories.find((c) => c.slug === slug);
    const city = cities.find((c) => c.slug === slug);
    return { href, label: category?.title ?? city?.name ?? decodeURIComponent(slug) };
  });

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground">
            <Home className="size-3.5" />
            Home
          </Link>
        </li>
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center gap-1">
            <ChevronRight className="size-3.5" />
            {idx === crumbs.length - 1 ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-foreground">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
