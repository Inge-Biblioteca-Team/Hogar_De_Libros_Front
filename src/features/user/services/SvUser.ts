import axios from "axios";

const api = axios.create({
    baseURL: `https://66de71d6de4426916ee12042.mockapi.io/user`,
    timeout: 1000,
  });
  
const GetByIdNumber = async (idNumber:string) =>{
    try {
       const response = await api.get( `user/${idNumber}`);
       return response.data;
     } catch (error) {
       console.error("Error to post book:", error);
       throw error;
     }
   }

   export {
    GetByIdNumber
   }