import axios from "axios";
import { finishLoan } from "../Types/BookLoan";


const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

  const FinalizeLoan = async (Loan: finishLoan) => {
    try {
      const response = await api.patch(
        `/book-loan/${Loan.BookLoanId}/finalize`,
        Loan
      );
      return response.data;
    } catch (error) {
      console.error("Error to post book:", error);
      throw error;
    }
  };

  export {
    FinalizeLoan
  }