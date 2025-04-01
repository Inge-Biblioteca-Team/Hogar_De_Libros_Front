import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
const BTNAccions = ({
  setSee,
  setDow,
  setEdit,
  status,
}: {
  setSee: Dispatch<SetStateAction<boolean>>;
  setEdit: Dispatch<SetStateAction<boolean>>;
  setDow: Dispatch<SetStateAction<boolean>>;
  status: boolean;
}) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver Información de Artista"
          className="hover:text-Body"
          onClick={() => setSee(true)}
        >
          {""}
          <PiEyeLight size={24} />
        </button>
        {status && (
          <>
            <button
              type="button"
              className={`${
                status ? "" : "cursor-not-allowed"
              } hover:text-yellow-400`}
              onClick={() => setEdit(true)}
              disabled={!status}
            >
              {" "}
              {""}
              <PiPencilDuotone size={24} />
            </button>
            <button
              type="button"
              title="Desabilitar Artista"
              className={`${
                status ? "" : "cursor-not-allowed"
              } hover:text-red-800`}
              onClick={() => setDow(true)}
              disabled={!status}
            >
              {" "}
              {""}
              <PiTrash size={24} />
            </button>
          </>
        )}
        <button type="button" title="Rehabilitar Artista" className="hidden">
          <TbTruckReturn />
        </button>
      </div>
    </>
  );
};

export default BTNAccions;
