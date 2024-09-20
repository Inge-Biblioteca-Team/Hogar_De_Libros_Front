import { Button, Label, Modal, TextInput } from "flowbite-react";
import UseRecoveryPassword from "../Hooks/UseRecoveryPassword";
import { useState } from "react";
interface RecoverPasswordModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const RecoverPasswordModal: React.FC<RecoverPasswordModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [email, setEmail] = useState<string>("");
  const [cedula, setCedula] = useState<string>("");
  const { mutate } = UseRecoveryPassword();

  function onCloseModal() {
    setOpenModal(false);
  }

  function onConfirm() {
    mutate({ Email: email, Cedula: cedula });
  }

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Recuperar Contraseña
          </h3>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Correo Electrónico" />
            </div>
            <TextInput id="email" placeholder="nombre@ejemplo.com" 
            onChange={(event)=>setEmail(event.target.value)}/>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="cedula" value="Cédula" />
            </div>
            <TextInput id="cedula" placeholder="Número de cédula" 
            type="text"
            onChange={(event)=>setCedula(event.target.value)}/>
          </div>
          <div className="flex justify-between mt-4 space-x-2">
            <Button
              color="gray"
              className="w-full transition-transform hover:scale-105"
              onClick={onCloseModal}
            >
              Cancelar
            </Button>
            <Button
              color="blue"
              className="w-full transition-transform hover:scale-105"
              onClick={onConfirm}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RecoverPasswordModal;
