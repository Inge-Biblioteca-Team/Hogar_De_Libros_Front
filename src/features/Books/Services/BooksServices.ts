import axios from "axios";
import {
  CoverImage,
  GoogleBook,
  GoogleBooksResponse,
  OpenLibraryBook,
  OpenLibraryResponse,
} from "../Types/Types";
import api from "../../../Services/AxiosConfig";
import { Book, BookLeading } from "../Types/BooksTypes";
import { downType } from "../../../Types/GlobalTypes";

const GetBooks = async () => {
  try {
    const response = await api.get("books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

const searchCovers = async (
  bookName: string
): Promise<{ id: string; imageLink: string | undefined }[]> => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
  const GOOGLE_BOOKS_URL = import.meta.env.VITE_GOOGLE_BOOKS_URL || "";
  const OPEN_LIBRARY_URL = import.meta.env.VITE_OPEN_LIBRARY_URL;
  console.log(OPEN_LIBRARY_URL);
  const covers: CoverImage[] = [];

  try {
    const response = await axios.get<OpenLibraryResponse>(
      `${OPEN_LIBRARY_URL}${encodeURIComponent(bookName)}`,
      {
        timeout: 5000,
      }
    );
    const books: OpenLibraryBook[] = response.data.docs;

    books.forEach((book) => {
      if (book.cover_i) {
        covers.push({
          id: book.key,
          imageLink: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
        });
      }
    });
    if (covers.length > 0) {
      return covers;
    } else {
      throw new Error("Las caratulas no fuercon econtradas en Open Library");
    }
  } catch (error) {
    console.error("Open Library error:", error);

    try {
      const response = await axios.get<GoogleBooksResponse>(
        `${GOOGLE_BOOKS_URL}${encodeURIComponent(
          bookName
        )}&key=${GOOGLE_API_KEY}`
      );
      const books: GoogleBook[] = response.data.items;

      books.forEach((item) => {
        if (item.volumeInfo.imageLinks) {
          covers.push({
            id: item.id,
            imageLink: item.volumeInfo.imageLinks.thumbnail,
          });
        }
      });

      return covers;
    } catch (error) {
      console.error("Google Books error:", error);
      return [];
    }
  }
};

const uploadImage = async (file: File): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await api.post("/files/upload/book-", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.filePath;
    } catch (error) {
      console.error("Error al subir imagen:", error);
      throw new Error("Error al subir imagen");
    }
  }
  throw new Error("Los archivos no fuero provisionados");
};

const getColection = async (
  page: number,
  limit: number,
  title?: string,
  author?: string,
  year?: string,
  status?: string,
  Signa?: string,
  category?: string
) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    if (title) params.Title = title;
    if (author) params.Author = author;
    if (year) params.PublishedYear = year;
    if (status) params.Status = status;
    if (Signa) params.signatureCode = Signa;
    if (category) params.ShelfCategory = category;
    const response = await api.get("books", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const CreateBook = async (data: Book) => {
  console.table(data);
  try {
    const response = await api.post(`books`, data, {
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
        error.response?.data.message || "Error al crear el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const DisableBook = async (data: downType) => {
  try {
    const response = await api.patch(`books/${data.Id}/disable`, {
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
        error.response?.data.message || "Error al deshabilitar el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};
const EditBook = async (data: Book) => {
  try {
    const response = await api.patch(`books/${data.BookCode}`, data, {
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
        error.response?.data.message || "Error al editar el recurso"
      );
    } else {
      console.error("Error desconocido:", error);
      throw new Error("Error desconocido");
    }
  }
};

const LeadingRequestBook = async (data: BookLeading) => {
  console.table(data);
  try {
    const response = await api.post(`book-loan`, data, {
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

export {
  LeadingRequestBook,
  searchCovers,
  uploadImage,
  EditBook,
  DisableBook,
  CreateBook,
  getColection,
  GetBooks
};
