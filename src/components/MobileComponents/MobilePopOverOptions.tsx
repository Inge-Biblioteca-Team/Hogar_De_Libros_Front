import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import { OpenModals } from "../../Types/GlobalTypes";

const MobilePopOverOptions = ({ setOpen1, setOpen2, setOpen3 }: OpenModals) => {
  return (
    <ButtonGroup className=" text-black dark:text-white">
      <Button color="alternative" onClick={() => setOpen1(true)}>
        <HiUserCircle className="me-2 h-4 w-4" />
        Ver
      </Button>
      <Button color="alternative" onClick={() => setOpen2(true)}>
        <HiAdjustments className="me-2 h-4 w-4" />
        Editar
      </Button>
      <Button color="alternative" onClick={() => setOpen3(true)}>
        <HiCloudDownload className="me-2 h-4 w-4" />
        Eliminar
      </Button>
    </ButtonGroup>
  );
};

export default MobilePopOverOptions;
