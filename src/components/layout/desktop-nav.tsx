"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getIcon } from "@/lib/icon-map";
import { getTopLevelCategories, getChildCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const topLevel = getTopLevelCategories();

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {topLevel.map((category) => {
        const children = getChildCategories(category.slug);
        const Icon = getIcon(category.icon);

        if (children.length === 0) {
          return (
            <Link
              key={category.id}
              href={category.href}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="size-4" />
              {category.title}
            </Link>
          );
        }

        return (
          <DropdownMenu key={category.id}>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="size-4" />
              {category.title}
              <ChevronDown className="size-3 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem
                render={
                  <Link href={category.href} className="font-medium">
                    All {category.title}
                  </Link>
                }
              />
              {children.map((child) => {
                const ChildIcon = getIcon(child.icon);
                return (
                  <DropdownMenuItem
                    key={child.id}
                    render={
                      <Link href={child.href} className="flex items-center gap-2">
                        <ChildIcon className="size-4 text-muted-foreground" />
                        {child.title}
                      </Link>
                    }
                  />
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );
}
