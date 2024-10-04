import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { CreateRoom, updateRooms } from "../Types/Room_Interface";

const GetRooms = async (
  page: number,
  limit: number,
  status?: string,
  roomNumber?: string,
  name?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };

    if (status) params.status = status;
    if (roomNumber) params.roomNumber = roomNumber;
    if (name) params.name = name;

    const response = await api.get("/Rooms", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const ActionRoom = async (roomId: number, action: string) => {
  try {
    const response = await api.patch(`rooms/${action}/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error closing room:", error);
    throw error;
  }
};

const ADDINGROOMS = async (data: CreateRoom) => {
  console.table(data);
  try {
    const addRoom = await api.post("rooms", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return addRoom.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear la sala:",
        error.response?.data || error.message
      );
      throw new Error(error.response?.data.message || "Error al crear la sala");
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const EDITINGROOMS = async (data: updateRooms) => {
  try {
    const response = await api.patch(`/rooms/${data.roomId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al añadir la sala:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al añadir la sala"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const uploadImages = async (files: File[]): Promise<string[]> => {
  if (files.length > 0) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("image", file);
    });

    try {
      const response = await api.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.filePaths;
    } catch (error) {
      console.error("Error uploading images:", error);
      throw new Error("Error uploading images");
    }
  }
  throw new Error("No files provided");
};

export { GetRooms, ADDINGROOMS, EDITINGROOMS, uploadImages, ActionRoom };
