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

export type NewWSLoan = {
  MachineNumber: number;
  cedula: string;
  UserName: string;
};
export type NewWSMantenance = {
  machineNumber: number;
  location: string;
  userName: string;
};
