import { MapPinned } from "lucide-react";
import { SearchTrigger } from "@/components/search/search-trigger";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-br from-orange-500/10 via-background to-green-600/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-24">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-green-600 text-white shadow-lg">
          <MapPinned className="size-7" />
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Indians in Belgium
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Your one-stop guide for visas, arrival, transport, community, food, and city
          guides — everything you need before, during and after your move to Belgium.
        </p>
        <div className="mt-2 w-full max-w-md">
          <SearchTrigger />
        </div>
      </div>
    </section>
  );
}
