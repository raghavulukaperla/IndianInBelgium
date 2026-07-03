"use client";

import { useEffect, useState } from "react";
import { ListChecks } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import checklistRaw from "@/data/checklist.json";
import { checklistProgress } from "@/lib/storage";
import type { DataEnvelope, ChecklistItemEntry } from "@/types";
import { cn } from "@/lib/utils";

const PHASE_LABELS: Record<string, string> = {
  "before-travel": "Before You Travel",
  arrival: "On Arrival",
  "first-week": "First Week",
};

export function TravelChecklistWidget() {
  const items = (checklistRaw as unknown as DataEnvelope<ChecklistItemEntry>).items;
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => setDone(checklistProgress.getAll()), []);

  const toggle = (id: string) => {
    checklistProgress.toggle(id);
    setDone(checklistProgress.getAll());
  };

  const phases = ["before-travel", "arrival", "first-week"] as const;

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <ListChecks className="size-6" />
        Travel Checklist
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Track your progress — saved locally on this device.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {phases.map((phase) => (
          <Card key={phase}>
            <CardContent>
              <h3 className="font-semibold">{PHASE_LABELS[phase]}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {items
                  .filter((i) => i.phase === phase)
                  .map((item) => {
                    const checked = done.includes(item.id);
                    return (
                      <li key={item.id}>
                        <label className="flex cursor-pointer items-start gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(item.id)}
                            className="mt-0.5 size-4 shrink-0 accent-primary"
                          />
                          <span className={cn(checked && "text-muted-foreground line-through")}>
                            {item.label}
                          </span>
                        </label>
                      </li>
                    );
                  })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
