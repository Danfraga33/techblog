import { Button } from "~/components/ui/button";
import { Zap } from "lucide-react";
import { HeadlineSummary } from "./headline-summary";
import { EmergingCompanyTracker } from "./emerging-company-tracker";
import { WatchlistSection } from "./watchlist-section";
import { WeeklyReportsFeed } from "./weekly-report-feed";

export function DashboardContent() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">
            <Zap className="mr-2 h-4 w-4" />
            New Analysis
          </Button>
        </div>
      </div>

      <HeadlineSummary />

      <div className="w-full">
        <div className="col-span-full lg:col-span-2">
          <EmergingCompanyTracker />
        </div>
      </div>

      <WatchlistSection />

      <WeeklyReportsFeed />
    </div>
  );
}
