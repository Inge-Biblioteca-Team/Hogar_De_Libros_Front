import api from "../../../Services/AxiosConfig";
import { FurnitureEdit } from "../type/furniture";


  const PostNewFurniture = async (furniture:FurnitureEdit) =>{
    try{
        console.table(furniture);
        const response = await api.post(`/Furniture`, furniture);
        return response.data;
    } catch (error){
        console.error("Error to post furniture", error);
        throw error;
    }
  }

  ///paginacion
  const GetFurniturePaginated = async (
    page: number,
    limit: number,
    description?: string,
    location?: string,
    inchargeperson?: string,
    status?: string
  ) => {
    try {
      const params: { [key: string]: string | number | undefined } = {
        Page: page,
        Limit: limit,
      };
  
      if (description) params.description = description;
      if (location) params.location = location;
      if (inchargeperson) params.inchargeperson = inchargeperson;
      if (status) params.Status = status;
  
      const response = await api.get("/Furniture", { params });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //edit
  const PatchEditFurniture = async (
    furniture: FurnitureEdit, 
    ObjetiveID: string
  ) => {
    try {
      const response = await api.patch(`furniture/${ObjetiveID}`, furniture); 
      return response.data;
    } catch (error) {
      console.error("Error al editar mobiliario:", error); 
      throw error;
    }
  };

  //dar de baja 
  
const DownFurniture = async (Id: string) => {
    try {
      const response = await api.patch(`Furniture/${Id}`);
      return response.data;
    } catch (error) {
      console.error("Error to post book:", error);
      throw error;
    }
  };
  
  ///get by id
  const GetFurniturebyID = async (Id:string) => {
    try {
      const response = await api.get(`furniture/${Id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el mobiliario:", error);
      throw error;
    }
  };

  export {
    PostNewFurniture,
    GetFurniturePaginated,
    DownFurniture,
    PatchEditFurniture,
    GetFurniturebyID
  }