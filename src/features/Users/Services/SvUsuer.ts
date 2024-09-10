import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
  });
  
const GetPendandRequest = async () =>{
    try {
       const response = await api.get( `book-loan/pending`);
       return response.data;
     } catch (error) {
       console.error("Error to post book:", error);
       throw error;
     }
   }

   const GetInProgressLoan = async () =>{
    try {
       const response = await api.get( `book-loan/in-progress`);
       return response.data;
     } catch (error) {
       console.error("Error to post book:", error);
       throw error;
     }
   }

   const GetDoneLoans= async () =>{
    try {
       const response = await api.get( `book-loan/completed`);
       return response.data;
     } catch (error) {
       console.error("Error to post book:", error);
       throw error;
     }
   }

export {GetPendandRequest, GetInProgressLoan, GetDoneLoans}