import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

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
export { GetUsersList };
