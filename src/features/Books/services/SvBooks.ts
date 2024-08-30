import axios from "axios";
import { Book, EditBook } from "../type/Book";

const GetPopularBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Libros"
  );
  return response.data;
};

const GetFreeBooks = async () => {
  const response = await axios.get(
    "https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/LibrosFree"
  );
  return response.data;
};

const GetBooks = async () => {
  try {
    const response = await axios.get(
      `https://668c2a850b61b8d23b0ca034.mockapi.io/Books`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
const GetNier = async (id: string) => {
  try {
    const response = await axios.get(
      `https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
const GetBookById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://668c2a850b61b8d23b0ca034.mockapi.io/Books/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
const GetAllBooks = async (page: number, limit: number) => {
  const BASE_URL = "https://668c2a850b61b8d23b0ca034.mockapi.io/Books";
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Fetch Finales
// Api cuando esten los usuarios se le suman los headers y se cambia el url base
const api = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test",
  timeout: 1000,
});

//Get por paginacion con parametros opcionales
const GetBookPaginated = async (
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

    const response = await api.get("/books", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//Get por paginacion con parametros opcionales
const GetBookByTtit_Category = async (
  page: number,
  limit: number,
  Title?: string,
  Category?: string,
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit
    };

    if (Title) params.Title = Title;
    if(Category) params.ShelfCategory = Category
    params.Status = 1
    const response = await api.get("/books", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


//Añadir nuevo libro(Post)
const PostNewBook = async (book: Book) => {
  try {
    const response = await api.post("/books", book);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};
const PatchEditBook = async (book: EditBook, BookCode:string) => {
  try {
    const response = await api.patch(`books/${BookCode}`, book);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
};

// dar de baja al libro
const PatchStatus = async (BookCode:string) =>{
 try {
    const response = await api.patch( `books/${BookCode}/disable`);
    return response.data;
  } catch (error) {
    console.error("Error to post book:", error);
    throw error;
  }
}

const GetByBookCode = async (BookCode:string) =>{
  try {
     const response = await api.get( `books/${BookCode}`);
     return response.data;
   } catch (error) {
     console.error("Error to post book:", error);
     throw error;
   }
 }

// Patch(Edicion de infomracion del libro)

export {
  GetPopularBooks,
  GetFreeBooks,
  GetBooks,
  GetAllBooks,
  GetBookById,
  GetNier,
  GetBookPaginated,
  PostNewBook,
  PatchStatus,
  GetByBookCode,
  PatchEditBook,
  GetBookByTtit_Category
};
