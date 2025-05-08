import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { LineChart } from "lucide-react";
import { watchlistItems } from "~/data/constant/watchList_items";

export function WatchlistSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">Your Watchlist</CardTitle>
            <CardDescription>Companies you're tracking</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Manage Watchlist
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {watchlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{item.ticker}</span>
                      <span
                        className={`text-xs ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LineChart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-3">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Signal Strength</span>
                    <span>{item.signalStrength}/100</span>
                  </div>
                  <Progress value={item.signalStrength} className="h-1" />
                </div>

                <div className="mt-3 text-xs text-muted-foreground">
                  <p className="line-clamp-2">{item.headline}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
