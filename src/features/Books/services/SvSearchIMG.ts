import axios from "axios";
import { Covers, IMGsearh } from "../type/SearchIMG";
import api from "../../../Services/AxiosConfig";

const searchImages = async (search: string): Promise<IMGsearh[]> => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${search}`);
    const books = response.data.docs;
    return books.map((book: Covers) => ({
      id: book.key,
      src: {
        small: `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`,
        large: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
      },
      alt: book.title,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

const uploadImage = async (file: File): Promise<string> => {
  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await api.post('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.filePath;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Error uploading image');
    }
  }
  throw new Error('No file provided');
};

export {searchImages, uploadImage}