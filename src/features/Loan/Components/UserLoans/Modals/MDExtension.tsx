import { Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { LoansRes } from "../../../Types/BookLoan";

const MDExtension = ({
  showChange,
  setShowChange,
}: {
  Loan: LoansRes;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Modal
        dismissible
        show={showChange}
        popup
        onClose={() => setShowChange(false)}
        size="md"
      >
        <Modal.Header>Solicitar Extensión</Modal.Header>
        <Modal.Body>
          <div className="text-center space-y-1">
            <h3 className="mt-2 font-bold">
              ¿Desdeas extender tú préstamo por más días?
            </h3>
            <p>
              Contacta con la biblioteca para realizar la extensión del
              préstamo.
            </p>
            <div className="text-center ">
              <legend className="font-bold mt-5">
                Medios de contacto de la bilbioteca:
              </legend>
              <ul className="text-start mt-2">
                <p>
                  Llamanos al: <strong>+506 2685-4213</strong>{" "}
                </p>
                <p>
                  Escribenos al Whatsapp: <strong>+506 7271-6041</strong>
                </p>
              </ul>
            </div>
            <div>
              <legend className="font-bold mt-5">
                Contactanos en el siguiente horario:
              </legend>

              <ul className="text-start mt-2">
                <p>
                  De lunes a viernes de <strong>8 AM a 5 PM</strong>
                </p>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDExtension;
