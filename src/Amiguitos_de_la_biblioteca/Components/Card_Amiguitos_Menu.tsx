import { IAmiguitosMenu } from "../Interfaces/Amiguitos_Menus.interface";

interface CardProps extends IAmiguitosMenu {}
function Card_Programas_Actividades({
  Imagen,
  Titulo,
  Descripcion,
}: CardProps) {
  return (
    <>
    <div className="flex flex-col w-2/12 bg-slate-500 min-h-96 ">
      <img className="w-full h-32 mb-8" src={Imagen} />
      <h2 className="text-lg">{Titulo}</h2>
      <p className="flex-grow ">
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
