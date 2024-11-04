import axios, { AxiosError } from "axios";
import api from "../../../Services/AxiosConfig";
import { Courses } from "../types/Courses";

const getCoursesS = async () => {
  const response = await api.get("courses");
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

const CancelEroll = async (data:{courseID: number, userCedula: string}) => {
  try {
    const response = await api.patch(
      `enrollments/cancel?courseId=${data.courseID}&userCedula=${data.userCedula}`
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

const getCourses = async (
  page: number,
  limit: number,
  Name?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (Name) params.courseName = Name;
    if (Status) params.status = Status;
    const response = await api.get("courses", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar los cursos:", error);
    throw error;
  }
};

const DownCourse = async (courseId: number) => {
  try {
    const response = await api.patch(`courses/${courseId}/disable`);
    return response.data;
  } catch (error) {
    console.error("Error no se pudo dar de baja el curso:", error);
    throw error;
  }
};

const editCourse = async (data: Courses) => {
  try {
    const response = await api.patch(`/courses/${data.courseId}`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el curso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el curso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const CreateCourses = async (data: Courses) => {
  console.table(data);
  try {
    const addCourse = await api.post("courses", data);
    return addCourse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el Curso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el Curso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};


const GetUserData = async (NCedula: string) => {
  try {
    const response = await api.get(`user/${NCedula}`);
    return response.data;
  } catch (error) {
    console.log("Usuario no encontrado");
  }
};

const GetProgramsIntoCourses = async () => {
  const response = await api.get("programs/Actived");
  return response.data;
};

export {
  CreateCourses,
  getCourses,
  GetNextCourses,
  GetUserEnrollment,
  CancelEroll,
  editCourse,
  DownCourse,
  getCoursesS,
  GetProgramsIntoCourses,
  GetUserData,
};
