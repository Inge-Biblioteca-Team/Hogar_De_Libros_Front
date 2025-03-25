import { Modal, Select } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import ModalFooters from "../../../../components/ModalFooters";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { downType } from "../../../../Types/GlobalTypes";
import UseDownFurniture from "../../Hooks/useDownFurniture";

const ModalDownFurniture = ({
  open,
  setOpen,
  Description,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Description: string;
  id: number;
}) => {
  const { register, handleSubmit } = useForm<downType>({
    defaultValues: { Id: id.toString() },
  });

  const { mutate: edit, isLoading } = UseDownFurniture();

  const onConfirm = async (data: downType) => {
    edit(data, {
      onSuccess: () => setOpen(false),
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} size="md" onClose={onClose} popup>
      <Modal.Header className="dark:bg-neutral-900"/>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d]">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="dark:text-white mb-5 text-lg font-normal text-gray-500">
              Seleccione el nuevo estado del mobiliario <br /> {Description}
            </h3>
            <Select required {...register("reason")}>
              <option value="">Seleccione una opción</option>
              <option value="Down">Baja</option>
              <option value="SE">S.E.</option>
              <option value="NA">N.A.</option>
            </Select>
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading} />
      </form>
    </Modal>
  );
};

export default ModalDownFurniture;
