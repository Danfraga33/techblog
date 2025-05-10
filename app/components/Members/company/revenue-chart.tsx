"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function RevenueChart() {
  const data = [
    {
      year: "2020",
      revenue: 16.7,
    },
    {
      year: "2021",
      revenue: 26.9,
    },
    {
      year: "2022",
      revenue: 26.9,
    },
    {
      year: "2023",
      revenue: 60.9,
    },
    {
      year: "2024",
      revenue: 88.2,
    },
  ];

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-md">
          <p className="font-medium">{`Year: ${label}`}</p>
          <p className="text-primary">{`Revenue: $${payload[0].value}B`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis
            dataKey="year"
            tick={{ fill: "#71717a" }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            tickFormatter={(value) => `$${value}B`}
            tick={{ fill: "#71717a" }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "10px" }}
            formatter={() => (
              <span className="text-sm font-medium">Annual Revenue</span>
            )}
          />
          <Line
            type="linear"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
            connectNulls={true}
            dot={{
              r: 6,
              fill: "#3b82f6",
              strokeWidth: 2,
              stroke: "#ffffff",
            }}
            activeDot={{
              r: 8,
              strokeWidth: 2,
              stroke: "#ffffff",
            }}
            name="Annual Revenue"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
