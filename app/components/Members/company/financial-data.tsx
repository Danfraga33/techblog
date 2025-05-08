import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface QualitativeDataProps {
  company: {
    name: string;
    ticker: string;
  };
}

export function QualitativeData({ company }: QualitativeDataProps) {
  const swotData = {
    strengths: [
      {
        text: "Market leader in AI accelerators with dominant market share",
        impact: "High",
      },
      {
        text: "Strong R&D capabilities with continuous innovation",
        impact: "High",
      },
      {
        text: "Robust software ecosystem (CUDA) with high switching costs",
        impact: "High",
      },
      {
        text: "Diversified revenue streams across multiple industries",
        impact: "Medium",
      },
    ],
    weaknesses: [
      {
        text: "High dependency on Taiwan semiconductor manufacturing",
        impact: "High",
      },
      {
        text: "Potential regulatory scrutiny due to market dominance",
        impact: "Medium",
      },
      { text: "Exposure to cyclical demand in gaming segment", impact: "Low" },
      {
        text: "High valuation creates expectations for continued growth",
        impact: "Medium",
      },
    ],
    opportunities: [
      { text: "Expanding AI adoption across industries", impact: "High" },
      { text: "Growth in autonomous vehicles and robotics", impact: "Medium" },
      {
        text: "Expansion into new markets like healthcare AI",
        impact: "Medium",
      },
      {
        text: "Development of specialized AI chips for different applications",
        impact: "High",
      },
    ],
    threats: [
      {
        text: "Increasing competition from AMD, Intel, and custom chips",
        impact: "High",
      },
      { text: "Geopolitical tensions affecting supply chain", impact: "High" },
      {
        text: "Potential AI regulation impacting development pace",
        impact: "Medium",
      },
      {
        text: "Macroeconomic factors affecting enterprise spending",
        impact: "Medium",
      },
    ],
  };

  const competitiveData = [
    { name: "Market Share", value: 85, trend: "up" },
    { name: "Technology Leadership", value: 90, trend: "up" },
    { name: "Software Ecosystem", value: 95, trend: "up" },
    { name: "Product Diversification", value: 80, trend: "up" },
    { name: "Manufacturing Capacity", value: 70, trend: "neutral" },
    { name: "Price Competitiveness", value: 65, trend: "down" },
    { name: "International Presence", value: 85, trend: "up" },
    { name: "R&D Investment", value: 90, trend: "up" },
  ];

  const riskData = [
    {
      category: "Supply Chain",
      level: "High",
      description: "Dependency on limited semiconductor manufacturing capacity",
    },
    {
      category: "Competitive",
      level: "Medium",
      description: "Increasing competition in AI chip market",
    },
    {
      category: "Regulatory",
      level: "Medium",
      description: "Potential antitrust concerns and export restrictions",
    },
    {
      category: "Technological",
      level: "Low",
      description: "Risk of disruptive new computing paradigms",
    },
    {
      category: "Market",
      level: "Low",
      description: "Potential slowdown in AI investment cycle",
    },
    {
      category: "Geopolitical",
      level: "High",
      description: "Taiwan-China tensions affecting manufacturing",
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down")
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-yellow-500" />;
  };

  const getImpactColor = (impact: string) => {
    if (impact === "High")
      return "bg-red-500/20 text-red-700 dark:text-red-400";
    if (impact === "Medium")
      return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    return "bg-green-500/20 text-green-700 dark:text-green-400";
  };

  const getRiskColor = (level: string) => {
    if (level === "High") return "bg-red-500/20 text-red-700 dark:text-red-400";
    if (level === "Medium")
      return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
    return "bg-green-500/20 text-green-700 dark:text-green-400";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Key Qualitative Data
        </CardTitle>
        <CardDescription>
          Strategic analysis and competitive positioning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="swot">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
            <TabsTrigger value="competitive">Competitive Position</TabsTrigger>
            <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="swot" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="bg-green-500/10 pb-2">
                  <CardTitle className="text-base">Strengths</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {swotData.strengths.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-2"
                      >
                        <span className="text-sm">{item.text}</span>
                        <Badge className={getImpactColor(item.impact)}>
                          {item.impact}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-red-500/10 pb-2">
                  <CardTitle className="text-base">Weaknesses</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {swotData.weaknesses.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-2"
                      >
                        <span className="text-sm">{item.text}</span>
                        <Badge className={getImpactColor(item.impact)}>
                          {item.impact}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-500/10 pb-2">
                  <CardTitle className="text-base">Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {swotData.opportunities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-2"
                      >
                        <span className="text-sm">{item.text}</span>
                        <Badge className={getImpactColor(item.impact)}>
                          {item.impact}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-amber-500/10 pb-2">
                  <CardTitle className="text-base">Threats</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {swotData.threats.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-between gap-2"
                      >
                        <span className="text-sm">{item.text}</span>
                        <Badge className={getImpactColor(item.impact)}>
                          {item.impact}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="competitive" className="mt-4">
            <div className="space-y-4">
              {competitiveData.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.value}/100</span>
                      {getTrendIcon(item.trend)}
                    </div>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risk" className="mt-4">
            <div className="space-y-4">
              {riskData.map((risk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border p-3"
                >
                  <Badge className={`${getRiskColor(risk.level)} h-fit`}>
                    {risk.level}
                  </Badge>
                  <div>
                    <h4 className="font-medium">{risk.category} Risk</h4>
                    <p className="text-sm text-muted-foreground">
                      {risk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
