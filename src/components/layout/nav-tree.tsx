"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getIcon } from "@/lib/icon-map";
import { getTopLevelCategories, getChildCategories } from "@/lib/data";
import { getCategoryColor } from "@/lib/category-colors";
import { cn } from "@/lib/utils";

export function NavTree({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const topLevel = getTopLevelCategories();

  const activeSlug = topLevel.find(
    (c) => pathname === c.href || pathname.startsWith(`${c.href}/`),
  )?.slug;

  return (
    <Accordion multiple defaultValue={activeSlug ? [activeSlug] : []}>
      {topLevel.map((category, index) => {
        const children = getChildCategories(category.slug);
        const Icon = getIcon(category.icon);
        const color = getCategoryColor(category.slug, index);
        const isActive = activeSlug === category.slug;

        if (children.length === 0) {
          return (
            <Link
              key={category.id}
              href={category.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2 border-b py-3 text-sm font-medium",
                isActive && "text-primary",
              )}
            >
              <Icon className={cn("size-4", color.text)} />
              {category.title}
            </Link>
          );
        }

        return (
          <AccordionItem key={category.id} value={category.slug}>
            <AccordionTrigger className={cn("text-sm font-medium", isActive && "text-primary")}>
              <span className="flex items-center gap-2">
                <Icon className={cn("size-4", color.text)} />
                {category.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-1 pl-6">
                <Link
                  href={category.href}
                  onClick={onNavigate}
                  className={cn(
                    "py-1.5 text-sm font-medium",
                    pathname === category.href ? "text-primary" : "text-primary/80",
                  )}
                >
                  All {category.title}
                </Link>
                {children.map((child) => {
                  const ChildIcon = getIcon(child.icon);
                  const isChildActive = pathname === child.href;
                  return (
                    <Link
                      key={child.id}
                      href={child.href}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-2 py-1.5 text-sm text-muted-foreground",
                        isChildActive && "font-medium text-foreground",
                      )}
                    >
                      <ChildIcon className="size-3.5" />
                      {child.title}
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
