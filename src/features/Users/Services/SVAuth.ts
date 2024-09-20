import axios, { AxiosError } from "axios";
import api from "../../../Services/AxiosConfig";
import { RegisterInfo } from "../Type/UserType";

const RecoveryPassword = async ({ Email, Cedula }: { Email: string, Cedula: string }) => {
  try {
    const response = await api.post("auth/send-password-reset", {
      email: Email,
      cedula: Cedula
    });
    return response.status;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const resetPassword = async ({ token, newPassword, cedula }: { token: string, newPassword: string; cedula:string }) => {
  try {
    const response = await api.patch(
      'user/update-password',
      {cedula, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    throw error; 
  }
};


interface ErrorResponse {
  statusCode: number;
  message: string;
}


const SignUp = async (UserInfo: RegisterInfo) => {
  console.log(UserInfo)
  try {
    const response = await api.post("/user", 
      UserInfo,
    );
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};

export { RecoveryPassword, SignUp, resetPassword };
