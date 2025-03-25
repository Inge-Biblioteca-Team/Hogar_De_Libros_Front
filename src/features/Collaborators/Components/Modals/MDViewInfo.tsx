import { Button, Label, Modal, ModalBody } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Colaborator } from "../../Types/ColaboratorTypes";
import { formatToDMY } from "../../../../components/FormatTempo";
import { IoDocumentAttach } from "react-icons/io5";
const MDViewInfo = ({
  setOpen,
  open,
  colaboration,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  colaboration: Colaborator;
}) => {
  const { reset } = useForm();
  const onClose = () => {
    setOpen(false);
    reset();
  };
  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">
        Información de la colaboración
      </Modal.Header>
      <ModalBody className="dark:bg-[#2d2d2d] flex flex-col gap-2">
        <Label>
          <strong>Fecha de solicitud: </strong>{" "}
          {formatToDMY(colaboration.DateGenerated)}
        </Label>
        <Label>
          <strong>Nombre del colaborador: </strong>{colaboration.UserFullName}
        </Label>
        <Label>
          <strong>Cédula del colaborador: </strong>{colaboration.UserCedula}
        </Label>
        <Label>
          <strong>Correo de electrónico: </strong>{colaboration.UserEmail}
        </Label>
        <Label>
          <strong>Teléfono de contacto: </strong>{colaboration.UserPhone}
        </Label>
        <Label>
          <strong>Dirección: </strong>{colaboration.UserAddress}
        </Label>
        <Label>
          <strong>Género: </strong> {colaboration.UserGender}
        </Label>
        {colaboration.Entitycollaborator && (
          <Label>
            <strong>Institución colaboradora: </strong> {colaboration.Entitycollaborator}
          </Label>
        )}
        <Label>
          <strong>Experiencia previa: </strong> {colaboration.Experience}
        </Label>
        <Label>
          <strong>Información adicional: </strong> {colaboration.ExtraInfo}
        </Label>
        <Label>
          <strong>Categoría de la colaboración: </strong> {colaboration.PrincipalCategory}
        </Label>
        <Label>
          <strong>Subcategoría: </strong> {colaboration.SubCategory}
        </Label>
        <Label>
          <strong>Estado: </strong> {colaboration.Status}
        </Label>
        <Label>
          <strong>Propuesta: </strong> {colaboration.Description}
        </Label>
        {colaboration.Document && (
          <>
            <Label>
              <strong>Documentos adjuntos:</strong>
            </Label>
            {colaboration.Document.map((doc, index) => (
              <a
              key={index+"Doc"}
                target="#blank"
                href={doc}
                title="Click para abrir"
                className=" hover:text-Body"
              >
                <IoDocumentAttach size={27} />
                <span>#{index + 1}</span>
              </a>
            ))}
          </>
        )}
        {colaboration.Reason && (
          <Label value={`Razón de rechazo: ${colaboration.Reason}`} />
        )}
      </ModalBody>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"blue"} onClick={onClose}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDViewInfo;