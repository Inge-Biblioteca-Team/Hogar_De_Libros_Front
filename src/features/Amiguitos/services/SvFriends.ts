import axios from "axios";
import api from "../../../Services/AxiosConfig";
import { downType } from "../../../Types/GlobalTypes";
import { Friend } from "../types/FriendType";

const AproveFriend = async (id: number) => {
  try {
    const response = await api.patch(
      `friends-library/aproveFriendLibrary/${id}`,
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
const EditFriend = async (data: Friend) => {
  try {
    const response = await api.patch(
      `friends-library/Edit-Friend/${data.FriendId}`, data,
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
const RefuseFriend = async (data: downType) => {
  try {
    const response = await api.patch(
      `friends-library/denyFriendLibrary/${data.Id}`,
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
const DownFriend = async (data: downType) => {
  try {
    const response = await api.patch(
      `friends-library/downFriendLibrary/${data.Id}`,
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

const GetFriends = async (
  page: number,
  limit: number,
  category?: string,
  subCategory?: string,
  Experience?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page: page,
      limit: limit,
    };
    if (category) params.PrincipalCategory = category;
    if (subCategory) params.SubCategory = subCategory;
    if (Experience) params.Experience = Experience;
    if (Status) params.Status = Status;
    const response = await api.get("friends-library", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { RefuseFriend, AproveFriend, GetFriends, DownFriend, EditFriend };
