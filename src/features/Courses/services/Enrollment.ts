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

const saveEnrollList = async (courseId: number) => {
  try {
    const response = await api.post(
      `enrollments/Save-List/${courseId}`,
      {},
      { responseType: "blob" }
    );

    const contentDisposition = response.headers["content-disposition"];
    const fileNameMatch = contentDisposition?.match(/filename="(.+)"/);
    const fileName = fileNameMatch
      ? fileNameMatch[1]
      : `Lista_Matricula_Curso_${courseId}.pdf`;

    downloadFile(response.data, fileName);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data;

      if (errorMessage instanceof Blob) {
        const errorText = await errorMessage.text();
        const errorJson = JSON.parse(errorText);
        throw new Error(errorJson.message || "Error al generar la lista");
      } else {
        const message =
          errorMessage?.message || "Error desconocido al procesar la lista";
        throw new Error(message);
      }
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const downloadFile = (data: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

export { EnrollToCourse, getEnrollByCourse, saveEnrollList };
