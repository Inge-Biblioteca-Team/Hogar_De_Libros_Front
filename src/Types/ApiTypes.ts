
export type ApiError = {
    message: string;
    error: string;
    statusCode: number;
  }
  

  export interface data {
    message: string;
    error: string;
    statusCode: number;
  }
  export interface response {
    data: data;
  }
  export interface QueryError {
    response: response;
    message: string;
  }