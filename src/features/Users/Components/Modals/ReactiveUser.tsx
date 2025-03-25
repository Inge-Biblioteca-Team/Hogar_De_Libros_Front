import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";
import { Button, Modal} from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseUpUser from "../../Hooks/UseUpUser";

const ReactiveUser = ({
  dow,
  setDow,
  User,
}: {
  dow: boolean;
  setDow: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const { mutate: UP } = UseUpUser();

  const handleDisbale = () => {
    UP(User.cedula);
    setDow(false);
  };

  return (
    <Modal show={dow} onClose={() => setDow(false)}>
      <Modal.Body className="dark:bg-[#2d2d2d]">
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="dark:text-white mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Estás seguro de que desea Reactivar el Usuario?
          </h3>
          <p className="dark:text-white mb-4 text-md font-semibold text-gray-600 dark:text-gray-300">
            {User.name} {User.lastName}; Cédula {User.cedula} <br />
          </p>
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

export default ReactiveUser;
