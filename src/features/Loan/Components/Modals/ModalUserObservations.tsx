import { Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const ModalUserObservations = ({
  open,
  setOpen,
  observations
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  observations:[]
}) => {
  return <Modal show={open} onClose={() => setOpen(false)}>

  </Modal>;
};

export default ModalUserObservations;
