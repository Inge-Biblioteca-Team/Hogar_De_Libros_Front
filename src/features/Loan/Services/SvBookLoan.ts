import { ChangeExpiredDate, finishLoan, newloan } from "../Types/BookLoan";
import api from "../../../Services/AxiosConfig";


//Gets
const GetPendandRequest = async (
  page: number,
  limit: number,
  Cedula?:string,
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (Cedula) params.cedula = Cedula
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
  SignaCode?: string,
  Cedula?:string,
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (StartDate) params.StartDate = StartDate;
    if (ExpirationDate) params.LoanExpirationDate = ExpirationDate
    if (SignaCode) params.signatureCode = SignaCode
    if (Cedula) params.cedula = Cedula
    
    const response = await api.get("book-loan/in-progress", { params });
    return response.data;
  } catch (error) {
    console.error("Error al caragar los préstamo en progreso:", error);
    throw error;
  }
};

const GetDoneLoans = async (
  page: number,
  limit: number,
  StartDate?: string,
  EndDate?: string,
  Cedula?:string,
  name?:string,
  SignaCode?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (StartDate && StartDate) params.StartDate = StartDate;
    if (EndDate && StartDate) params.EndDate = EndDate
    if (SignaCode) params.signatureCode = SignaCode
    if (Cedula) params.cedula = Cedula
    if (name) params.name = name

    const response = await api.get("book-loan/completed", { params });
    return response.data;
  } catch (error) {
    console.error("Error al cargar los préstamos finalizados:", error);
    throw error;
  }
};

//Path Status
const CancelRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/finalize`, {
      Observations: "Cancelado por el Usuario",
    });
    return response.data;
  } catch (error) {
    console.error("Error al cancelar el la solicitud de préstamo:", error);
    throw error;
  }
};
const RefuseRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/finalize`, {
      Observations: "Cancelado por administrador",
    });
    return response.data;
  } catch (error) {
    console.error("Error al rechazar la solicitud de préstamo:", error);
    throw error;
  }
};
const AproveRequest = async (LoanID: number) => {
  try {
    const response = await api.patch(`/book-loan/${LoanID}/in-process`);
    return response.data;
  } catch (error) {
    console.error("Error al aprovar la solicitud de préstamo:", error);
    throw error;
  }
};
const FinalizeLoan = async (Loan: finishLoan) => {
  try {
    const response = await api.patch(`/book-loan/${Loan.BookLoanId}/finalize`, {
      Observations: Loan.Observation,
    });
    return response.data;
  } catch (error) {
    console.error("Error al finalizar el préstamo:", error);
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
    console.error("Error al crear la solicitud de préstamo:", error);
    throw error;
  }
};
const PostNewUserLoan = async (Loan: newloan) => {
  console.table(Loan);
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
  console.table(Loan);
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
};
