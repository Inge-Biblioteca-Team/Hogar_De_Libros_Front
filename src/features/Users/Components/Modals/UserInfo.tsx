import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";
import { format } from "@formkit/tempo";

const UserInfo = ({
  see,
  setSee,
  User,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const roleMapping: { [key: string]: string } = {
    admin: "Administrador",
    creator: "Ayudante",
  };

  const RegDate = format({
    date: User.registerDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });
  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Información del Usuario</span>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-2 ml-3">
        <span className=" flex-col flex">
          <strong>Información Del Usaurio </strong>
          <span>Nombre: {User.name}</span>
          <span>Apellidos: {User.lastName}</span>
          <span>Cédula: {User.cedula}</span>
          <span>Provincia: {User.province}</span>
          <span>Fecha de registro: {RegDate}</span>
          <span>Estado {User.status? "Activo": "Deshabilitado"}</span>
          <span>Rol: {roleMapping[User.role] || "Basico"} </span>
          <span>Privilegios de préstamo: 5 Libros Maximo por 30 Días </span>
        </span>
        <span className="flex-col flex">
          <strong>Contactos</strong>
          <span>Correo: {User.email}</span>
          <span>Telfono {User.phoneNumber}</span>
        </span>
      </Modal.Body>
      <Modal.Footer  className=" flex items-center justify-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfo;
