import { IProgramaActivida } from "../Interfaces/Programas_Actividades.interface";

interface CardProps extends IProgramaActivida {}
function Card_Programas_Actividades({
  Imagen,
  Categoria,
  Descripcion,
}: CardProps) {
  return (
    <>
    <div className="flex flex-col w-1/5 bg-slate-500">
      <img className="w-full h-32 mb-8" src={Imagen} />
      <h2 className="text-lg">{Categoria}</h2>
      <p className="flex-grow">
        <span >{Descripcion}</span>
      </p>
      <div className="flex justify-center mt-auto">
      <button className="bg-red-400 border border-red-400 rounded-lg mb-4">Mas informacion</button>
      </div>
      </div>
      
    </>
  );
}

export default Card_Programas_Actividades;
