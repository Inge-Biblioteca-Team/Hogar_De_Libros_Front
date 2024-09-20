import { Dispatch, SetStateAction } from "react";
import { FaCircleUp } from "react-icons/fa6";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
const BTNAccions = ({
  setSee,
  setDow,
  setEdit,
  UserStatus,
  setREACTIVE
}: {
  setSee: Dispatch<SetStateAction<boolean>>;
  setEdit: Dispatch<SetStateAction<boolean>>;
  setDow: Dispatch<SetStateAction<boolean>>;
  setREACTIVE: Dispatch<SetStateAction<boolean>>;
  UserStatus: boolean;
}) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver Información de Usuario"
          onClick={() => setSee(true)}
        >
          <PiEyeLight />
        </button>
        <button
          type="button"
          title="Editar Información de Usuario"
          onClick={() => setEdit(true)}
        >
          <PiPencilDuotone />
        </button>
        {UserStatus ? (
          <button
            type="button"
            title="Desabilitar Usuario"
            className=""
            onClick={() => setDow(true)}
          >
            <PiTrash />
          </button>
        ) : (
          <button type="button" title="Rehabilitar Usuario"
          onClick={()=>setREACTIVE(true)}>
            <FaCircleUp />
          </button>
        )}
      </div>
    </>
  );
};

export default BTNAccions;
