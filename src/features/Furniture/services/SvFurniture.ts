import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { downType } from "../../../Types/GlobalTypes";
import { furniture, FurnitureEdit } from "../type/furniture";

const PostNewFurniture = async (furniture: FurnitureEdit) => {
  try {
    const response = await api.post(`/Furniture`, furniture);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el mobiliario:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el mobiliario"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

///paginacion
const GetFurniturePaginated = async (
  page: number,
  limit: number,
  description?: string,
  status?: string,
  code?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };

    if (code) params.LicenseNumber = code;
    if (description) params.Description = description;
    if (status) params.Status = status;

    const response = await api.get("/Furniture", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//edit
const PatchEditFurniture = async (furniture: furniture) => {
  try {
    const response = await api.patch(`furniture/${furniture.Id}`, furniture);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el mobiliario:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el mobiliario"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

//dar de baja

const DownFurniture = async (data: downType) => {
  try {
    const response = await api.patch(`furniture/${data.Id}/${data.reason}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el mobiliario:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el mobiliario"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

///get by id
const GetFurniturebyID = async (Id: string) => {
  try {
    const response = await api.get(`furniture/${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el mobiliario:", error);
    throw error;
  }
};

export {
  PostNewFurniture,
  GetFurniturePaginated,
  DownFurniture,
  PatchEditFurniture,
  GetFurniturebyID,
};
