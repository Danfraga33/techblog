import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "@remix-run/react";

export function EmergingCompanyTracker() {
  const companies = [
    {
      id: 1,
      name: "Quantum AI Systems",
      ticker: "QAIS",
      relevance:
        "Developing quantum machine learning algorithms for financial prediction",
      sector: "AI & Quantum",
      filingStatus: "10-Q Filed",
      filingDate: "Apr 15, 2025",
    },
    {
      id: 2,
      name: "NeuraTech Innovations",
      ticker: "NRTI",
      relevance:
        "Brain-computer interface technology for consumer applications",
      sector: "Biotech",
      filingStatus: "S-1 Filed",
      filingDate: "Apr 10, 2025",
    },
    {
      id: 3,
      name: "FusionEnergy Corp",
      ticker: "FUSE",
      relevance:
        "Commercial fusion reactor technology with recent breakthrough",
      sector: "Energy",
      filingStatus: "8-K Filed",
      filingDate: "Apr 8, 2025",
    },
    {
      id: 4,
      name: "SpaceX",
      ticker: "SPCX",
      relevance: "Starship development and satellite internet expansion",
      sector: "Aerospace",
      filingStatus: "Pre-IPO",
      filingDate: "N/A",
    },
    {
      id: 5,
      name: "CarbonCapture Technologies",
      ticker: "CCTC",
      relevance:
        "Direct air capture technology with improved efficiency metrics",
      sector: "CleanTech",
      filingStatus: "10-K Filed",
      filingDate: "Apr 1, 2025",
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">
              Emerging Company Tracker
            </CardTitle>
            <CardDescription>
              Companies with significant technology developments
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Relevance</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead>Filing Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">
                  <div>
                    {company.name}
                    <div className="text-xs text-muted-foreground">
                      {company.ticker}
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  className="max-w-[250px] truncate"
                  title={company.relevance}
                >
                  {company.relevance}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{company.sector}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-sm">
                      <FileText className="h-3 w-3" />
                      {company.filingStatus}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {company.filingDate}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Link to={company.ticker}>
                    <Button variant="outline">
                      <span>View</span>
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
