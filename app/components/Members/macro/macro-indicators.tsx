import { Card, CardContent } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Badge } from "~/components/ui/badge";
import { InfoIcon, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { indicators } from "~/data/constant/indicators";

// Mock data for the indicators

// Helper function to get trend icon
function getTrendIcon(trend: string) {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    default:
      return <Minus className="h-4 w-4 text-yellow-500" />;
  }
}

// Helper function to get status badge style
function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "expanding":
    case "rising":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "contracting":
    case "declining":
    case "inverted":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
  }
}

export function MacroIndicators() {
  return (
    <TooltipProvider>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {indicators.map((indicator) => (
          <Tooltip key={indicator.name} delayDuration={300}>
            <TooltipTrigger asChild>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold">{indicator.name}</h3>
                        <InfoIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <p className="font-mono text-2xl font-bold tracking-tight">
                        {indicator.value}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {getTrendIcon(indicator.trend)}
                      <Badge
                        className={`cursor-default ${getStatusBadge(indicator.status)}`}
                      >
                        {indicator.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Updated: {indicator.lastUpdated}
                  </p>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="max-w-xs bg-gray-400 p-4 text-white"
            >
              <div className="space-y-2">
                <p className="font-semibold underline">{indicator.name}</p>
                <p className="text-sm">{indicator.description}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

// Export indicators for use in other components
export { indicators };
