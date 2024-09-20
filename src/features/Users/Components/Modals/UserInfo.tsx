import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";

const UserInfo = ({
  see,
  setSee,
  User,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const LoanMapping: { [key: string]: string } = {
    admin: "Ilimitado",
    creator: "5 Libros por maximo 30 días",
    viewer: "No Apto Para Prestamos",
    external_user: "5 Libros por maximo 30 días",
  };

  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Información del Usuario</span>
      </Modal.Header>
      <Modal.Body className="">
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
          <strong className=" font-bold mt-1">Información Del Usaurio </strong>
          <span>
            <strong className=" font-bold">Cédula:</strong> {User.cedula}
          </span>
          <span>
            <strong className=" font-bold">Canton:</strong> {User.district}
          </span>
        </span>
        <span className="flex-col flex items-center justify-center w-full gap-2 mt-1">
          <strong className=" font-bold">Contactos</strong>
          <span>
            <strong className=" font-bold">Correo:</strong> {User.email}
          </span>
          <span>
            <strong className=" font-bold">Telefono:</strong> {User.phoneNumber}
          </span>
          <span className=" font-bold">{LoanMapping[User.role] || "N/A"}</span>
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfo;
