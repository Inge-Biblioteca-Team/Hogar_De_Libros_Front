import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { createEvents, updateEvent } from "../types/Events";

const getEvents = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Events"
  );
  return response.data;
};

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

    console.log("Params enviados a la API:", params);

    const response = await api.get("/Events", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const PostNewEvent = async (data: createEvents) => {
  console.log("Datos a enviar:", data);
  try {
    const addEvent = await api.post("events", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Respuesta de la API:", addEvent.data);
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

const editEvent = async (eventId: number, eventData: updateEvent) => {
  try {
    const response = await api.put(`/events?id=${eventId}`, eventData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing event:", error);
    throw error;
  }
};

const uploadEventImage = async (file: File): Promise<string> => {
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
      console.error("Error uploading event image:", error);
      throw new Error("Error uploading event image");
    }
  }
  throw new Error("No file provided");
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
    const response = await api.patch(`events/CancelEvent?id=${Id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al deshabilitar el programa:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al deshabilitar el programa"
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
  uploadEventImage,
  getEvents,
  GetNextEvents,
  cancelEvent,
};
