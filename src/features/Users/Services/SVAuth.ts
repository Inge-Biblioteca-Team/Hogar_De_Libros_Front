import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { RegisterInfo } from "../Type/UserType";
import { recovery, recoveryRequest } from "../Type/Recovery";

const RecoveryPassword = async (data: recoveryRequest) => {
  try {
    const response = await api.post("auth/send-password-reset", data);
    return response.status;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error durante el cierre de sesión:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error durante el cierre de sesión"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const resetPassword = async (data: recovery) => {
  try {
    const response = await api.patch(
      "user/update-password",
      { cedula: data.cedula, newPassword: data.newPassword },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    throw error;
  }
};

const SignUp = async (UserInfo: RegisterInfo) => {
  try {
    const response = await api.post("/user", UserInfo);
    return response.status;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error durante el registro:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error durante el registro"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const LogOut = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.status;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error durante el cierre de sesión:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error durante el cierre de sesión"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const getProfile = async () => {
  try {
    const response = await api.post("auth/Profile");
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

export { RecoveryPassword, SignUp, resetPassword, LogOut, getProfile };
