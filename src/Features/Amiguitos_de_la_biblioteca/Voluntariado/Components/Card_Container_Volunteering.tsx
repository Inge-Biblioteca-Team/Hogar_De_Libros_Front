import { useState } from "react";
import Card_Programas_Actividades from "./CardVolunteering";
import Info_Programas_Actividades from "./InfoVolunteering";
import { UseGetVolunteeringPrograms } from "../Hooks/UseGetVolunteeringPrograms";
import { IVolunteeringPrograms } from "../Interfaces/VolunteeringPrograms.interface";
import NextIcon from "../Assets/derecha.png";
import PrevIcon from "../Assets/izquierda.png";
// Contenedor de las tarjetas de programas y actividades
function Card_Container_Volunteering() {
  const { programas, loading, error } = UseGetVolunteeringPrograms();
  const [currentIndex, setCurrentIndex] = useState(0); // indice actual
  const itemsPerPage = 4; // cantidad de items por pagina

  const handleNext = () => {
    // funcion para pasar a la siguiente pagina
    if (currentIndex < programas.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    // funcion para pasar a la pagina anterior
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) return <p>Cargando.....</p>; // mensaje de carga
  if (error) return <p>Error al cargar programas y actividades</p>; // mensaje de error
  // muestra las tarjetas de programas y actividades
  return (
    <>
      <section className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl mb-8">Programas y Actividades</h2>
        <Info_Programas_Actividades />
        <div className="flex justify-evenly">
          <div className="flex justify-evenly items-center">
            <img
              src={PrevIcon}
              alt="Previous"
              onClick={handlePrev}
              style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
              className="w-10 h-10"
            />
          </div>
          {programas
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((volunteering: IVolunteeringPrograms, index: number) => (
              // muestra las tarjetas de programas y actividades mediante un .map
              <Card_Programas_Actividades
                key={`${volunteering.Id}-${index}`}
                Imagen={volunteering.Imagen}
                Categoria={volunteering.Categoria}
                Descripcion={volunteering.Descripcion}
                Id={volunteering.Id}
              />
            ))}
          <div className="flex justify-evenly items-center">
            <img
              src={NextIcon}
              alt="Next"
              onClick={handleNext}
              style={{
                cursor:
                  currentIndex >= programas.length - itemsPerPage
                    ? "not-allowed"
                    : "pointer",
              }}
              className="w-10 h-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Card_Container_Volunteering;
