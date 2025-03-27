import { Modal, Label, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDownBook from "../../Hooks/UseDownBook";

const MDDownBook = ({
  open,
  setOpen,
  Id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Id: string;
}) => {
  const onClose = () => {
    setOpen(false);
    reset();
  };

  const { register, handleSubmit, reset } = useForm<downType>({
    defaultValues: {
      Id: Id,
    },
  });

  const { mutate: downResource, isLoading } = UseDownBook();

  const onConfirm = (data: downType) => {
    downResource(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">Deshabilitar registro de la colección</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d]">
          <div className=" text-center mb-2">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <span>
              {" "}
              ¿Está seguro de que desea deshabilitar este recurso de la
              colección? <br />
            </span>
            <span> En caso de aceptar, no podrá revertir esta acción.</span>
          </div>
          <div>
            <Label value="Motivo de baja" />
            <Textarea
              rows={6}
              placeholder="Ingrese el motivo de baja"
              required
              {...register("reason")}
            />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDDownBook;
