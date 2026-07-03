"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

export function MobileNavSheet() {
  const [open, setOpen] = useState(false);
  const topLevel = getTopLevelCategories();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        }
      />
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Indians in Belgium</SheetTitle>
        </SheetHeader>
        <Accordion multiple className="px-4 pb-6">
          {topLevel.map((category, index) => {
            const children = getChildCategories(category.slug);
            const Icon = getIcon(category.icon);
            const color = getCategoryColor(category.slug, index);

            if (children.length === 0) {
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 border-b py-3 text-sm font-medium"
                >
                  <Icon className={cn("size-4", color.text)} />
                  {category.title}
                </Link>
              );
            }

            return (
              <AccordionItem key={category.id} value={category.id}>
                <AccordionTrigger className="text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Icon className={cn("size-4", color.text)} />
                    {category.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 pl-6">
                    <Link
                      href={category.href}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-sm font-medium text-primary"
                    >
                      All {category.title}
                    </Link>
                    {children.map((child) => {
                      const ChildIcon = getIcon(child.icon);
                      return (
                        <Link
                          key={child.id}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground"
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
      </SheetContent>
    </Sheet>
  );
}
