import axios from "axios";
import { Reservation } from "../Types/RoomType";
import api from "../../../Services/AxiosConfig";

// Funcion para obtener las salas mediante el fetch de la API
const GetRooms = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Rooms"
  );
  return response.data;
};
const NewReservation = async (data: Reservation) => {
  console.table(data)
  try {
    const response = await api.post("room-reservation", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al solicitar la reserva:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al solicitar la reserva"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

export { GetRooms, NewReservation };
