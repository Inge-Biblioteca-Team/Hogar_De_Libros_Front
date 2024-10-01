import { Dispatch, SetStateAction, useState } from "react";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";

const AccionBTNR = ({
    setSee,
    setDown,
    setEdit,
  }: {
    setSee: Dispatch<SetStateAction<boolean>>;
    setEdit: Dispatch<SetStateAction<boolean>>;
    setDown: Dispatch<SetStateAction<boolean>>;
  }) => {

    return (
      <div className="w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver Información de la Sala"
          onClick={() => setSee(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          type="button"
          title="Editar Información de la Sala"
          onClick={() => setEdit(true)}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          type="button"
          title="Deshabilitar Sala"
          onClick={() => setDown(true)}
        >
          <PiTrash size={24} />
        </button>
      </div>
    );
  };
  
  export default AccionBTNR;