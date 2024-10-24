import axios from "axios";
import { CreateFriends } from "../types/InfoAmiguitos";
import api from "../../../Services/AxiosConfig";

const GetTypesAmiguitos  = async () => {
    try {
      const response = await axios.get(
        `https://668c2a850b61b8d23b0ca034.mockapi.io/Amiguitos`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching:", error);
      throw error;
    }
  };

  const PostNewFriend = async (data: CreateFriends): Promise<any> => {
    console.log("Datos a enviar:", data);
    try {
      
      const addFriend = await api.post("friends", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      
      console.log("Respuesta de la API:", addFriend.data);
      
      
      return addFriend.data;
    } catch (error: unknown) {
      
      if (axios.isAxiosError(error)) {
        console.error(
          "Error al crear la biblioteca de amigos:",
          error.response?.data || error.message
        );
        throw new Error(
          error.response?.data.message || "Error al crear la biblioteca de amigos"
        );
      } else {
        console.error("Error desconocido:", error);
        throw new Error("Error desconocido");
      }
    }
  };
  
 
export {
  GetTypesAmiguitos,
  PostNewFriend,
}