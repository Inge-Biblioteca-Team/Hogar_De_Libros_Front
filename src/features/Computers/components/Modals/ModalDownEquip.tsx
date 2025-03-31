import { Modal, Textarea } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDownEquip from "../../Hooks/UseDownEquip";
import { useForm } from "react-hook-form";
import { downType } from "../../../../Types/GlobalTypes";
import ModalFooters from "../../../../components/ModalFooters";

const ModalDownEquip = ({
  open,
  setOpen,
  Serial,
  Code,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  Serial: string;
  Code: string;
}) => {
  const { register, handleSubmit } = useForm<downType>({
    defaultValues: { Id: Code },
  });

  const { mutate: PatchStatus, isLoading } = UseDownEquip();

  const handleConfirm = (data: downType) => {
    PatchStatus(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal  show={open} size="md" onClose={() => setOpen(false)} popup>
      <Modal.Header className="dark:bg-[#2d2d2d]"/>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d]">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Está seguro de dar de baja al equipo {Serial}
            </h3>
            <Textarea
              id="reason"
              rows={4}
              required
              placeholder="Escriba la razón de la baja"
              {...register("reason")}
            />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default ModalDownEquip;
