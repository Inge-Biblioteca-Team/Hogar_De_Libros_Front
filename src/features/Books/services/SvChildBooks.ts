import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

const GetChildrenBPaginated = async (
  page: number,
  limit: number,
  Title?: string,
  Author?: string,
  ISBN?: string,
  SignatureCode?: string,
  Status?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (Title) params.Title = Title;
    if (Author) params.Author = Author;
    if (ISBN) params.ISBN = ISBN;
    if (SignatureCode) params.SignatureCode = SignatureCode;
    if (Status) params.Status = Status;

    const response = await api.get("/book-children", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const GetChildrenBSearch = async (
  page: number,
  limit: number,
  Title?: string,
  Author?: string,
  ISBN?: string,
  PublishedYear?: string,
  Editorial?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (Title) params.Title = Title;
    if (Author) params.Author = Author;
    if (ISBN) params.ISBN = ISBN;
    if (PublishedYear) params.PublishedYear = PublishedYear;
    if (Editorial) params.Editorial = Editorial;
    params.Status = 1;

    const response = await api.get("/book-children", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const GetChildrenBCategory = async (
  page: number,
  limit: number,
  Title?: string,
  Category?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };

    if (Title) params.Title = Title;
    if (Category) params.ShelfCategory = Category;
    params.Status = 1;
    const response = await api.get("/book-children", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const GetChildrenBByBookCode = async (BookCode: string) => {
  try {
    const response = await api.get(`book-children/${BookCode}`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

export {
  GetChildrenBByBookCode,
  GetChildrenBPaginated,
  GetChildrenBSearch,
  GetChildrenBCategory,
};
