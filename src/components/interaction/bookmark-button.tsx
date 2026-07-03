"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookmarks } from "@/lib/storage";

export function BookmarkButton() {
  const pathname = usePathname();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => setBookmarked(bookmarks.has(pathname)), [pathname]);

  return (
    <Button
      variant="outline"
      size="sm"
      aria-pressed={bookmarked}
      onClick={() => setBookmarked(bookmarks.toggle(pathname))}
    >
      {bookmarked ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </Button>
  );
}
