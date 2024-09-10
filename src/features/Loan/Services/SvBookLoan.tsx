import axios from "axios";
import { finishLoan, newloan } from "../Types/BookLoan";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

//Gets
const GetPendandRequest = async () => {
  try {
    const response = await api.get(`book-loan/pending`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

const GetInProgressLoan = async () => {
  try {
    const response = await api.get(`book-loan/in-progress`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

const GetDoneLoans = async () => {
  try {
    const response = await api.get(`book-loan/completed`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

//Path Status
const CancelRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/reject`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
const AproveRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/in-process`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
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

//POSST
const PostNewLoan = async (Loan: newloan) => {
  try {
    const response = await api.post(`/book-loan`, Loan);
    response.data;
    const loan = response.data;
    const { BookLoanId } = loan;
    if (BookLoanId) {
      await api.patch(`/book-loan/${BookLoanId}/in-process`);
    }
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

export {
  GetPendandRequest,
  GetInProgressLoan,
  GetDoneLoans,
  CancelRequest,
  AproveRequest,
  PostNewLoan,
  FinalizeLoan,
};
