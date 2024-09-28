export type Programs = {
  Name: string;
  Image: string;
  Description: string;
  id: string;
};
export type Program = {
  programName: string;
  description: string;
  image: string;
  status: boolean;
  programsId: string;
};

export type ApiProgramsResponse = {
  data: Program[];
  count: number;
};
