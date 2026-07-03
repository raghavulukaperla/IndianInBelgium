import { CloudSun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WeatherPlaceholder() {
  return (
    <Card className="bg-gradient-to-br from-sky-500/10 to-transparent">
      <CardContent className="flex items-center gap-4">
        <CloudSun className="size-9 text-sky-500" />
        <div>
          <h3 className="font-semibold">Belgium Weather</h3>
          <p className="text-sm text-muted-foreground">
            Live weather isn&apos;t wired up yet — Belgium has a mild, rainy maritime climate
            year-round. This widget is a placeholder for a future weather API integration.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
