import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import { OpenModals } from "../../Types/GlobalTypes";
const BTNAccions = ({
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  status,
}: OpenModals) => {
  return (
    <>
      <div className=" w-full flex gap-3 items-center justify-center text-3xl">
        <button
          type="button"
          title="Ver información"
          className="hover:text-Body"
          onClick={() => setOpen1(true)}
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
              onClick={() => setOpen2(true)}
              disabled={!status}
            >
              {" "}
              {""}
              <PiPencilDuotone size={24} />
            </button>
            <button
              type="button"
              title="Desabilitar"
              className={`${
                status ? "" : "cursor-not-allowed"
              } hover:text-red-800`}
              onClick={() => setOpen3(true)}
              disabled={!status}
            >
              {" "}
              {""}
              <PiTrash size={24} />
            </button>
          </>
        )}
        {!status && setOpen4 && (
          <button
            type="button"
            title="Rehabilitar"
            className=" hover:text-green-500"
            onClick={() => setOpen4(true)}
          >
            <TbTruckReturn />
          </button>
        )}
      </div>
    </>
  );
};

export default BTNAccions;
