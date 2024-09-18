export type Artist = {
  ID: number;
  Name:string;
  Cover: string;
  ArtisProfession: string;
  MoreInfo: string;
  FBLink: string;
  IGLink: string;
  LILink: string;
  Actived: boolean;
};

export type ResponseA ={

  data: Artist[],
  count: number
}
