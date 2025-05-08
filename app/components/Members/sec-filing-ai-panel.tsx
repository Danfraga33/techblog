"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Send, FileText } from "lucide-react";
import { ScrollArea } from "~/components/ui/scroll-area";

export function SecFilingAiPanel() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setResponse(
        "Based on NVIDIA's latest 10-Q filing, their data center revenue grew 409% year-over-year, primarily driven by accelerated demand for AI infrastructure. Their gross margin improved to 78.4%, and they've increased R&D investment by 24% to maintain their technological advantage in AI accelerators. The company expects continued strong demand through 2025 as AI deployment expands across industries.",
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="flex h-[500px] flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          SEC Filing AI Summary
        </CardTitle>
        <CardDescription>Ask questions about company filings</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-[320px] rounded-md border p-4">
          {response ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-2 rounded-lg bg-muted p-3">
                  <p className="text-sm">{response}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <FileText className="mb-2 h-8 w-8" />
              <h3 className="text-lg font-medium">No queries yet</h3>
              <p className="text-sm">
                Ask a question about SEC filings to get AI-powered insights
              </p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            placeholder="e.g., Summarize NVIDIA's latest 10-Q revenue growth"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
