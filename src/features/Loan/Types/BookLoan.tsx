

export type LoanResponse = {
  data: Loans[];
  count: number;
};

export type Loans= {
  Status: string;
  Observations: string;
  BookLoanId: number;
  LoanRequestDate: string;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  BookTitle:string,
  BookCode:string,
  UserCedula:string
}

export type newloan={
  LoanRequestDate: string;
  BookPickUpDate: string;
  LoanExpirationDate: string;
  bookBookCode:string;
  userId:number;
  InscriptionCode:string;
  SignaCode:string
  Title:string
  Author:string
}

export type finishLoan={
  Observation:string;
  BookLoanId:number
}
