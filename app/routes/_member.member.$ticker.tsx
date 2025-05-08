import { CompanyHeader } from "~/components/Members/company/company-header";
import { CompanyDescription } from "~/components/Members/company/company-description";
import { CompanyInsights } from "~/components/Members/company/chart-insights";
import { QualitativeData } from "~/components/Members/company/financial-data";
import { RevenueChart } from "~/components/Members/company/revenue-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useLocation } from "@remix-run/react";
import { getTicker } from "~/lib/utils";

export default function CompanyPage({
  params,
}: {
  params: { ticker: string };
}) {
  console.log("params: ", params);
  // In a real application, you would fetch company data based on the ticker
  // For this example, we'll use static data
  const companyData = {
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    logo: "/placeholder.svg?height=40&width=40",
    sector: "Semiconductors",
    industry: "Semiconductor Equipment & Materials",
    ceo: "Jensen Huang",
    founded: "1993",
    headquarters: "Santa Clara, California",
    employees: "26,196",
    website: "https://www.nvidia.com",
  };

  return (
    <div className="p-3 text-black">
      <CompanyHeader company={companyData} />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <CompanyDescription company={companyData} />
        </div>
        <div>
          <CompanyInsights company={companyData} />
        </div>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Revenue Growth (Last 5 Years)
            </CardTitle>
            <CardDescription>Annual revenue in billions USD</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        Framework below
        <Tabs defaultValue="financial">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="financial">Financial Data</TabsTrigger>
            <TabsTrigger value="qualitative">Qualitative Data</TabsTrigger>
          </TabsList>
          <TabsContent value="financial" className="mt-4">
            <QualitativeData company={companyData} />
          </TabsContent>
          <TabsContent value="qualitative" className="mt-4">
            <QualitativeData company={companyData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
