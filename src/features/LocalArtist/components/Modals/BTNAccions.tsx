import { BiTargetLock } from "react-icons/bi";
import { TbUserEdit } from "react-icons/tb";
import { TiUserDeleteOutline } from "react-icons/ti";
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
          title="Ver Informacion de Artista"
          onClick={() => setSee(true)}
        >
          <BiTargetLock />
        </button>
        <button
          type="button"
          title="Editar Informacion de Artista"
          onClick={() => setEdit(true)}
        >
          <TbUserEdit />
        </button>
        <button
          type="button"
          title="Desabilitar Artista"
          className=""
          onClick={() => setDow(true)}
        >
          <TiUserDeleteOutline />
        </button>
        <button type="button" title="Rehabilitar Artista" className="hidden">
          <TbTruckReturn />
        </button>
      </div>
    </>
  );
};

export default BTNAccions;
