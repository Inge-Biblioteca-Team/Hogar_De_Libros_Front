import { Dispatch, SetStateAction } from "react";

export type User = {
  cedula: string;
  email: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  province: string;
  district: string;
  gender: string;
  address: string;
  birthDate: string;
  role: string;
  loanPolicity:number

};

export interface UserContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}
