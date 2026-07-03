import Link from "next/link";
import { Stamp, Phone, UtensilsCrossed, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ACTIONS = [
  {
    title: "Check Visa Requirements",
    href: "/before-travel/visa",
    icon: Stamp,
    color: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Emergency Numbers",
    href: "/safety",
    icon: Phone,
    color: "bg-red-500/15 text-red-600 dark:text-red-400",
  },
  {
    title: "Find Indian Food",
    href: "/food",
    icon: UtensilsCrossed,
    color: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Explore City Guides",
    href: "/cities",
    icon: MapPin,
    color: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  },
];

export function QuickActionCards() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ACTIONS.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className="h-full text-center transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center gap-2 py-2">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${action.color}`}>
                  <action.icon className="size-5" />
                </span>
                <span className="flex flex-1 items-center text-sm font-medium">
                  {action.title}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
