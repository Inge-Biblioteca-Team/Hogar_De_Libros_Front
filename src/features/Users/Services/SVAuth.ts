import api from "../../../Services/AxiosConfig";

const RecoveryPassword = async ({ Email }: { Email: string }) => {
  try {
    const response = await api.post("auth/send-password-reset", {
      email: Email,
    });
    return response.status;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};

export { RecoveryPassword };
