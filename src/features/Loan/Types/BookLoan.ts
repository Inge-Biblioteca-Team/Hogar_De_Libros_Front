export type LoanResponse = {
  data: LoansRes[];
  count: number;
};
export type LoansRes = {
  LoanRequestDate: string;
  Status: string;
  Observations: string;
  BookLoanId: number;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  userCedula: string;
  userPhone: string;
  userAddress: string;
  userName: string;
  aprovedBy: string;
  receivedBy: string | null;
  type: "INFANTIL" | "GENERAL";
  OldObservations:string[]
  book?: book;
  childrenBook?: childrenBook;
};

type book = {
  Cover: string;
  Status: boolean;
  BookCode: number;
  Title: string;
  Author: string;
  Editorial: string;
  PublishedYear: number;
  ISBN: string;
  ShelfCategory: string;
  BookConditionRating: number;
  signatureCode: string;
  InscriptionCode: string;
  ReserveBook: boolean;
  Observations: string;
};

type childrenBook = {
  Cover: string;
  Status: boolean;
  BookCode: number;
  Title: string;
  Author: string;
  Editorial: string;
  PublishedYear: number;
  ISBN: string;
  ShelfCategory: string;
  BookConditionRating: number;
  SignatureCode: string;
  InscriptionCode: string;
  ReserveBook: boolean;
  Observations: string;
};

export type Loans = {
  Status: string;
  BookLoanId: number;
  LoanRequestDate: Date;
  BookPickUpDate: Date;
  LoanExpirationDate: Date;
  Observations: string;
  OldObservations: [];
  user: User;
  book: Book;
  Name: string;
  Mail: string;
  PhoneNumber: string;
  Cedula: string;
};

export type Book = {
  Title: string;
  signatureCode: string;
  InscriptionCode: string;
  BookCode: number;
  Author: string;
};

export type User = {
  cedula: string;
  name: string;
  Adress: string;
  PhoneNumber: string;
};

export type finishLoan = {
  LoanID: number;
  person: string;
  Observations: string;
};

export type newloan = {
  LoanRequestDate: string;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  bookBookCode: string;
  userCedula: string;
  InscriptionCode: string;
  SignaCode: string;
  Title: string;
  Author: string;
  Name: string;
  Mail: string;
  PhoneNumber: string;
};

export type ChangeExpiredDate = {
  BookLoanId: number;
  LoanExpirationDate: string;
};
