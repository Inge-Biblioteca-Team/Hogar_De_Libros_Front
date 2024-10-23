import { Dispatch, SetStateAction } from "react";
import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";

const AccionsBTN = ({
  Status,
  setOpenS,
  setOpenE,
  setOpenD,
}: {
  Status: boolean;
  setOpenS: Dispatch<SetStateAction<boolean>>;
  setOpenE: Dispatch<SetStateAction<boolean>>;
  setOpenD: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className=" flex gap-4 items-center justify-center">
      <button
        type="button"
        title="Ver Información"
        className="hover:text-Body"
        onClick={() => setOpenS(true)}
      >
        <PiEyeLight size={24} />
      </button>
      <button
        type="button"
        title="Editar Información"
        className={`${
          Status ? "" : "cursor-not-allowed"
        } hover:text-yellow-400`}
        onClick={() => setOpenE(true)}
        disabled={!Status}
      >
        <PiPencilDuotone size={24} />
      </button>
      <button
        type="button"
        title="Desabilitar"
        className={`${Status ? "" : "cursor-not-allowed"} hover:text-red-800`}
        disabled={!Status}
        onClick={() => setOpenD(true)}
      >
        <PiTrash size={24} />
      </button>
    </div>
  );
};

export default AccionsBTN;
