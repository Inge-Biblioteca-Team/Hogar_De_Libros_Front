import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";
import { getLoanPolicity } from "../../../../components/Maps/LoanPolicity";

const UserInfo = ({
  see,
  setSee,
  User,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  return (
    <Modal dismissible show={see} onClose={() => setSee(false)}>
      <Modal.Header className="dark:bg-neutral-900">
        <span>Información del usuario</span>
      </Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d]">
        <figure className=" w-full flex items-center justify-center flex-col">
          <img
            className=" rounded-full w-40 h-40"
            src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png"
            alt=""
          />
          <figcaption className=" font-bold mt-1">
            {User.name} {User.lastName}
          </figcaption>
        </figure>
        <span className=" flex-col flex items-center justify-center w-full gap-2">
          <strong className=" font-bold mt-4">Información Del Usuario </strong>
          <span>
            <strong className=" font-bold">Cédula:</strong> {User.cedula}
          </span>
          <span>
            <strong className=" font-bold">Cantón:</strong> {User.district}
          </span>
        </span>
        <span className="flex-col flex items-center justify-center w-full gap-2 mt-4">
          <strong className=" font-bold">Contactos</strong>
          <span>
            <strong className=" font-bold">Correo:</strong> {User.email}
          </span>
          <span>
            <strong className=" font-bold">Teléfono:</strong> {User.phoneNumber}
          </span>
          <span className=" font-bold">{getLoanPolicity(User.loanPolicy) || "N/A"}</span>
        </span>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfo;
