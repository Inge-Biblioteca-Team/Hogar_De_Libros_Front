import axios from "axios";
import { Covers, IMGsearh } from "../type/SearchIMG";

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

export default searchImages