import api from "./AxiosConfig";

const GetStats = async () => {
  try {
    const response = await api.get(`stats`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { GetStats };
