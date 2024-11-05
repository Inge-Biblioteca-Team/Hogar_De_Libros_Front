import axios from "axios";
import { Advice } from "../Types/Advice";
import api from "../../../Services/AxiosConfig";

const CreateAdvice = async (data: Advice) => {
  try {
    const response = await api.post(`advices`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const PatchAdvice = async (data: Advice) => {
  try {
    const response = await api.patch(`advices/${data.id_Advice}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const DeleteAdvice = async (id: number) => {
  try {
    const response = await api.delete(`advices/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al borrar el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const GetAdviceList = async (
  page: number,
  limit: number,
  reason?: string,
  category?: string,
  date?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (date) params.date = date;
    if (reason) params.reason = reason;
    if (category) params.category = category;
    const response = await api.get("advices", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const GetAdvice = async (
  page: number,
  limit: number,
  reason?: string,
  category?: string,
  date?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (date) params.date = date;
    if (reason) params.reason = reason;
    if (category) params.category = category;
    const response = await api.get("advices/List", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const uploadAdviceImage = async (file: File): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await api.post("/files/upload/Advice", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.filePath;
    } catch (error) {
      console.error("Error al subir imagen:", error);
      throw new Error("Error al subir imagen");
    }
  }
  throw new Error("N}ingun archivo fue dado");
};

export {
  CreateAdvice,
  PatchAdvice,
  DeleteAdvice,
  GetAdviceList,
  uploadAdviceImage,
  GetAdvice
};
