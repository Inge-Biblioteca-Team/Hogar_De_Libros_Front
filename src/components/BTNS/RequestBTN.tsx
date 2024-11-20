import { Dispatch, SetStateAction } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { HiViewfinderCircle } from "react-icons/hi2";
const RequestBTN = ({
  setOpenV,
  setOpenA,
  setOpenD,
}: {
  setOpenV: Dispatch<SetStateAction<boolean>>;
  setOpenA: Dispatch<SetStateAction<boolean>>;
  setOpenD: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className=" flex max-sm:gap-1 gap-3 max-sm:scale-95  ">
        <button
          onClick={() => setOpenV(true)}
          type="button"
          title="Ver Solicitud"
          className=" hover:text-Body"
        >
          <HiViewfinderCircle size={25} />
        </button>
        <button
          onClick={() => setOpenD(true)}
          type="button"
          title="Rechazar solicitud"
          className=" hover:text-red-800"
        >
          <GiCancel size={25} />
        </button>
        <button
          onClick={() => setOpenA(true)}
          type="button"
          title="Aprovar solicitud"
          className=" hover:text-green-800"
        >
          <FaCheckCircle size={25} />
        </button>
      </div>
    </>
  );
};

export default RequestBTN;
