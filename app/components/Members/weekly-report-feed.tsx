import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";
import { Separator } from "~/components/ui/separator";

export function WeeklyReportsFeed() {
  const reports = [
    {
      id: 1,
      title: "AI Semiconductor Market Analysis",
      date: "April 18, 2025",
      description:
        "In-depth analysis of the AI chip market and competitive landscape",
      companies: ["NVDA", "AMD", "INTC", "QCOM"],
      pages: 24,
    },
    {
      id: 2,
      title: "Quantum Computing Industry Report",
      date: "April 11, 2025",
      description:
        "Emerging players and technological developments in quantum computing",
      companies: ["IBM", "GOOG", "IONQ", "RGTI"],
      pages: 18,
    },
    {
      id: 3,
      title: "EV Battery Technology Comparison",
      date: "April 4, 2025",
      description: "Analysis of solid-state and next-gen battery technologies",
      companies: ["TSLA", "QS", "ENVX", "CATL"],
      pages: 32,
    },
    {
      id: 4,
      title: "Biotech CRISPR Innovations",
      date: "March 28, 2025",
      description:
        "Latest developments in gene editing technology and market implications",
      companies: ["CRSP", "NTLA", "EDIT", "BEAM"],
      pages: 28,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">
              Weekly Reports Feed
            </CardTitle>
            <CardDescription>Latest in-depth analysis reports</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All Reports
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col space-y-2 rounded-lg border p-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0"
            >
              <div className="flex h-16 w-12 flex-shrink-0 items-center justify-center rounded bg-muted">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h3 className="font-semibold">{report.title}</h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {report.date}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {report.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <div className="flex flex-wrap gap-1">
                    {report.companies.map((company) => (
                      <Badge
                        key={company}
                        variant="outline"
                        className="text-xs"
                      >
                        {company}
                      </Badge>
                    ))}
                  </div>
                  <Separator orientation="vertical" className="mx-1 h-4" />
                  <span className="text-xs text-muted-foreground">
                    {report.pages} pages
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto flex-shrink-0"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
