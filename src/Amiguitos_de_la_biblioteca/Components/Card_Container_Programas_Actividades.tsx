import { UseGetProgramasActividades } from "../Hooks/UseGetProgramasActividades";
import { IProgramaActivida } from "../Interfaces/Programas_Actividades.interface";
import Card_Programas_Actividades from "./Card_Programas_Actividades";
import Info_Programas_Actividades from "./Info_Programas_Actividades";

function Card_Container_Programas_Actividades() {
  const {programas, loading, error} =UseGetProgramasActividades();

  if(loading) return <p>Cargando.....</p>
  if(error) return <p>Error al cargar programas y actividades</p>
  return (
    <>
      <section className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl mb-8">Programas y Actividades</h2>
        <Info_Programas_Actividades/>
        <div className="flex  justify-evenly">
        {programas.map((sala: IProgramaActivida)=>(
          <Card_Programas_Actividades
            key={sala.Id.toString()}
            Imagen={sala.Imagen}
            Categoria={sala.Categoria}
            Descripcion={sala.Descripcion} Id={0}          
          />
        ))}
        </div>
      </section>
    </>
  );
}

export default Card_Container_Programas_Actividades;
