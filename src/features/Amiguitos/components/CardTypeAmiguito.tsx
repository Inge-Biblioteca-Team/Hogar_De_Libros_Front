import { IVolunteeringPrograms } from "../types/InfoAmiguitos";

const CardTypeAmiguito = ({
  Amiguito,
}: {
  Amiguito: IVolunteeringPrograms;
}) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md"
        src={Amiguito.Imagen}
        alt={Amiguito.Categoria}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4">
        <h3 className="max-sm:text-sm">Donaciones</h3>
        <p className=" max-sm:hidden">
          <span>
            Tienes libros que ya no utlizas? Donalos a la biblioteca para que
            muchas personas puedan disfrutar de estos
          </span>
          <br />
          <span>
            Se aceptan libros en buen estado, en caso de ser educativos no mayor
            a 5 años de antiguedad.
          </span>
          <br />
          <span>Limpieza, Atencion al publico y demas.</span>
        </p>
        <button
          className="bg-Bottoms text-Text text-lg rounded-lg p-1.5 mt-5 mb-5
        hover:bg-Bottoms-dark hover:scale-105 max-sm:text-xs"
          type="button"
        >
          Participar +{" "}
        </button>
      </figcaption>
    </figure>
  );
};

export default CardTypeAmiguito;
