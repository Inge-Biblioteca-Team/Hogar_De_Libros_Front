import { Button, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Loans } from "../../Types/BookLoan";

const LoanRenuve = ({
 
  showChange,
  setShowChange,
}: {
  Loan: Loans;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Modal show={showChange} onClose={() => setShowChange(false)}>
        <Modal.Header>Extencion de fecha de devolucion</Modal.Header>
        <Modal.Body>
          <div className="">
            <label htmlFor="NewDate">Ingrese la fecha de devolucion</label>
            <TextInput id="NewDate" type="date" />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                color="failure"
                onClick={() => {
                  setShowChange(false);
                }}
              >
                Regresar
              </Button>
              <Button color="blue">Enviar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoanRenuve;
