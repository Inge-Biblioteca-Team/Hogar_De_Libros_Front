import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { SingIng, User } from "../Type/UserType";
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

const GetUserData = async (NCedula: string) => {
  try {
    const response = await api.get(`user/504420813/${NCedula}`);
    return response.data;
  } catch (error) {
    console.error("Error usuario no encontrado");
  }
};

const DownUser = async (cedula: string) => {
  try {
    const response = await api.patch(`user/change-status/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al dar de baja al usuario:", error);
    throw error;
  }
};
const UpUser = async (cedula: string) => {
  try {
    const response = await api.patch(`user/Up-status/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error al reactivar el usuario:", error);
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
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  }
};

const LogIn = async (Data: SingIng) => {
  try {
    const response = await api.post("auth/login", Data);
    const user = response.data.user;
    const message = response.data.message;
    return { user, message };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al iniciar sesión:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al iniciar sesión"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
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

const getUserInformationByCedula = async (Ncedula: string) => {
  try {
    const response = await axios.get(
      `https://apis.gometa.org/cedulas/${Ncedula}`
    );
    return response.data;
  } catch (error) {
    console.error("Usuario no encontrado");
  }
};

export {
  getUserInformationByCedula,
  GetUsersList,
  GetUserData,
  DownUser,
  signIn,
  LogIn,
  GetUserInfo,
  PatchUserByAdmin,
  UpUser,
};
