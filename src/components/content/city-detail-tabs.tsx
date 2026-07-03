"use client";

import { useEffect, useState } from "react";
import { Hotel, Landmark, Phone, Sparkles, TrainFront, UtensilsCrossed } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import type { CityDetail } from "@/types";

const TAB_ANCHORS: Record<string, string> = {
  attractions: "attractions",
  transportation: "transportation",
  hotels: "hotels",
  food: "food",
  emergency: "emergency",
  tips: "tips",
};

export function CityDetailTabs({ city }: { city: CityDetail }) {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && TAB_ANCHORS[hash]) setTab(hash);
  }, []);

  return (
    <Tabs value={tab} onValueChange={(v) => setTab(String(v))}>
      <TabsList className="flex-wrap">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="attractions">
          <Landmark className="size-4" /> Attractions
        </TabsTrigger>
        <TabsTrigger value="transportation">
          <TrainFront className="size-4" /> Transportation
        </TabsTrigger>
        <TabsTrigger value="hotels">
          <Hotel className="size-4" /> Hotels
        </TabsTrigger>
        <TabsTrigger value="food">
          <UtensilsCrossed className="size-4" /> Food
        </TabsTrigger>
        <TabsTrigger value="emergency">
          <Phone className="size-4" /> Emergency
        </TabsTrigger>
        <TabsTrigger value="tips">
          <Sparkles className="size-4" /> Tips
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{city.overview.description}</p>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Population</dt>
            <dd className="font-medium">{city.overview.population}</dd>
          </div>
          {city.overview.foundedNote && (
            <div>
              <dt className="text-muted-foreground">History</dt>
              <dd className="font-medium">{city.overview.foundedNote}</dd>
            </div>
          )}
        </dl>
        {city.overview.whyVisit.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Why visit</h3>
            <ul className="mt-2 flex flex-col gap-1.5">
              {city.overview.whyVisit.map((reason, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  &bull; {reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </TabsContent>

      <TabsContent value="attractions" className="mt-4 grid gap-3 sm:grid-cols-2">
        {city.attractions.map((a) => (
          <Card key={a.id}>
            <CardContent>
              <h3 className="font-medium">{a.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="transportation" className="mt-4 flex flex-col gap-3">
        {city.transportation.map((t, idx) => (
          <Card key={idx}>
            <CardContent>
              <h3 className="font-medium">{t.mode}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              {t.tips.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1">
                  {t.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      &bull; {tip}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="hotels" className="mt-4 grid gap-3 sm:grid-cols-2">
        {city.hotels.map((h) => (
          <Card key={h.id}>
            <CardContent>
              <h3 className="font-medium">{h.name}</h3>
              <p className="text-xs text-muted-foreground">
                {h.area} &middot; {h.priceRange}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{h.notes}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="food" className="mt-4 grid gap-3 sm:grid-cols-2">
        {city.foodSpots.map((f) => (
          <Card key={f.id}>
            <CardContent>
              <h3 className="font-medium">{f.name}</h3>
              <p className="text-xs text-muted-foreground">{f.cuisine}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.notes}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="emergency" className="mt-4 flex flex-col gap-3">
        {city.emergency.map((e, idx) => (
          <Card key={idx}>
            <CardContent className="flex items-center gap-3">
              <Phone className="size-4 text-destructive" />
              <div>
                <span className="font-semibold">{e.number}</span>
                <span className="ml-2 text-sm text-muted-foreground">{e.name}</span>
                {e.note && <p className="text-xs text-muted-foreground">{e.note}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="tips" className="mt-4">
        <ul className="flex flex-col gap-2">
          {city.tips.map((tip, idx) => (
            <li key={idx} className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
              {tip}
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
