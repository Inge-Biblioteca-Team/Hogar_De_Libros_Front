import { PiEyeFill} from "react-icons/pi";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { LuCalendarCheck, LuCalendarClock } from "react-icons/lu";
import { Dispatch, SetStateAction } from "react";
const BTNLoans = ({
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  setOpen5,
  status,
}: {
  setOpen1: Dispatch<SetStateAction<boolean>>;
  setOpen2: Dispatch<SetStateAction<boolean>>;
  setOpen3: Dispatch<SetStateAction<boolean>>;
  setOpen4: Dispatch<SetStateAction<boolean>>;
  setOpen5: Dispatch<SetStateAction<boolean>>;
  status: boolean;
}) => {
  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          title="Ver detalles"
          onClick={() => setOpen1(true)}
        >
          <PiEyeFill size={30} />
        </button>
        {!status && (
          <>
            <button
              type="button"
              title="Aceptar solicitud"
              onClick={() => setOpen2(true)}
            >
              <FaRegCircleCheck size={30} />
            </button>
            <button
              type="button"
              title="Denegar solicitud"
              onClick={() => setOpen3(true)}
            >
              <FaRegCircleXmark size={30} />
            </button>
          </>
        )}
        {status && (
          <>
            <button
              type="button"
              title="Extender prestamo"
              onClick={() => setOpen4(true)}
            >
              <LuCalendarClock size={30} />
            </button>
            <button
              type="button"
              title="Marcar como recibido"
              onClick={() => setOpen5(true)}
            >
              <LuCalendarCheck size={30} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default BTNLoans;
