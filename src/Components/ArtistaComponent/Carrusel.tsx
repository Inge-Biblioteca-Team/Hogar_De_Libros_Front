import { useEffect, useState } from "react";
import UseGetAllArtists from "../../hooks/Artistas/UseGetAllArtistas";
import { Artista } from "../../types/Artista";
import CardFlipp from "./CardComponent/CardFlip";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


function Card_Container_Artistas() {
  const { artists, getArtistaData } = UseGetAllArtists();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
//paginacion
  const handleNext = () => {
    if (currentIndex < (artists?.length || 0) - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };
//paginacion
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
///optione datos
  useEffect(() => {
    getArtistaData();
  }, [getArtistaData]);

  if (!artists) return <p>Cargando.....</p>; 
  if (artists.length === 0) return <p>No se encontraron artistas</p>; 

  ///renderiza se usaron iconos de react
  return (
    <>
      <section className="mt-8 flex flex-col items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-8">Artistas</h2>
        <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="w-1/2 text-center bg-[#557ee9] p-8 rounded-lg shadow-lg">
        <h3 className="text-xl mb-6">
          Sumérgete en el fascinante mundo de la literatura a través de las obras de nuestros escritores destacados.
          Cada autor aquí presente ha aportado su voz única y su visión al universo de las letras, creando historias,
          ensayos y poemas que resuenan con los lectores. En esta sección, te invitamos a conocer más sobre sus
          trayectorias, sus influencias y sus obras más representativas. Desplázate hacia abajo y descubre la riqueza
          y diversidad de la literatura que enriquece nuestra comunidad.
        </h3></div>
    </div>
        <div className="flex justify-center mt-8 w-full h-96">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
          <SlArrowLeft />
          </button>
          <div className="flex justify-evenly mt-8 w-full h-96">
            {artists
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((artista: Artista) => (
                <CardFlipp key={artista.id_artista} artista={artista} />
              ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex >= (artists?.length || 0) - itemsPerPage}
          >
          <SlArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default Card_Container_Artistas;