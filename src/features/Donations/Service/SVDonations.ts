import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { downType } from "../../../Types/GlobalTypes";

const AproveDonation = async (id: number) => {
  try {
    const response = await api.patch(`donation/aproveFriendDonation/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const DenyDonation = async (data: downType) => {
  try {
    const response = await api.patch(
      `donation/denyDonation/${data.Id}`,
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
        "Error al crear el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const ConfirmDonation = async (data: downType) => {
  try {
    const response = await api.patch(
      `donation/confirmDonation/${data.Id}`,
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
        "Error al crear el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al crear el aviso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const GetDonationList = async (
  page: number,
  limit: number,
  category?: string,
  date?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };
    if (category) params.PrincipalCategory = category;
    if (date) params.DateRecolatedDonation = date;
    if (Status) params.Status = Status;
    const response = await api.get("/donation", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { AproveDonation, DenyDonation, ConfirmDonation, GetDonationList };
