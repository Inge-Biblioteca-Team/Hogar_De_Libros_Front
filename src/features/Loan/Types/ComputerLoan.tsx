export type WSLoan = {
  ComputerLoanId: number;
  workStation: number;
  UserName: string;
  AdminName: number;
  LoanStartDate: Date;
  LoanExpireDate: Date;
  Status: string;
};

export type ApiWSResponse = {
  data: WSLoan[];
  count: number;
};
