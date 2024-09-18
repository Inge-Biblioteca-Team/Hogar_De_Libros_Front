import api from "../../../Services/AxiosConfig";

const GetByIdNumber = async (idNumber: string) => {
  try {
    const response = await api.get(`user/${idNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

export { GetByIdNumber };
