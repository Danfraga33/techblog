import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const TopCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium">Total Companies Tracked</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,543</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium">SEC Filings Analyzed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">14,892</div>
          <p className="text-xs text-muted-foreground">+8% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-medium">AI Insights Generated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32,145</div>
          <p className="text-xs text-muted-foreground">+24% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopCards;
