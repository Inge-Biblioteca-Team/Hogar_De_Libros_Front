import { Button, ButtonGroup, Popover } from "flowbite-react";
import { PiEyeFill } from "react-icons/pi";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { LuCalendarCheck, LuCalendarClock } from "react-icons/lu";
import { Dispatch, SetStateAction, useRef } from "react";
const BTNMobileLoan = ({
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  setOpen5,
  status,
  setopenTrigger,
  openTrigger,
  text,
}: {
  setOpen1: Dispatch<SetStateAction<boolean>>;
  setOpen2: Dispatch<SetStateAction<boolean>>;
  setOpen3: Dispatch<SetStateAction<boolean>>;
  setOpen4?: Dispatch<SetStateAction<boolean>>;
  setOpen5?: Dispatch<SetStateAction<boolean>>;
  openTrigger: boolean;
  setopenTrigger: Dispatch<SetStateAction<boolean>>;
  status: boolean;
  text: string;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={triggerRef}>
      <Popover
        open={openTrigger}
        onOpenChange={(open) => {
          setopenTrigger?.(open);
        }}
        className=" max-md:block hidden bg-white rounded-lg text-black"
        content={
          <ButtonGroup className=" flex flex-col">
            <Button
              type="button"
              title="Ver detalles"
              color="alternative"
              onClick={() => setOpen1(true)}
            >
              <PiEyeFill size={30} />
              Ver Informacion
            </Button>
            {!status && (
              <>
                <Button
                  type="button"
                  title="Aceptar solicitud"
                  color="alternative"
                  onClick={() => setOpen2(true)}
                >
                  <FaRegCircleCheck size={30} /> Aceptar solicitud
                </Button>
                <Button
                  type="button"
                  title="Denegar solicitud"
                  color="alternative"
                  onClick={() => setOpen3(true)}
                >
                  <FaRegCircleXmark size={30} /> Denegar solicitud
                </Button>
              </>
            )}
            {status && (
              <>
                <Button
                  type="button"
                  color="alternative"
                  title="Extender prestamo"
                  onClick={setOpen4 ? () => setOpen4(true) : undefined}
                >
                  <LuCalendarClock size={30} /> Extender fecha de vencimiento
                </Button>
                <Button
                  color="alternative"
                  type="button"
                  title="Marcar como recibido"
                  onClick={setOpen5 ? () => setOpen5(true) : undefined}
                >
                  <LuCalendarCheck size={30} /> Finalizar prestamo
                </Button>
              </>
            )}
          </ButtonGroup>
        }
      >
        <span className=" line-clamp-2">{text} </span>
      </Popover>
    </div>
  );
};

export default BTNMobileLoan;
