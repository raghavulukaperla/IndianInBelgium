import type { Metadata } from "next";
import { WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "You're offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <WifiOff className="size-12 text-muted-foreground" />
      <h1 className="text-2xl font-semibold">You&apos;re offline</h1>
      <p className="text-muted-foreground">
        This page hasn&apos;t been cached yet. Pages you&apos;ve already visited, along with
        search, remain available offline — reconnect to browse the rest of the site.
      </p>
    </div>
  );
}
