import axios from "axios";
import { Computer } from "../types/Computer";

const api = axios.create({
  baseURL: `https://66c8eadc8a477f50dc2f948a.mockapi.io/ComputerEqupament`,
  timeout: 1000,
});
const GetComputers = async (page: number, limit:number) => {
  const BASE_URL= `https://66c8eadc8a477f50dc2f948a.mockapi.io/ComputerEqupament`;
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Fail to fetch computer equipament:", error);
    throw error;
  };
}

//Agregar computadora
const PostNewComputer = async (computer:Computer)=>{
  try {
    const response = await api.post(``, computer);
    return response.data;
  } catch (error) {
    console.error('Error to post book:', error);
    throw error;
  }
 }
 
 //paginacion
 const GetComputerPaginated =  async( page:number, limint:number)=>{
  try{
    const response = await api.get(``,{
      params:{
        page:page,
        limint:limint,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error to post book:', error);
    throw error;
  }
 }

  
  export {GetComputers, PostNewComputer, GetComputerPaginated}