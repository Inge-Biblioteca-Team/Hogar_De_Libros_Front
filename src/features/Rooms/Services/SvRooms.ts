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

const ActionRoom = async (roomId: string, action: string) => {
  try {
    const response = await api.patch(`rooms/${action}/${roomId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el estado de la sala:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el estado de la sala"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const PostNewRoom = async (data: CreateRoom) => {
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

const UpdateRoom = async (data: updateRooms) => {
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
        "Error al editar la información de la sala:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message ||
          "Error al editar la información de la sala"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

export { GetRooms, PostNewRoom, UpdateRoom, ActionRoom };
