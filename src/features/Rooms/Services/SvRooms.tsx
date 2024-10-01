import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { CreateRoom, updateRooms } from "../Types/Room_Interface";

// Funcion para obtener las salas mediante el fetch de la API
const GetRooms = async () =>{
    const response = await axios.get(
        "https://668c2a850b61b8d23b0ca034.mockapi.io/Rooms"
      );
      return response.data;
}

const ADDINGROOMS = async (data: CreateRoom) => {
  console.table(data)
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
      throw new Error(
        error.response?.data.message || "Error al crear la sala"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const EDITINGROOMS = async ( data: updateRooms) => {
  try {
    const response = await api.put(`/rooms/${data.roomId}`, data, {
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



export {GetRooms, ADDINGROOMS, EDITINGROOMS}