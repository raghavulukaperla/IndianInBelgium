"use client";

import { UtensilsCrossed, ShoppingBasket } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodSpotCard } from "@/components/content/cards/food-spot-card";
import type { FoodSpotItem } from "@/types";

export function FoodTabs({ items }: { items: FoodSpotItem[] }) {
  const restaurants = items.filter((i) => i.type === "indian-restaurant");
  const groceryStores = items.filter((i) => i.type !== "indian-restaurant");

  return (
    <Tabs defaultValue="restaurants">
      <TabsList>
        <TabsTrigger value="restaurants">
          <UtensilsCrossed className="size-4" /> Restaurants
        </TabsTrigger>
        <TabsTrigger value="grocery">
          <ShoppingBasket className="size-4" /> Grocery Stores
        </TabsTrigger>
      </TabsList>

      <TabsContent value="restaurants" className="mt-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {restaurants.map((item) => (
            <FoodSpotCard key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="grocery" className="mt-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {groceryStores.map((item) => (
            <FoodSpotCard key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
