import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <Compass className="size-12 text-muted-foreground" />
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        This page doesn&apos;t exist, or the content may have moved. Try the search bar or head
        back home.
      </p>
      <Button render={<Link href="/">Back to home</Link>} nativeButton={false} />
    </div>
  );
}
