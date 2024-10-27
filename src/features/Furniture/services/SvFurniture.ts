import api from "../../../Services/AxiosConfig";
import { FurnitureEdit } from "../type/furniture";

const PostNewFurniture = async (furniture: FurnitureEdit) => {
  try {
    const response = await api.post(`/Furniture`, furniture);
    return response.data;
  } catch (error) {
    console.error("Error to post furniture", error);
    throw error;
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
const PatchEditFurniture = async (
  furniture: FurnitureEdit,
  ObjetiveID: string
) => {
  try {
    const response = await api.patch(`furniture/${ObjetiveID}`, furniture);
    return response.data;
  } catch (error) {
    console.error("Error al editar mobiliario:", error);
    throw error;
  }
};

//dar de baja

const DownFurniture = async (Id: string, acction: string) => {
  try {
    const response = await api.patch(`furniture/${Id}/${acction}`);
    return response.data;
  } catch (error) {
    console.error("Error al dar de baja el mobiliario:", error);
    throw error;
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
