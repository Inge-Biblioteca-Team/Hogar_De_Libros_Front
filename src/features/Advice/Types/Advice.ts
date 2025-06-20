export type Advice = {
  id_Advice: number;
  reason: string;
  date: Date;
  GenerateDate: Date;
  image: string;
  extraInfo: string;
  category: string;
  status: boolean;
};

export type ApiAdvices = {
  data: Advice[];
  count: number;
};

//just to test
export type Notice = {
  reason:string;
  considerations: string;
  Image:string;
  date:string;
  id: string;
  }
