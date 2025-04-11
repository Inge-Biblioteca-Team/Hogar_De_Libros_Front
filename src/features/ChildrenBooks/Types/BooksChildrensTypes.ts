export type BookC = {
    Title: string;
    Author: string;
    Editorial: string;
    PublishedYear: number;
    ISBN: string;
    ShelfCategory: string;
    Cover: string;
    BookConditionRating: number;
    SignatureCode: string;
    InscriptionCode: string;
    Observations: string;
    ReserveBook: boolean;
    BookCode: string;
    Status: boolean;
  };

  
export type Catalog = {
    data: BookC[];
    count: number;
  };