import axios, { AxiosError } from "axios";
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
  type?: string,
  cedula?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (page) params.page = page;
    if (limit) params.limit = limit;
    if (month) params.month = month;
    if (type) params.type = type;
    if (cedula) params.userCedula = cedula;

    const response = await api.get("/courses/NextCourtes", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const GetUserEnrollment = async (
  page?: number,
  limit?: number,
  cedula?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (page) params.page = page;
    if (limit) params.limit = limit;
    if (cedula) params.userCedula = cedula;

    const response = await api.get("courses/User_Courses", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

const CancelEroll = async (courseID: number, userCedula: string) => {
  try {
    const response = await api.patch(
      `enrollments/cancel?courseId=${courseID}&userCedula=${userCedula}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        throw new Error(axiosError.response.data.message);
      }
    }
    throw new Error("Error desconocido al cancelar la matrícula");
  }
};
export { getCourses, GetNextCourses, GetUserEnrollment, CancelEroll };
