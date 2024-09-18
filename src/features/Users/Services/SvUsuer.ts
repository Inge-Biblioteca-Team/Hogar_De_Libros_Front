import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { SingIng } from "../Type/UserType";
import { jwtDecode, JwtPayload } from "jwt-decode";

const GetUsersList = async (page: number, limit: number) => {
  try {
    const response = await api.get(`user`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
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

const DownUser = async (cedula: number) => {
  try {
    const response = await api.patch(`user/status/${cedula}`);
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
        console.log(decodedToken);
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


export { GetUsersList, GetUserData, DownUser, signIn, LogIn, GetUserInfo };
