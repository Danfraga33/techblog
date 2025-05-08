import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Bell, LineChart, Share2, Star } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

interface CompanyHeaderProps {
  company: {
    name: string;
    ticker: string;
    logo: string;
    sector: string;
  };
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="text-black">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/member">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/companies">Companies</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{company.ticker}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <img
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              className="h-8 w-8"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{company.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-primary">
                {company.ticker}
              </span>
              <Badge variant="outline">{company.sector}</Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Star className="mr-1 h-4 w-4" />
            Add to Watchlist
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="mr-1 h-4 w-4" />
            Set Alert
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <LineChart className="mr-1 h-4 w-4" />
            Full Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
