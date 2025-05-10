import { useState } from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent } from "~/components/ui/tabs";
import { Download, Eye, Grid3X3, LayoutList } from "lucide-react";

// Mock data for reports
const reports = [
  {
    id: 1,
    title: "AI Semiconductor Market Analysis",
    industry: "Technology",
    priority: "High",
    type: "Market Analysis",
    updated: "April 18, 2025",
    description:
      "In-depth analysis of the AI chip market and competitive landscape",
  },
  {
    id: 2,
    title: "Quantum Computing Industry Report",
    industry: "Technology",
    priority: "Medium",
    type: "Detailed",
    updated: "April 11, 2025",
    description:
      "Emerging players and technological developments in quantum computing",
  },
  {
    id: 3,
    title: "EV Battery Technology Comparison",
    industry: "Energy",
    priority: "High",
    type: "Detailed",
    updated: "April 4, 2025",
    description: "Analysis of solid-state and next-gen battery technologies",
  },
  {
    id: 4,
    title: "Biotech CRISPR Innovations",
    industry: "Healthcare",
    priority: "Medium",
    type: "Summary",
    updated: "March 28, 2025",
    description:
      "Latest developments in gene editing technology and market implications",
  },
  {
    id: 5,
    title: "Fintech Payment Solutions Trends",
    industry: "Finance",
    priority: "Medium",
    type: "Trend Report",
    updated: "March 21, 2025",
    description:
      "Analysis of emerging payment technologies and market adoption",
  },
  {
    id: 6,
    title: "Renewable Energy Investment Outlook",
    industry: "Energy",
    priority: "High",
    type: "Financial",
    updated: "March 14, 2025",
    description:
      "Financial projections for renewable energy investments over the next decade",
  },
  {
    id: 7,
    title: "Cloud Computing Market Share Analysis",
    industry: "Technology",
    priority: "High",
    type: "Market Analysis",
    updated: "March 7, 2025",
    description:
      "Detailed breakdown of cloud provider market share and growth trends",
  },
  {
    id: 8,
    title: "Consumer Spending Patterns Post-Pandemic",
    industry: "Consumer Goods",
    priority: "Low",
    type: "Summary",
    updated: "February 28, 2025",
    description: "Analysis of changing consumer behavior and spending patterns",
  },
];

// Helper function to get priority color
function getPriorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Low":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    default:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
  }
}

export function ReportsContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Reports</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setViewMode("list")}
          >
            <LayoutList className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsContent value="overview" className="mt-0">
          {viewMode === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <Card key={report.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-semibold leading-tight">
                        {report.title}
                      </h3>
                    </div>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {report.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1">
                      <Badge variant="outline">{report.industry}</Badge>
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Updated: {report.updated}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t bg-muted/50 p-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {reports.map((report) => (
                <Card key={report.id} className="overflow-hidden">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {report.description}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">{report.industry}</Badge>
                        <Badge variant="outline">{report.type}</Badge>
                        <Badge className={getPriorityColor(report.priority)}>
                          {report.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Updated: {report.updated}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="industry" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Industry Reports View</h3>
            <p className="text-muted-foreground">
              Reports organized by industry would appear here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="priority" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Priority Reports View</h3>
            <p className="text-muted-foreground">
              Reports organized by priority would appear here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="mt-0">
          <div className="rounded-lg border p-8 text-center">
            <h3 className="text-lg font-medium">Custom Reports View</h3>
            <p className="text-muted-foreground">
              Custom report configurations would appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
