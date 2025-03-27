import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";
import { Button, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDownUser from "../../Hooks/UseDownUser";

const DisableUser = ({
  dow,
  setDow,
  User,
}: {
  dow: boolean;
  setDow: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const { mutate: Disable } = UseDownUser();

  const handleDisbale = () => {
    Disable(User.cedula);
    setDow(false);
  };

  return (
    <Modal dismissible show={dow} onClose={() => setDow(false)}>
      <Modal.Body className="dark:bg-[#2d2d2d]">
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="dark:text-white mb-5 text-lg font-normal text-gray-500">
            ¿Estás seguro de que deseas dar de baja al usuario?
          </h3>
          <p className="dark:text-white mb-4 text-md font-semibold text-gray-600">
            {User.name} {User.lastName}; Cédula {User.cedula} <br />
          </p>
          <TextInput
            id="reason"
            type="text"
            placeholder="Agrege una anotación si lo desea"
            className="mb-4"
          />
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={() => setDow(false)}>
              Cancelar
            </Button>
            <Button color="blue" onClick={() => handleDisbale()}>
              Confirmar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DisableUser;
