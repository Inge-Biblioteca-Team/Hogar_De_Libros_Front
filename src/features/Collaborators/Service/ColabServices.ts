import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { downType } from "../../../Types/GlobalTypes";

const GetColabs = async (
  page: number,
  limit: number,
  category?: string,
  subCategory?: string,
  date?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };
    if (category) params.PrincipalCategory = category;
    if (subCategory) params.SubCategory = subCategory;
    if (date) params.DateGenerated = date;
    if (Status) params.Status = Status;
    const response = await api.get("/collaborator", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const RefueseColab = async (data: downType) => {
  console.table(data);
  try {
    const response = await api.patch(
      `collaborator/denyCollaborator/${data.Id}`,
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
        "Error al rechazarla solcititud de colaboración:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al rechazarla solcititud de colaboración"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const CancelColab = async (data: downType) => {
  console.table(data);
  try {
    const response = await api.patch(
      `collaborator/cancelCollaborator/${data.Id}`,
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
        "Error al cancelar la colaboración:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "al cancelar la colaboración"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const AproveColab = async (id: number) => {
  try {
    const response = await api.patch(`collaborator/aproveCollaborator/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "al cancelar la colaboración",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "al cancelar la colaboración"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

export { GetColabs, RefueseColab, AproveColab, CancelColab };
