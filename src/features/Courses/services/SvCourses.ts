import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { createCourse, updateCourse } from "../types/Courses";

const getCourses = async (
  page: number,
  limit: number,
  Name?: string,
) => {
  try { //revisar tipado
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



export { getCourses, DownCourse, editCourse, uploadImage, CreateCourses };