import { Button, ButtonGroup, Popover } from "flowbite-react";
import {
  HiAdjustments,
  HiCloudDownload,
  HiUserCircle,
  HiBan,
  HiCheck,
  HiX,
  HiRefresh,
  HiTruck,
  HiClock,
} from "react-icons/hi";
import { OpenModals } from "../../Types/GlobalTypes";
import { useContext, useRef } from "react";
import UserContext from "../../Context/UserContext/UserContext";

interface MobilePopOverOptionsProps extends OpenModals {
  text: string;
  text2?: string;
}

const MobilePopOverOptions = ({
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  setOpen5,
  setOpen6,
  setOpen7,
  setOpen8,
  setOpen9,
  setOpen10,
  setOpen11,
  setOpen12,
  openTrigger,
  setopenTrigger,
  text,
  status,
}: MobilePopOverOptionsProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useContext(UserContext);
  const role = currentUser?.role;
  return (
    <div ref={triggerRef}>
      <Popover
        className="max-md:block hidden bg-white rounded-lg z-50"
        open={openTrigger}
        onOpenChange={(open) => setopenTrigger?.(open)}
        content={
          <ButtonGroup className="text-black flex-col">
            {setOpen1 && (
              <Button color="alternative" onClick={() => setOpen1(true)}>
                <HiUserCircle className="me-2 h-4 w-4" />
                Ver
              </Button>
            )}
            {role == "admin" && (
              <>
                {status && (
                  <>
                    {setOpen2 && (
                      <Button
                        color="alternative"
                        onClick={() => setOpen2(true)}
                      >
                        <HiAdjustments className="me-2 h-4 w-4" />
                        Editar
                      </Button>
                    )}
                    {setOpen3 && (
                      <Button
                        color="alternative"
                        onClick={() => setOpen3(true)}
                      >
                        <HiCloudDownload className="me-2 h-4 w-4" />
                        Deshabilitar
                      </Button>
                    )}
                  </>
                )}
                {!status && (
                  <>
                    {setOpen4 && (
                      <Button
                        color="alternative"
                        onClick={() => setOpen4(true)}
                      >
                        <HiCheck className="me-2 h-4 w-4" />
                        Aceptar
                      </Button>
                    )}
                    {setOpen5 && (
                      <Button
                        color="alternative"
                        onClick={() => setOpen5(true)}
                      >
                        <HiX className="me-2 h-4 w-4" />
                        Denegar
                      </Button>
                    )}
                  </>
                )}
                {setOpen6 && (
                  <Button color="alternative" onClick={() => setOpen6(true)}>
                    <HiBan className="me-2 h-4 w-4" />
                    Eliminar
                  </Button>
                )}
                {setOpen7 && (
                  <Button color="alternative" onClick={() => setOpen7(true)}>
                    <HiRefresh className="me-2 h-4 w-4" />
                    Reactivar
                  </Button>
                )}
                {setOpen8 && (
                  <Button color="alternative" onClick={() => setOpen8(true)}>
                    <HiX className="me-2 h-4 w-4" />
                    Cancelar
                  </Button>
                )}
                {setOpen9 && status && (
                  <Button color="alternative" onClick={() => setOpen9(true)}>
                    <HiTruck className="me-2 h-4 w-4" />
                    Recibido
                  </Button>
                )}
                {setOpen10 && status && (
                  <Button color="alternative" onClick={() => setOpen10(true)}>
                    <HiClock className="me-2 h-4 w-4" />
                    Extender
                  </Button>
                )}
                {setOpen12 && (
                  <Button color="alternative" onClick={() => setOpen12(true)}>
                    <HiClock className="me-2 h-4 w-4" />
                    Finalizar
                  </Button>
                )}
                {setOpen11 && (
                  <Button color="alternative" onClick={() => setOpen11(true)}>
                    <HiClock className="me-2 h-4 w-4" />
                    Lista de matricula
                  </Button>
                )}
              </>
            )}
          </ButtonGroup>
        }
      >
        <span className="line-clamp-2 cursor-pointer">{text}</span>
      </Popover>
    </div>
  );
};

export default MobilePopOverOptions;
