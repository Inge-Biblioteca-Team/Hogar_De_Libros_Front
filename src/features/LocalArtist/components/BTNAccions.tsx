import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
const BTNAccions = ({
  setSee,
  setDow,
  setEdit,
}: {
  setSee: Dispatch<SetStateAction<boolean>>;
  setEdit: Dispatch<SetStateAction<boolean>>;
  setDow: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver Información de Artista"
          onClick={() => setSee(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          type="button"
          title="Editar Información de Artista"
          onClick={() => setEdit(true)}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          type="button"
          title="Desabilitar Artista"
          className=""
          onClick={() => setDow(true)}
        >
          <PiTrash size={24} />
        </button>
        <button type="button" title="Rehabilitar Artista" className="hidden">
          <TbTruckReturn />
        </button>
      </div>
    </>
  );
};

export default BTNAccions;
