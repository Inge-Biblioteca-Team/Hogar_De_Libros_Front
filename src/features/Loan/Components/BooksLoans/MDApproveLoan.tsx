import { Button, Modal, Spinner } from "flowbite-react";
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

  const { mutate: Approve, isLoading } = UseAproveLoan();

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
      <Modal  show={open} popup onClose={onCancel} size={"sm"}>
        <Modal.Header className="dark:bg-[#2d2d2d]"/>
        <Modal.Body className="dark:bg-[#2d2d2d]">
          <div className="text-center">
            <h3>¿Está seguro de aprobar la solicitud de préstamo?</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button color="red" onClick={onCancel} disabled={isLoading}>
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm} disabled={isLoading}>
              {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDApproveLoan;
