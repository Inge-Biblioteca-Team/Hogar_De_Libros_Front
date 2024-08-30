export type Book = {
  Title: string;
  Author: string;
  Editorial: string;
  PublishedYear: number;
  ISBN: string;
  ShelfCategory: string;
  Cover: string;
  BookConditionRating: number;
  SignatureCode: string;
  InscriptionCode: number;
  Observations: string;
  ReserveBook: boolean;
  BookCode: string;
  Status: boolean;
};

export type BookApiResponse = {
  data: Book[];
  count: number;
};

export type EditBook = {
  Title: string;
  Author: string;
  Editorial: string;
  PublishedYear: number;
  ISBN: string;
  ShelfCategory: string;
  Cover: string;
  BookConditionRating: number;
  SignatureCode: string;
  InscriptionCode: number;
  Observations: string;
  ReserveBook: boolean;
  Status: boolean;
};
