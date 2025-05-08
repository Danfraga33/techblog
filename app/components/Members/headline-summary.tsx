import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { headlines } from "~/data/constant/headline";

export function HeadlineSummary() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Headline Summary</CardTitle>
          <CardDescription>
            Latest tech trends and related companies
          </CardDescription>
        </div>
        <Tabs defaultValue="trending">
          <TabsList className="grid w-[240px] grid-cols-2">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="latest">Latest</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {headlines.map((headline) => (
            <Card
              key={headline.id}
              className="overflow-hidden border-0 bg-muted/50"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="mb-2">
                    {headline.category}
                  </Badge>
                  <span className="text-xs">{headline.time}</span>
                </div>
                <h3 className="mb-2 font-semibold leading-tight">
                  {headline.title}
                </h3>
                <p className="text-sm">{headline.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {headline.companies.map((company) => (
                    <Badge
                      key={company}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      {company}
                      <TrendingUp className="h-3 w-3" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
