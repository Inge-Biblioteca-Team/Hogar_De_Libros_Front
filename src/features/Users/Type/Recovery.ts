export type recovery = {
  password: string;
  repeatPasword: string;
};

type User = {
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

export type loginResponse = {
  user: User;
  message: string;
};

export type recoveryRequest = {
  email: string;
  cedula: string;
};
