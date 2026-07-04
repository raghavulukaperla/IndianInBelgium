import Link from "next/link";
import { MapPinned } from "lucide-react";
import { MobileNavSheet } from "./mobile-nav-sheet";
import { SearchTrigger } from "@/components/search/search-trigger";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ReadingProgress } from "./reading-progress";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <ReadingProgress />
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-4 sm:px-6">
        <MobileNavSheet />
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-amber-500 to-green-600 text-white shadow-sm">
            <MapPinned className="size-4.5" />
          </span>
          <span className="hidden sm:inline">Indians in Belgium</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <SearchTrigger />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
