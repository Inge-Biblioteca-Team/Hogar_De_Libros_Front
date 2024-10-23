import { Dispatch, SetStateAction } from "react";

export type User = {
  cedula?: string;
  email?: string;
  name?: string;
  lastName?: string;
  poneNumber?: string;
  province?: string;
  district?: string;
  gender?: string;
  addres?: string;
  birthDate?: string;
  role?: string;
};

export interface UserContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}
