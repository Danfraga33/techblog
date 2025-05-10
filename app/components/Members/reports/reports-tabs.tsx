import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export function ReportsTabs() {
  return (
    <Tabs defaultValue="overview" className="mb-6">
      <TabsList className="grid w-full grid-cols-4 md:w-[400px]">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="industry">By Industry</TabsTrigger>
        <TabsTrigger value="priority">By Priority</TabsTrigger>
        <TabsTrigger value="custom">Custom</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
