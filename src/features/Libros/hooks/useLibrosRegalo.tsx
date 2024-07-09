import { useQuery } from "react-query";
import { fetchLibrosRegalo } from "../services/SvLibros";
import { useCallback } from "react";
import CardLibro from "../components/CardLibro";
import { Libro } from "../type/Libro";

const useLibrosRegalo = () => {
  const { data: Libros, error, isLoading } = useQuery("libros", fetchLibrosRegalo);

  const LibrosXRegalo = useCallback(() => {
    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error</span>;
    return Libros.map((libro: Libro) => (
      <figure key={libro.id} className="rounded-md w-1/4 pt-7 ">
        <CardLibro cover={libro.cover} name={libro.title} />
      </figure>
    ));
  }, [Libros, isLoading, error]);

  return {
    LibrosXRegalo,
    isLoading,
    error,
  };
};

export { useLibrosRegalo };
