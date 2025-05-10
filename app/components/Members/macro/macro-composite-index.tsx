import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the composite index
const compositeData = [
  { date: "Jan 2025", value: 42 },
  { date: "Feb 2025", value: 38 },
  { date: "Mar 2025", value: 35 },
  { date: "Apr 2025", value: 32 },
  { date: "May 2025", value: 28 },
  { date: "Jun 2025", value: 25 },
  { date: "Jul 2025", value: 22 },
  { date: "Aug 2025", value: 20 },
  { date: "Sep 2025", value: 18 },
  { date: "Oct 2025", value: 22 },
  { date: "Nov 2025", value: 25 },
  { date: "Dec 2025", value: 30 },
  { date: "Jan 2026", value: 35 },
  { date: "Feb 2026", value: 40 },
  { date: "Mar 2026", value: 45 },
  { date: "Apr 2026", value: 48 },
  { date: "May 2026", value: 52 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">{label}</p>
        <p className="text-primary">
          Score: <span className="font-mono">{payload[0].value}</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {payload[0].value < 30
            ? "Contractionary"
            : payload[0].value > 50
              ? "Expansionary"
              : "Neutral"}
        </p>
      </div>
    );
  }
  return null;
};

export function MacroCompositeIndex() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Capital Cycle Composite Index</CardTitle>
        <CardDescription>
          Weighted signal score based on macro indicators
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={compositeData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="date"
                tick={{ fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={{ stroke: "var(--border)" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "var(--muted-foreground)" }}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={{ stroke: "var(--border)" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="basis"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{
                  r: 1,
                  fill: "#3baa",
                  strokeWidth: 1,
                  stroke: "var(--background)",
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 1,
                  stroke: "var(--background)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-sm font-medium">Interpretation Guide</p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>• 0-30: Contractionary conditions</li>
              <li>• 30-50: Neutral conditions</li>
              <li>• 50-100: Expansionary conditions</li>
            </ul>
          </div>
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-sm font-medium">Current Reading</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">May 2026</span>
              <span className="font-mono text-lg font-bold">52</span>
            </div>
            <p className="mt-1 text-xs text-green-500">
              Early Expansionary Phase
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
