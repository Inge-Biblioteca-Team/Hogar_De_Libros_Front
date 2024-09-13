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
  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Información del Usuario</span>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-2 ml-3">
        <span className=" flex-col flex">
          <strong>Informacion Del Usaurio </strong>
          <span>Nombre: {User.name}</span>
          <span>Apellidos: {User.lastName}</span>
          <span>Cedula: {User.cedula}</span>
          <span>Provincia: {User.province}</span>
          <span>Fecha de registro: {}</span>
          <span>Estado {User.status}</span>
          <span>Rol: </span>
          <span>Privilegios de Prestamo: </span>
        </span>
        <span className="flex-col flex">
          <strong>Contactos</strong>
          <span>Correo: {User.email}</span>
          <span>Telfono {User.phoneNumber}</span>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button color={"blue"} onClick={() => setSee(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfo;
