export type LoanResponse = {
  data: Loans[];
  count: number;
};

export type Loans = {
  Status: string;
  BookLoanId: number;
  LoanRequestDate: Date;
  BookPickUpDate: Date;
  LoanExpirationDate: Date;
  Observations: string;
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
