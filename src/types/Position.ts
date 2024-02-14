export type Position = {
  id: number;
  investmentType: string;
  investmentName: string;
  status: "Active" | "Closed";
  date: string;
  value: number;
};
