import { ChangeExpiredDate, finishLoan, newloan } from "../Types/BookLoan";
import api from "../../../Services/AxiosConfig";
import axios from "axios";
import {ExtendBookLeading } from "../../Books/Types/BooksTypes";

//Gets
const GetPendandRequest = async (
  page: number,
  limit: number,
  Cedula?: string,
  type?:string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (Cedula) params.cedula = Cedula;
    if (type) params.type = type
    const response = await api.get("book-loan/pending", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar las solicitudes pendientes:", error);
    throw error;
  }
};

const GetInProgressLoan = async (
  page: number,
  limit: number,
  StartDate?: string,
  ExpirationDate?: string,
  Cedula?: string,
  type?:string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (StartDate) params.StartDate = StartDate;
    if (ExpirationDate) params.LoanExpirationDate = ExpirationDate;
    if (Cedula) params.cedula = Cedula;
    if (type) params.type = type

    const response = await api.get("book-loan/in-progress", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar los préstamo en progreso:", error);
    throw error;
  }
};

const GetDoneLoans = async (
  page: number,
  limit: number,
  StartDate?: string,
  EndDate?: string,
  Cedula?: string,
  name?: string,
  type?:string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (StartDate) params.StartDate = StartDate;
    if (EndDate) params.EndDate = EndDate;
    if (Cedula) params.cedula = Cedula;
    if (name) params.name = name;
    if (type) params.type = type

    const response = await api.get("book-loan/completed", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar los préstamos finalizados:", error);
    throw error;
  }
};

//Path Status
const CancelRequest = async (data:finishLoan) => {
  try {
    const response = await api.patch(`/book-loan/cancel`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al cancelar la solicitud:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al cancelar la solicitud"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const RefuseRequest = async (Loan: finishLoan) => {
  try {
    const response = await api.patch(`/book-loan/Refute`, Loan);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al rechazar:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al rechazar el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const AproveRequest = async (Loan: finishLoan) => {
  try {
    const response = await api.patch(`/book-loan/Approve`, Loan);
    return response.data;
  } catch (error) {
    console.error("Error al aprobar la solicitud de préstamo:", error);
    throw error;
  }
};

const FinalizeLoan = async (Loan: finishLoan) => {
  try {
    const response = await api.patch(`/book-loan/finalize`, Loan);
    return response.data;
  } catch (error) {
    console.error("Error al finalizar el préstamo:", error);
    throw error;
  }
};

const LeadingRequestBookExtended = async (data: ExtendBookLeading) => {
  try {
    const response = await api.post(`book-loan/extend/${data.BookLoanId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el aviso:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "Error al prestar el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
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
    console.error("Error al crear la solicitud de préstamo:", error);
    throw error;
  }
};
const PostNewUserLoan = async (Loan: newloan) => {
  try {
    const response = await api.post(`/book-loan`, Loan);
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error al crear la solicitud de préstamo:", error);
    throw error;
  }
};
const PatchLoan = async (Loan: ChangeExpiredDate) => {
  try {
    const response = await api.patch(`/book-loan/${Loan.BookLoanId}`, Loan);
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error al editar el préstamo:", error);
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
  PatchLoan,
  LeadingRequestBookExtended
};
