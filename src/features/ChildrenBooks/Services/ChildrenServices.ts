import axios from "axios";
import {
  CoverImage,
  GoogleBook,
  GoogleBooksResponse,
  OpenLibraryBook,
  OpenLibraryResponse,
} from "../Types/Types";
import api from "../../../Services/AxiosConfig";
import { BookC } from "../Types/BooksChildrensTypes";
import { downType } from "../../../Types/GlobalTypes";
import { BookLeading } from "../../Books/Types/BooksTypes";

const searchCovers = async (
  bookName: string
): Promise<{ id: string; imageLink: string | undefined }[]> => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
  const GOOGLE_BOOKS_URL = import.meta.env.VITE_GOOGLE_BOOKS_URL || "";
  const OPEN_LIBRARY_URL = import.meta.env.VITE_OPEN_LIBRARY_URL;
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
      throw new Error("No se encontraron las caratulas en Open Library");
    }
  } catch (error) {
    console.warn("Open Library error:", error);

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
      console.warn("Google Books error:", error);
      return [];
    }
  }
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
    if (year) params.Year = year;
    if (status) params.Status = status;
    if (Signa) params.SignatureCode = Signa;
    if (category) params.ShelfCategory = category;
    const response = await api.get("book-children", { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const CreateChildrenBook = async (data: BookC) => {
  try {
    const response = await api.post(`book-children`, data, {
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

const DisableChildrenBook = async (data: downType) => {
  try {
    const response = await api.patch(`book-children/${data.Id}/disable`, {
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
const EditChildrenBook = async (data: BookC) => {
  try {
    const response = await api.patch(`book-children/${data.BookCode}`, data, {
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

const LeadingAdminRequestBookChildren = async (data: BookLeading) => {
  try {
    const response = await api.post(`book-loan/AdminLoan/children`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al prestar el recurso",
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

const LeadingRequestBookChildren = async (data: BookLeading) => {
  try {
    const response = await api.post(`book-loan/children`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al prestar el recurso",
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
  LeadingAdminRequestBookChildren,
  LeadingRequestBookChildren,
  searchCovers,
  EditChildrenBook,
  DisableChildrenBook,
  CreateChildrenBook,
  getColection,
};
