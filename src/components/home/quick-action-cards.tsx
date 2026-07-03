import Link from "next/link";
import { Stamp, Phone, UtensilsCrossed, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ACTIONS = [
  { title: "Check Visa Requirements", href: "/before-travel/visa", icon: Stamp },
  { title: "Emergency Numbers", href: "/safety", icon: Phone },
  { title: "Find Indian Food", href: "/food", icon: UtensilsCrossed },
  { title: "Explore City Guides", href: "/cities", icon: MapPin },
];

export function QuickActionCards() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ACTIONS.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className="h-full text-center transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex flex-col items-center gap-2 py-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <action.icon className="size-5" />
                </span>
                <span className="text-sm font-medium">{action.title}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
