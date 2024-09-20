import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { SingIng, User } from "../Type/UserType";
import { jwtDecode, JwtPayload } from "jwt-decode";

const GetUsersList = async (
  page: number,
  limit: number,
  cedula?: string,
  name?: string,
  rol?: string,
  year?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (name) params.name = name;
    if (cedula) params.cedula = cedula;
    if (rol) params.role = rol;
    if (year) params.registerDate = year;
    const response = await api.get("user", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const api2 = axios.create({
  baseURL: "https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test",
  timeout: 1000,
});

const GetUserData = async (NCedula: string) => {
  try {
    const response = await api2.get("", {
      params: {
        Cedula: NCedula,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Usuario no encontrado");
  }
};

const DownUser = async (cedula: string) => {
  try {
    const response = await api.patch(`user/change-status/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};
const UpUser = async (cedula: string) => {
  try {
    const response = await api.patch(`user/Up-status/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};

const signIn = async (username: string, password: string) => {
  try {
    const response = await api.post("auth/login", {
      username: username,
      password: password,
    });
    sessionStorage.setItem("Token", response.data.access_token);
  } catch (error) {
    if (error) {
      console.error("Error to disbale:", error);
      throw error;
    }
  }
};

interface Payload extends JwtPayload {
  sub: string;
  email: string;
  role: string;
}

const LogIn = async (Data: SingIng) => {
  try {
    const response = await api.post("auth/login", Data);
    sessionStorage.setItem("Token2", response.data.access_token);
    const Token = response.data.access_token;
    if (Token) {
      try {
        const decodedToken: Payload = jwtDecode(Token);
        const sub = decodedToken.sub;
        const email = decodedToken.email;
        const role = decodedToken.role;
        sessionStorage.setItem("cedula", sub);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("role", role);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    } else {
      console.error("Token no encontrado");
    }
  } catch (error) {
    if (error) {
      throw error;
    }
  }
};

const GetUserInfo = async (NCedula: string) => {
  try {
    const response = await api.get(`user/${NCedula}`);
    return response.data;
  } catch (error) {
    console.error("Usuario no encontrado");
  }
};

const PatchUserByAdmin = async (user: User, cedula: string) => {
  try {
    const response = await api.patch(`user/update/${cedula}`, user);
    return response.data;
  } catch (error) {
    console.error;
    throw error;
  }
};

export {
  GetUsersList,
  GetUserData,
  DownUser,
  signIn,
  LogIn,
  GetUserInfo,
  PatchUserByAdmin,
  UpUser
};
