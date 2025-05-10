import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  FileText,
  FilePlus,
  Download,
  FileSpreadsheet,
  Settings,
  Clock,
} from "lucide-react";
import { Separator } from "~/components/ui/separator";

export function ReportsActions() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Actions</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-2">
            <Button className="w-full justify-start gap-2">
              <FilePlus className="h-4 w-4" />
              Create New Report
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Download className="h-4 w-4" />
              Export as PDF
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              Export as CSV
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Report Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Active Filters</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Industry</span>
              <Badge variant="outline">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Priority</span>
              <Badge variant="outline">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Report Type</span>
              <Badge variant="outline">All</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Date Range</span>
              <Badge variant="outline">All Time</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">AI Market Report Updated</p>
                <p className="text-xs text-muted-foreground">
                  <Clock className="mr-1 inline-block h-3 w-3" />2 hours ago
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <FilePlus className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">New Energy Report Created</p>
                <p className="text-xs text-muted-foreground">
                  <Clock className="mr-1 inline-block h-3 w-3" />
                  Yesterday
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Download className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Biotech Report Downloaded</p>
                <p className="text-xs text-muted-foreground">
                  <Clock className="mr-1 inline-block h-3 w-3" />2 days ago
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-xs">
            View All Activity
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
