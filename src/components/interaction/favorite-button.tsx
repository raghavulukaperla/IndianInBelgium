"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { favorites } from "@/lib/storage";
import { cn } from "@/lib/utils";

export function FavoriteButton({ id }: { id: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => setIsFavorite(favorites.has(id)), [id]);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      onClick={() => setIsFavorite(favorites.toggle(id))}
    >
      <Heart className={cn("size-4", isFavorite && "fill-destructive text-destructive")} />
    </Button>
  );
}
