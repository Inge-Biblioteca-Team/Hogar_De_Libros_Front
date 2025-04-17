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
  text,
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
          <ButtonGroup className=" text-black">
            <Button color="alternative" onClick={() => setOpen1(true)}>
              <HiUserCircle className="me-2 h-4 w-4" />
              Ver
            </Button>
            {status && (
              <>
                <Button color="alternative" onClick={() => setOpen2(true)}>
                  <HiAdjustments className="me-2 h-4 w-4" />
                  Editar
                </Button>
                <Button color="alternative" onClick={() => setOpen3(true)}>
                  <HiCloudDownload className="me-2 h-4 w-4" />
                  Eliminar
                </Button>
              </>
            )}
          </ButtonGroup>
        }
      >
        <span>{text} </span>
      </Popover>
    </div>
  );
};

export default MobilePopOverOptions;
