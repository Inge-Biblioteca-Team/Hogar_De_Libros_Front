import { useState } from "react";
import { Button, Modal, Select,} from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useDownFurniture from "../../Hooks/useDownFurniture";

const ModalDownFurniture= ({
    open,
    setOpen,
    id,
    Description,
  }: {
    open: boolean;
    setOpen: (open: boolean) => void; Description:string; id:number;
  }) => {
  const {mutate: PatchStatus} = useDownFurniture();
  const [Accion, SetAcction] = useState<string>("")
  
  const handleConfirm = () => {
    PatchStatus({Id: id.toString(), acction:Accion}, {
      onSuccess: () => {
        setOpen(false); 
      },
    });
  };
  
    return (
      <Modal show={open} size="md" onClose={() => setOpen(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Seleccione el nuevo estado del mobiliario <br /> {Description}
            </h3>
            <Select onChange={(event)=>SetAcction(event.target.value)} required>
              <option value="">Seleccione una opción</option>
              <option value="Down">Baja</option>
              <option value="SE">S.E.</option>
              <option value="NA">N.A.</option>
            </Select>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex w-full items-center justify-center">
            <Button color={"failure"} onClick={()=>setOpen(false)}>
                Cancelar
            </Button>
            <Button color={"blue"} onClick={()=>handleConfirm()}>
                Confirmar
            </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ModalDownFurniture;
  
  