"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { History } from "lucide-react";
import { recentlyViewed } from "@/lib/storage";
import { getCategoryTree } from "@/lib/data";

/** Invisible tracker — mount once near the root layout to record page views. */
export function RecordRecentlyViewed() {
  const pathname = usePathname();

  useEffect(() => {
    recentlyViewed.record(pathname);
  }, [pathname]);

  return null;
}

export function RecentlyViewedList() {
  const pathname = usePathname();
  const [paths, setPaths] = useState<string[]>([]);
  const categories = getCategoryTree();

  useEffect(() => {
    setPaths(recentlyViewed.getAll().filter((p) => p !== pathname));
  }, [pathname]);

  if (paths.length === 0) return null;

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <History className="size-4" />
        Recently Viewed
      </h3>
      <ul className="flex flex-col gap-1">
        {paths.slice(0, 6).map((path) => {
          const slug = path.split("/").filter(Boolean).pop();
          const match = categories.find((c) => c.slug === slug);
          return (
            <li key={path}>
              <Link href={path} className="text-sm text-muted-foreground hover:text-foreground">
                {match?.title ?? path}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
