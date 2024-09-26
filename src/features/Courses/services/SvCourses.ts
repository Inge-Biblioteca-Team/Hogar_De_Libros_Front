import axios, { AxiosError } from "axios";
import api from "../../../Services/AxiosConfig";
import { createCourse, updateCourse } from "../types/Courses";

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

const getCourses = async (page: number, limit: number, Name?: string) => {
  try {
    //revisar tipado
    const params: { [key: string]: string | number | undefined } = {
      page: page || 1,
      limit: limit || 10,
    };
    if (Name) params.Name = Name;
    const response = await api.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Error to get courses:", error);
    throw error;
  }
};

const DownCourse = async (courseId: number) => {
  try {
    const response = await api.patch(`courses/${courseId}/disable`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
  }
};

const editCourse = async (courseId: number, data: updateCourse) => {
  try {
    const response = await api.patch(`/courses/${courseId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing course:", error);
    throw error;
  }
};

const CreateCourses = async (data: createCourse) => {
  try {
    const addCourse = await api.post("courses", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return addCourse.data;
  } catch (error) {
    console.log("Error to post Course:", error);
  }
};

const uploadImage = async (file: File): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.filePath;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Error uploading image");
    }
  }
  throw new Error("No file provided");
};

export {
  CreateCourses,
  getCourses,
  GetNextCourses,
  GetUserEnrollment,
  CancelEroll,
  uploadImage,
  editCourse,
  DownCourse,
};
