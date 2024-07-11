import { useState } from "react";

import Card_Programas_Actividades from "./CardVolunteering";
import Info_Programas_Actividades from "./InfoVolunteering";
import { UseGetVolunteeringPrograms } from "../Hooks/UseGetVolunteeringPrograms";
import { IVolunteeringPrograms } from "../Interfaces/VolunteeringPrograms.interface";


function Card_Container_Volunteering() {
  const { programas, loading, error } = UseGetVolunteeringPrograms();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < programas.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) return <p>Cargando.....</p>;
  if (error) return <p>Error al cargar programas y actividades</p>;

  return (
    <>
      <section className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl mb-8">Programas y Actividades</h2>
        <Info_Programas_Actividades />
        <div className="flex justify-evenly">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            PREV
          </button>
          {programas
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((volunteering: IVolunteeringPrograms, index: number) => (
              <Card_Programas_Actividades
                key={`${volunteering.Id}-${index}`}
                Imagen={volunteering.Imagen}
                Categoria={volunteering.Categoria}
                Descripcion={volunteering.Descripcion}
                Id={volunteering.Id}
              />
            ))}
          <button
            onClick={handleNext}
            disabled={currentIndex >= programas.length - itemsPerPage}
          >
            NEXT
          </button>
        </div>
      </section>
    </>
  );
}

export default Card_Container_Volunteering;
