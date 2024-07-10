import { ISala } from "../interfaces/Sala_Interface";

interface CardProps extends ISala {}

function Card({ Imagen, Nombre, Area, Aforo, Ubicacion }: CardProps) {
  return (
    <div className="bg-slate-600 border border-transparent rounded-md">
      <img
        className="w-64 h-32 mb-8 border-t border-transparent rounded-t-md"
        src={Imagen}
        alt={Nombre}
      />
      <div className="flex flex-col items-center justify-center">
        <h3>{Nombre}</h3>
        <p>Área: {Area} m²</p>
        <p>Aforo: {Aforo} personas</p>
        <p>Ubicación: {Ubicacion}</p>
        <button className="underline" type="button">
          Mas informacion
        </button>
        <button
          className="bg-orange-600 border border-orange-600 rounded-md text-white p-1 mt-5 mb-5"
          type="button"
        >
          Solicitar +{" "}
        </button>
      </div>
    </div>
  );
}

export default Card;
