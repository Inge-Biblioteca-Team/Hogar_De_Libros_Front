import { useQuery } from "react-query";
import { fetchLibrosRelevantes } from "../services/SvLibros";
import { useCallback } from "react";
import CardLibro from "../components/CardLibro";
import { Libro } from "../type/Libro";
import BotonReserva from "../../../components/BotonReserva";

const useLibrosRelevantes = () => {
  const {
    data: Libros,
    error,
    isLoading,
  } = useQuery("libros", fetchLibrosRelevantes);

  const LibrosRelevantes = useCallback(() => {
    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error</span>;
    return Libros.map((libro: Libro) => (
      <figure key={libro.id} className="rounded-md w-1/4 pt-7">
        <CardLibro cover={libro.cover} name={libro.title}/>
        <BotonReserva id={libro.id} />
      </figure>
    ));
  }, [Libros, isLoading, error]);

  return {
    LibrosRelevantes,
    isLoading,
    error,
  };
};

export { useLibrosRelevantes };
