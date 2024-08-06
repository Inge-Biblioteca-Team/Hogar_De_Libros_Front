import { IVolunteeringPrograms } from "../Interfaces/VolunteeringPrograms.interface";

interface CardProps extends IVolunteeringPrograms {}
function CardVolunteering({
  Imagen,
  Categoria,
  Descripcion,
 onf
}: CardProps) {
  // Tarjeta de programas y actividades
  return (
    <>
      <div className="flex flex-col w-2/12  bg-bluePrincipal min-h-96 border border-transparent rounded-md ">
        <img
          className="w-full h-32 mb-8 border-t border-transparent rounded-t-md"
          src={Imagen}
        />
        <h2 className="text-lg">{Categoria}</h2>
        <p className="flex-grow  ">
          <span >{Descripcion}</span>
        </p>
        <div className="flex justify-center mt-auto">
          <button className="bg-blueButton border-blueButton rounded-lg mb-4" >
            Mas informacion 
          </button>
        </div>
      </div>
    </>
  );
}

export default CardVolunteering;
