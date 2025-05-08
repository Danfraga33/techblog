import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Button } from "~/components/ui/button";

interface CompanyInsightsProps {
  company: {
    name: string;
    ticker: string;
  };
}

export function CompanyInsights({ company }: CompanyInsightsProps) {
  const insights = [
    {
      id: 1,
      title: "AI Demand Surge",
      description: "Unprecedented demand for AI chips driving revenue growth",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      id: 2,
      title: "Supply Chain Risk",
      description: "Potential semiconductor supply constraints in Q3",
      icon: AlertTriangle,
      color: "text-amber-500",
    },
    {
      id: 3,
      title: "New SEC Filing",
      description: "10-Q filed on April 15, 2025 shows strong performance",
      icon: FileText,
      color: "text-blue-500",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Company Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="flex items-start gap-3">
              <div
                className={`rounded-full bg-background p-1.5 ${insight.color}`}
              >
                <insight.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}

          <Button variant="outline" className="mt-2 w-full justify-between">
            View All Insights
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
