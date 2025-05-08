import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface CompanyDescriptionProps {
  company: {
    name: string;
    ticker: string;
    sector: string;
    industry: string;
    ceo: string;
    founded: string;
    headquarters: string;
    employees: string;
    website: string;
  };
}

export function CompanyDescription({ company }: CompanyDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Company Description</CardTitle>
        <CardDescription>Overview and key information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            NVIDIA Corporation is a leading technology company specializing in
            designing and manufacturing graphics processing units (GPUs), system
            on a chip units (SoCs), and related software. Founded in 1993 by
            Jensen Huang, Chris Malachowsky, and Curtis Priem, NVIDIA has
            evolved from a graphics chip manufacturer to a dominant force in
            artificial intelligence, high-performance computing, data centers,
            gaming, and autonomous vehicles.
          </p>

          <p className="text-muted-foreground">
            The company's GPUs are widely used for AI and machine learning
            applications, scientific research, content creation, and gaming.
            NVIDIA's technology powers some of the world's fastest
            supercomputers and is integral to the development of generative AI
            models. Their CUDA parallel computing platform and programming model
            has become the standard for accelerating computational tasks.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">CEO</span>
                <span>{company.ceo}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Founded</span>
                <span>{company.founded}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Headquarters</span>
                <span>{company.headquarters}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Employees</span>
                <span>{company.employees}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Industry</span>
                <span>{company.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Website</span>
                <span className="text-primary underline">
                  {company.website}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>AI & Machine Learning</Badge>
            <Badge>Data Center</Badge>
            <Badge>Gaming</Badge>
            <Badge>Autonomous Vehicles</Badge>
            <Badge>High Performance Computing</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
