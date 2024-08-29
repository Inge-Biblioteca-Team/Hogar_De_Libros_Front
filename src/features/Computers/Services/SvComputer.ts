import axios from "axios";
import { ComputerTest, EquipmentEdit } from "../types/Computer";

const GetComputers = async (page: number, limit:number) => {
  const BASE_URL= `https://66c8eadc8a477f50dc2f948a.mockapi.io/ComputerEqupament`;
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Fail to fetch computer equipament:", error);
    throw error;
  }
}

const api = axios.create({
  baseURL: `http://localhost:3000`,
  timeout: 1000,
});
//Agregar computadora
const PostNewComputer = async (computer:ComputerTest)=>{
  try {
    console.table(computer)
    const response = await api.post(`/computers`, computer);
    return response.data;
  } catch (error) {
    console.error('Error to post book:', error);
    throw error;
  }
 }

 
 //paginacion
 const GetComputerPaginated =  async( page?:number, limit?:number, MNumber?: string)=>{
  try{

    const params: { [key: string]: string | number | undefined } = {
    
    };

    if (page) params.Page = page;
    if (limit) params.Limit = limit;
    if (MNumber) params. MachineNumber = MNumber;
   
    const response = await api.get("/computers", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

 //Put Edit info

 const PutEditEquipment = async (Equipment:EquipmentEdit , ObjetiveID:string) => {
  try {
    const response = await api.patch(`computers/${ObjetiveID}`, Equipment);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};


 //Patch disabke computer

 const DownEquipment = async (Code:string) =>{
  try {
     const response = await api.patch( `computers/${Code}/disable`);
     return response.data;
   } catch (error) {
     console.error("Error to post book:", error);
     throw error;
   }
 }
 
  
  export {GetComputers, PostNewComputer, GetComputerPaginated, PutEditEquipment, DownEquipment, api}