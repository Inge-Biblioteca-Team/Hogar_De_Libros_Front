export type User = {
  cedula: number;
  email: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  registerDate: Date;
  province: string;
  status: boolean;
};

export type UsersResponse = {
  data: User[];
  count: number;
};

export type LoanInfo = {
  cedula: string;
  name: string;
  email: string;
  phoneNumber: string;
};


export type UserForNewLoan ={
  Name: string
  Mail:string
  PhoneNumber:string
  Cedula: string
}



export type SingIng={
  username:string;
  password:string
}