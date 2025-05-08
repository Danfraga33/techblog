"use client";

import type React from "react";

import type { ReactNode } from "react";
import { Tooltip } from "recharts";

interface ChartContainerProps {
  children: ReactNode;
}

export function ChartContainer({ children }: ChartContainerProps) {
  return <div className="w-full">{children}</div>;
}

interface ChartTooltipContentProps {
  className?: string;
  items: {
    label: string;
    value: (value: number | string) => string;
    color: string;
  }[];
  active?: boolean;
  payload?: any[];
  label?: string;
}

export function ChartTooltipContent({
  className,
  items,
  active,
  payload,
  label,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className={`rounded-lg border bg-background p-2 shadow-md ${className}`}
    >
      <div className="mb-1 font-medium">{label}</div>
      {items.map((item, index) => {
        const value = payload[0]?.payload[item.label.toLowerCase()] || 0;
        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-1">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm">{item.label}</span>
            </div>
            <span className="text-sm font-medium">{item.value(value)}</span>
          </div>
        );
      })}
    </div>
  );
}

// Add the missing ChartTooltip component
export function ChartTooltip({ content }: { content: React.ReactNode }) {
  return <Tooltip content={content} />;
}

interface ChartLegendProps {
  payload: {
    value: string;
    color: string;
  }[];
}

export function ChartLegend({ payload }: ChartLegendProps) {
  return (
    <div className="mt-2 flex items-center justify-center space-x-4">
      {payload.map((item) => (
        <div key={item.value} className="flex items-center">
          <span
            className="mr-1 h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          <span className="text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export const Chart = () => null;
