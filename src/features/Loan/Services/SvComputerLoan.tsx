import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

//Gets
const GetStatus = async () => {
  try {
    const response = await api.get(`computers/workstation/Status`);
    return response.data;
  } catch (error) {
    console.error("Error to get Stattu:", error);
    throw error;
  }
};

const GetWSLoans = async (page: number, limit: number) => {
    try {
      const response = await api.get(`computer-loan`, {
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

export { GetStatus, GetWSLoans}