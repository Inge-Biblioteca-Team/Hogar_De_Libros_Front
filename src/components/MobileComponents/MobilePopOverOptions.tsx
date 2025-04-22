import { Button, ButtonGroup, Popover } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import { OpenModals } from "../../Types/GlobalTypes";
import { useRef } from "react";

const MobilePopOverOptions = ({
  setOpen1,
  setOpen2,
  setOpen3,
  openTrigger,
  setopenTrigger,
  setOpen4,
  text,
  text2,
  status,
}: OpenModals) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={triggerRef}>
      <Popover
        className=" max-md:block hidden bg-white rounded-lg"
        open={openTrigger}
        onOpenChange={(open) => {
          setopenTrigger?.(open);
        }}
        content={
          <ButtonGroup className=" text-black flex-col">
            <Button color="alternative" onClick={() => setOpen1(true)}>
              <HiUserCircle className="me-2 h-4 w-4" />
              Ver
            </Button>
            {setOpen4 && (
              <Button color="alternative" onClick={() => setOpen4(true)}>
                <HiUserCircle className="me-2 h-4 w-4" />
               {text2}
              </Button>
            )}
            {status && (
              <>
                <Button color="alternative" onClick={() => setOpen2(true)}>
                  <HiAdjustments className="me-2 h-4 w-4" />
                  Editar
                </Button>
                <Button color="alternative" onClick={() => setOpen3(true)}>
                  <HiCloudDownload className="me-2 h-4 w-4" />
                  Deshabilitar
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

export default MobilePopOverOptions;
