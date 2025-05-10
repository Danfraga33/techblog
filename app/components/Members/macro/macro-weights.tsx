import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { indicators } from "./macro-indicators";

export function MacroWeights() {
  // Sort indicators by weight in descending order
  const sortedIndicators = [...indicators].sort((a, b) => b.weight - a.weight);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Composite Index Weights</CardTitle>
        <CardDescription>
          Contribution of each indicator to the composite score
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedIndicators.map((indicator) => (
            <div key={indicator.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{indicator.name}</span>
                <span className="text-sm">{indicator.weight}%</span>
              </div>
              <Progress value={indicator.weight} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
