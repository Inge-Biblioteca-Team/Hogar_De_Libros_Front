import axios from "axios";
import { EquipmentEdit } from "../types/Computer";

const api = axios.create({
  baseURL: `http://localhost:3000`,
  timeout: 1000,
});

//Agregar computadora
const PostNewComputer = async (computer:EquipmentEdit) => {
  try {
    console.table(computer);
    const response = await api.post(`/computers`, computer);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
//paginacion
const GetComputerPaginated = async (
  page: number,
  limit: number,
  MNumber?: string,
  EquipamentBrand?: string,
  EquipamentCategory?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      Page: page,
      Limit: limit,
    };

    if (MNumber) params.MachineNumber = MNumber;
    if (EquipamentBrand) params.EquipmentBrand = EquipamentBrand;
    if (EquipamentCategory) params.EquipmentCategory = EquipamentCategory;
    if (Status) params.Status = Status;

    const response = await api.get("/computers", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//Get One

const GetByUniqueCode = async (UniqueCode:string) =>{
  try {
     const response = await api.get( `computers/${UniqueCode}`);
     return response.data;
   } catch (error) {
     console.error("Error to post book:", error);
     throw error;
   }
 }

//Put Edit info
const PutEditEquipment = async (
  Equipment: EquipmentEdit,
  ObjetiveID: string
) => {
  try {
    const response = await api.put(`computers/${ObjetiveID}`, Equipment);
    return response.data;
  } catch (error) {
    console.error("Error editing equipment:", error);
    throw error;
  }
}
//Patch disable computer

const DownEquipment = async (Code: string) => {
  try {
    const response = await api.patch(`computers/${Code}`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

export {
  PostNewComputer,
  GetComputerPaginated,
  PutEditEquipment,
  DownEquipment,
  GetByUniqueCode
};
