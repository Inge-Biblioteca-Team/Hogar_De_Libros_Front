import { useQuery } from "react-query";
import { Computer } from "../types/Computer";
import { api } from "../Services/SvComputer";
  
const fetchComputer = async (id: string): Promise<Computer> => {
    const response = await api.get(`/computers/${id}`);
    return response.data;
  };
  
  const useFetchComputer = (id: string) => {
    return useQuery(['computer', id], () => fetchComputer(id), {
      enabled: !!id, 
    });
  };
  
  export default useFetchComputer;