import axios from "axios";
import api from "../../../Services/AxiosConfig";

const getCourses = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Courses"
  );
  return response.data;
};

const GetNextCourses = async (
  page?: number,
  limit?: number,
  month?: string,
  type?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (page) params.page = page;
    if (limit) params.limit = limit;
    if (month) params.month = month;
    if (type) params.type = type;

    const response = await api.get("/courses/NextCourtes", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { getCourses, GetNextCourses };
