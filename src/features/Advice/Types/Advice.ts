export type Advice = {
  id: number;
  reason: string;
  date: Date;
  GenerateDate: Date;
  image: string;
  extraInfo: string;
  category:string
};

export type ApiAdvices = {
  data: Advice[];
  count: number;
};
