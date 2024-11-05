import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useContext } from "react";
import UserContext from "../../../../Context/UserContext/UserContext";
import UseAproveLoan from "../../Hooks/Books/UseAproveLoan";

const MDApproveLoan = ({
  open,
  setOpen,
  LoanID,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  LoanID: number;
}) => {
  const onCancel = () => {
    setOpen(false);
  };

  const { currentUser } = useContext(UserContext);

  const { mutate: Approve } = UseAproveLoan();

  const onConfirm = () => {
    Approve(
      {
        LoanID: LoanID,
        person: currentUser?.name || "",
        Observations: "",
      },
      {
        onSuccess: () => onCancel(),
      }
    );
  };

  return (
    <>
      <Modal show={open} popup onClose={onCancel} size={"sm"}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3>Está Seguro de aprobar la solicitud de préstamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button color="red" onClick={onCancel}>
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm}>
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDApproveLoan;
