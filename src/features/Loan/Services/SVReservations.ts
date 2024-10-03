import api from "../../../Services/AxiosConfig";
import { EndReservation, Reservation } from "../Types/RoomsReservations";
import axios from "axios";

const NewReservation = async (data: Reservation) => {
  console.table(data);
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
const PatchEndReservation = async (data: EndReservation) => {
  console.table(data);
  try {
    const response = await api.patch(
      `room-reservation/End/${data.rommReservationId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

const getRequestReservations = async (page: number, limit: number) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    const response = await api.get("room-reservation/Pending", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getCoursesList = async () => {
  const response = await api.get("programs/Actived");
  return response.data;
};
const getEventList = async () => {
  const response = await api.get("programs/Actived");
  return response.data;
};

export {
  PatchEndReservation,
  NewReservation,
  getRequestReservations,
  getCoursesList,
  getEventList,
};
