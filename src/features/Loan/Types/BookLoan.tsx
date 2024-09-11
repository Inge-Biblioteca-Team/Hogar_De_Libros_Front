
export type newloan = {
  LoanRequestDate: string;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  bookBookCode: string;
  userCedula: number;
  InscriptionCode: string;
  SignaCode: string;
  Title: string;
  Author: string;
};

export type finishLoan = {
  Observation: string;
  BookLoanId: number;
};

export type Book = {
  Title: string;
  signatureCode: string;
  InscriptionCode: string;
  BookCode: number;
};

export type User = {
  cedula: string;
  name: string;
  lastName: string;
};

export type Loans = {
  Status: string;
  BookLoanId: number;
  LoanRequestDate: string;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  Observations: string;
  book: Book;
  user: User;
};

export type LoanResponse = {
  data: Loans[];
  count: number;
};
