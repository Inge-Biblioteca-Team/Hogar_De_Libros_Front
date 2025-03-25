import { Modal, Button } from "flowbite-react";
import { SetStateAction, Dispatch } from "react";
import { Friend } from "../../types/FriendType";
import { formatToDMY } from "../../../../components/FormatTempo";
import { IoDocumentAttach } from "react-icons/io5";
const MDViewFriend = ({
  open,
  setOpen,
  friend,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  friend: Friend;
}) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">
        <span>Solicitud de amigo de la biblioteca: </span>
      </Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-2">
        <span>
          <strong>Nombre:</strong> {friend.UserFullName}
        </span>
        <span>
          <strong>Cédula:</strong> {friend.UserCedula}
        </span>
        <span>
          <strong>Fecha de nacimiento:</strong>{" "}
          {formatToDMY(friend.UserBirthDate)}
        </span>
        <span>
          <strong>Número de teléfono:</strong> {friend.UserPhone}
        </span>
        <span>
          <strong>Correo electrónico:</strong> {friend.UserEmail}
        </span>
        <span>
          <strong>Dirección de residencia:</strong> {friend.UserAddress}
        </span>
        <span>
          <strong>Categoría de apoyo:</strong> {friend.PrincipalCategory}
        </span>
        <span>
          <strong>Categoría de apoyo secundaria:</strong> {friend.SubCategory}
        </span>
        <span>
          <strong>Experiencia previa:</strong>{" "}
          {friend.Experience ? friend.Experience : "No posee"}
        </span>
        <span>
          <strong>Fecha de solicitud :</strong>{" "}
          {formatToDMY(friend.DateGenerated)}
        </span>
        <span>
          <strong>Información extra :</strong>{" "}
          {friend.ExtraInfo ? friend.ExtraInfo : "No presenta"}
        </span>
        {friend.Reason && (
          <span>
            <strong>Motivo de rechazo:</strong> {friend.Reason}
          </span>
        )}
        {friend.Document.length > 0 && (
          <span className=" flex flex-col">
            <strong>Documentos adjuntos:</strong>
            {friend.Document.map((doc, index) => (
              <a
                target="#blank"
                href={doc}
                title="Click para abrir"
                className=" hover:text-Body"
              >
                <IoDocumentAttach size={27} />
                <span>#{index + 1}</span>
              </a>
            ))}
          </span>
        )}
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"blue"} onClick={onClose}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDViewFriend;
