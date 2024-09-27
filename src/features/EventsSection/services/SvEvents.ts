import axios from "axios";
import api from "../../../Services/AxiosConfig";

const getEvents = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Events"
  );
  return response.data;
};


const GetNextEvents = async (
  month?: string,
  type?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (month) params.month = month;
    if (type) params.category = type;

    const response = await api.get("/events/NextEvents", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { getEvents, GetNextEvents };
