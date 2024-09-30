import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Enrollment } from "../types/Enroll";

const EnrollToCourse = async (data: Enrollment) => {
    try {
      const addCourse = await api.post(`enrollments/${data.courseId}`,data,{
        headers: {
          "Content-Type": "application/json",
        },
      });
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

export {EnrollToCourse}
  