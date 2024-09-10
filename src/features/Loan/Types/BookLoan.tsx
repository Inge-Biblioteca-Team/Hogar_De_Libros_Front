

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
  