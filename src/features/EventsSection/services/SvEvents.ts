import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Events } from "../types/Events";

const GetEvents = async (
  page: number,
  limit: number,
  title?: string,
  status?: string,
  location?: string,
  inchargeperson?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      Page: page,
      Limit: limit,
    };

    if (title) params.Title = title;
    if (location) params.Location = location;
    if (inchargeperson) params.Inchargeperson = inchargeperson;
    if (status) params.Status = status;

    const response = await api.get("/Events", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const PostNewEvent = async (data: Events) => {
  try {
    const addEvent = await api.post("events", data);
    return addEvent.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el evento:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el evento"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const editEvent = async (data: Events) => {
  try {
    const response = await api.put(`/events`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al editar el evento:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al editar el evento"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const GetNextEvents = async (month?: string, type?: string) => {
  try {
    const params: { [key: string]: string | number | undefined } = {};
    if (month) params.month = month;
    if (type) params.category = type;

    const response = await api.get("/events/NextEvents", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const cancelEvent = async (Id: number) => {
  try {
    const response = await api.patch(`events/Cancel/${Id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al cancelar el evento:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al cancelar el evento"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

export {
  GetEvents,
  PostNewEvent,
  editEvent,
  GetNextEvents,
  cancelEvent,
};
