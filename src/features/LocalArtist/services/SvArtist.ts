import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { createArtist, updateArtist } from "../types/LocalArtist";

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

const createLocalArtist = async (data: createArtist) => {
  try {
    const addArtist = await api.post("local-artist", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return addArtist.data;
  } catch (error) {
    console.error("Error to post Artist:", error);
  }
};

const editArtist = async (id: number, data: updateArtist) => {
  try {
    const response = await api.patch(`local-artist/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing artist:", error);
    throw error;
  }
};

const DownArtist = async (id: number) => {
  try {
    const response = await api.patch(`local-artist/${id}/Down`);
    return response.data;
  } catch (error) {
    console.error("Error to disbale:", error);
    throw error;
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
  getLocalArtist,
  DownArtist,
  createLocalArtist,
  editArtist,
  uploadImage,
};
