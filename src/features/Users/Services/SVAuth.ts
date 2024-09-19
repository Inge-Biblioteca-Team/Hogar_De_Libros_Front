import axios, { AxiosError } from "axios";
import api from "../../../Services/AxiosConfig";
import { RegisterInfo } from "../Type/UserType";

const RecoveryPassword = async ({ Email }: { Email: string }) => {
  try {
    const response = await api.post("auth/send-password-reset", {
      email: Email,
    });
    return response.status;
  } catch (error) {
    console.error("Error:", error);
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

export { RecoveryPassword, SignUp };
