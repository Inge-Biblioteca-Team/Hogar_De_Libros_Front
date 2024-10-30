import { Button, Label, Modal, TextInput } from "flowbite-react";
import UseRecoveryPassword from "../Hooks/UseRecoveryPassword";
import { useForm } from "react-hook-form";
import { recoveryRequest } from "../Type/Recovery";

const RecoverPasswordModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}) => {
  const { mutate: request } = UseRecoveryPassword();

  function onCloseModal() {
    setOpenModal(false);
    reset();
  }

  const { register, reset, handleSubmit } = useForm<recoveryRequest>();

  const onConfirm = (data: recoveryRequest) => {
    request(data);
  };

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Recuperar Contraseña
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Correo Electrónico" />
              </div>
              <TextInput
                id="email"
                placeholder="nombre@ejemplo.com"
                {...register("email")}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="cedula" value="Cédula" />
              </div>
              <TextInput
                id="cedula"
                placeholder="Número de cédula"
                type="text"
                {...register("cedula")}
              />
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
                type="submit"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default RecoverPasswordModal;
