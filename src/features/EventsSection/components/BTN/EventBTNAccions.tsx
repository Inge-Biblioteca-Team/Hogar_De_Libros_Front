import { Dispatch, SetStateAction } from "react";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";

const EventBTNAccions = ({
    setSee,
    setDown,
    setEdit,
  }: {
    setSee: Dispatch<SetStateAction<boolean>>;
    setEdit: Dispatch<SetStateAction<boolean>>;
    setDown: Dispatch<SetStateAction<boolean>>;
  }) => {

    return (
      <>
        <div className="w-full flex max-sm:gap-2 gap-3 items-center justify-center text-3xl">
          <button
            type="button"
            title="Ver Información del Evento"
            onClick={() => setSee(true)}
          >
            <PiEyeLight size={24} />
          </button>
          <button
            type="button"
            title="Editar Información del Evento"
            onClick={() => setEdit(true)}
          >
            <PiPencilDuotone size={24} />
          </button>
          <button
            type="button"
            title="Deshabilitar Evento"
            onClick={() => setDown(true)}
          >
            <PiTrash size={24} />
          </button>
        </div>

      </>
    );
  };
  
  export default EventBTNAccions;