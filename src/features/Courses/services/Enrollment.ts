import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Enrollment } from "../types/Enroll";

const EnrollToCourse = async (data: Enrollment) => {
  try {
    const addCourse = await api.post(`enrollments/${data.courseId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return addCourse.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al matricularse en el curso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al matricularse en el curso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const getEnrollByCourse = async (CourseId: number, page?: number) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (CourseId) params.courseId = CourseId;
    if (page) params.page = page;
    const response = await api.get("enrollments", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar los cursos:", error);
    throw error;
  }
};

export { EnrollToCourse, getEnrollByCourse };
