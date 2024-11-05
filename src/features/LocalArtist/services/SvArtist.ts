import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Artist } from "../types/LocalArtist";

const getLocalArtist = async (
  page: number,
  limit: number,
  Name?: string,
  Type?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (Name) params.Name = Name;
    if (Type) params.ArtisProfession = Type;
    if (Status) params.Actived = Status;

    const response = await api.get("/local-artist", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createLocalArtist = async (data: Artist) => {
  try {
    const addArtist = await api.post("local-artist", data);
    return addArtist.status;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el artista:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al procesar la solicitud"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const editArtist = async (data: Artist) => {
  try {
    const response = await api.patch(`local-artist/${data.ID}`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el artista:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al procesar la solicitud"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const DownArtist = async (id: number) => {
  try {
    const response = await api.patch(`local-artist/${id}/Down`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el artista:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al procesar la solicitud"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

export {
  getLocalArtist,
  DownArtist,
  createLocalArtist,
  editArtist
};
