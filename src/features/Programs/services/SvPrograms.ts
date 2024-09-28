import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { Program } from "../types/Programs";

const GetPrograms = async () => {
  const response = await axios.get(
    "https://668c2a850b61b8d23b0ca034.mockapi.io/Programs"
  );
  return response.data;
};

const PostNewProgram = async (data: Program) => {
  try {
    const response = await api.post("programs", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el programa:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el programa"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const PatchProgram = async (data: Program) => {
  try {
    const response = await api.patch(`programs/${data.programsId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el programa:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el programa"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const GetProgramsList = async (
  page: number,
  limit: number,
  programName?: string,
  status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (programName) params.programName = programName;
    if (status) params.status = status;

    const response = await api.get("programs/All", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const DisableProgram = async (Id: string) => {
  try {
    const response = await api.patch(`programs/${Id}/disable`, {
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

export { GetPrograms, PostNewProgram, GetProgramsList, PatchProgram, DisableProgram };
