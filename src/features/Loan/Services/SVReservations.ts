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
const PatchResolveReservation = async (id: number, action: string) => {
  try {
    const response = await api.patch(`room-reservation/${action}/${id}`, {
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
        error.response?.data.message || "Error al actualizar la reserva"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const PatchCancelReservation = async (id: number) => {
  try {
    const response = await api.patch(`room-reservation/Cancel/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al cancelar la reserva:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al actualizar la reserva"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const getReservations = async (
  page: number,
  limit: number,
  reserveStatus?: string,
  date?: string,
  roomId?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (reserveStatus) params.reserveStatus = reserveStatus;
    if (date) params.date = date;
    if (roomId) params.roomId = roomId;
    const response = await api.get("room-reservation", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMyReservations = async (cedula: string) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      userCedula: cedula,
    };
    const response = await api.get("room-reservation/user", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getCoursesList = async () => {
  const response = await api.get("courses/CourseList");
  return response.data;
};
const getEventList = async () => {
  const response = await api.get("events/EventList");
  return response.data;
};
const getQueQueReservations = async (sDate: string) => {
  const response = await api.get("room-reservation/queque", {
    params: {
      date: sDate,
    },
  });
  return response.data;
};

const getRoomsList = async () => {
  const response = await api.get("rooms/table");
  return response.data;
};

const getCountReservations = async (cedula: string) => {
  const response = await api.get(`room-reservation/count/${cedula}`);
  return response.data;
};

export {
  PatchEndReservation,
  NewReservation,
  getReservations,
  getCoursesList,
  getEventList,
  getQueQueReservations,
  getRoomsList,
  PatchResolveReservation,
  getCountReservations,
  getMyReservations,
  PatchCancelReservation,
};
