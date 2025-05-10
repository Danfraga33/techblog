export const indicators = [
  {
    name: "PMI",
    value: "48.2",
    trend: "down",
    status: "Contracting",
    lastUpdated: "May 1, 2025",
    description:
      "Purchasing Managers' Index. A measure of manufacturing sector activity. Values below 50 indicate contraction.",
    weight: 25,
  },
  {
    name: "Non-Manufacturing PMI",
    value: "52.7",
    trend: "up",
    status: "Expanding",
    lastUpdated: "May 1, 2025",
    description:
      "A measure of service sector activity. Values above 50 indicate expansion.",
    weight: 15,
  },
  {
    name: "Yield Curve (10Y-3M)",
    value: "-0.45%",
    trend: "down",
    status: "Inverted",
    lastUpdated: "May 8, 2025",
    description:
      "Difference between 10-year and 3-month Treasury yields. Negative values often precede recessions.",
    weight: 20,
  },
  {
    name: "Initial Jobless Claims",
    value: "235K",
    trend: "up",
    status: "Rising",
    lastUpdated: "May 6, 2025",
    description:
      "Number of new unemployment claims filed. Rising values may indicate labor market weakness.",
    weight: 10,
  },
  {
    name: "Crude Oil Production",
    value: "102.3M",
    trend: "neutral",
    status: "Stable",
    lastUpdated: "May 5, 2025",
    description:
      "Global daily oil production in millions of barrels. Affects energy prices and inflation.",
    weight: 5,
  },
  {
    name: "Loans to Private Sector",
    value: "-2.1%",
    trend: "down",
    status: "Contracting",
    lastUpdated: "May 3, 2025",
    description:
      "Year-over-year change in bank lending to businesses and consumers. Negative values indicate credit tightening.",
    weight: 10,
  },
  {
    name: "Building Permits",
    value: "1.42M",
    trend: "down",
    status: "Declining",
    lastUpdated: "May 2, 2025",
    description:
      "Number of new residential building permits issued. Leading indicator for construction activity.",
    weight: 5,
  },
  {
    name: "Housing Starts",
    value: "1.37M",
    trend: "down",
    status: "Declining",
    lastUpdated: "May 2, 2025",
    description:
      "Number of new housing construction projects begun. Important indicator of economic health.",
    weight: 5,
  },
  {
    name: "Corporate Bankruptcies",
    value: "642",
    trend: "up",
    status: "Rising",
    lastUpdated: "May 4, 2025",
    description:
      "Monthly count of business bankruptcy filings. Rising values indicate financial stress.",
    weight: 5,
  },
  {
    name: "U.S. Leading Economic Index",
    value: "-0.3%",
    trend: "down",
    status: "Contracting",
    lastUpdated: "May 7, 2025",
    description:
      "Composite of 10 leading indicators. Negative values for several months suggest economic contraction ahead.",
    weight: 10,
  },
];
