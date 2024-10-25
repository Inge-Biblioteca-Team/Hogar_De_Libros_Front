import { Label, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import ModalFooters from "../../../../components/ModalFooters";
import { Donation } from "../../Types/DonationType";

const MDSeeDonation = ({
  open,
  setOpen,
  donation,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  donation: Donation;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <Label value={`Nombre del donante: ${donation.UserFullName}`} />
      </Modal.Body>
      <ModalFooters onClose={onClose} />
    </Modal>
  );
};

export default MDSeeDonation;
