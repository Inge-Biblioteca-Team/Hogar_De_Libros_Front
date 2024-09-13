import axios from "axios";
import { ChangeExpiredDate, finishLoan, newloan } from "../Types/BookLoan";


const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

//Gets
const GetPendandRequest = async (page: number, limit: number) => {
  try {
    const response = await api.get(`book-loan/pending`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get pending requests:", error);
    throw error;
  }
};
const GetInProgressLoan = async (page: number, limit: number) => {
  try {
    const response = await api.get(`book-loan/in-progress`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
    throw error;
  }
};

const GetDoneLoans = async (page: number, limit: number) => {
  try {
    const response = await api.get(`book-loan/completed`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error to get requests:", error);
    throw error;
  }
};


//Path Status
const CancelRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/finalize`,{
      Observations: "Cancelado por el Usuario"
    });
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
const RefuseRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/finalize`,{
      Observations: "Cancelado por administrador"
    });
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
      { Observations: Loan.Observation } 
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
const PostNewUserLoan = async (Loan: newloan) => {
  console.table(Loan)
  try {
    const response = await api.post(`/book-loan`, Loan);
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
const PatchLoan = async (Loan:ChangeExpiredDate) => {
  console.table(Loan)
  try {
    const response = await api.patch(`/book-loan/${Loan.BookLoanId}`, Loan);
    response.data;
    return response.data;
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
  RefuseRequest,
  PostNewUserLoan,
  PatchLoan
};
