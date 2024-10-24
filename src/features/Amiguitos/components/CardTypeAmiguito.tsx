import { Amigos } from "../types/InfoAmiguitos";
import ModalButtonAM from "./ModalBotton";

const CardTypeAmiguito = ({
  Amiguito,
  
}: {
  Amiguito: Amigos ;
  
}) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:p-0">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md"
        src={Amiguito.Image}
        alt={Amiguito.NameType}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4 h-72 
      max-sm:h-32 max-sm:justify-end flex flex-col items-baseline justify-between">
        <strong className="max-sm:text-sm max-sm:min-w-20">{Amiguito.NameType}</strong>
        <p className=" max-sm:hidden">
          <span>
            {Amiguito.Description}
          </span>
          <br />
        </p>
        <ModalButtonAM />
        
      </figcaption>
    </figure>
  );
};

export default CardTypeAmiguito;
