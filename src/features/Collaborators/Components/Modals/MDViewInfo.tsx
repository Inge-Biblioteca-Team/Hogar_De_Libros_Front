import { Button, Label, Modal, ModalBody } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Colaborator } from "../../Types/ColaboratorTypes";
import { formatToDMY } from "../../../../components/FormatTempo";

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
      <Modal.Header>Información de la colaboracion </Modal.Header>
      <ModalBody className=" flex flex-col gap-2">
        <Label
          value={`Fecha de solicitud: ${formatToDMY(
            colaboration.DateGenerated
          )}`}
        />
        <Label value={`Nombre del colaborador: ${colaboration.UserFullName}`} />
        <Label value={`Cedula del colaborador: ${colaboration.UserCedula}`} />
        <Label value={`Correo de contacto: ${colaboration.UserEmail}`} />
        <Label value={`Teléfono de contacto: ${colaboration.UserPhone}`} />
        <Label value={`Dirección: ${colaboration.UserAddress}`} />
        <Label value={`Genero: ${colaboration.UserGender}`} />
        {colaboration.Entitycollaborator && (
          <Label
            value={`Institución colaboradora: ${colaboration.Entitycollaborator}`}
          />
        )}
        <Label value={`Experiencia previa: ${colaboration.Experience}`} />
        <Label value={`Información adicional: ${colaboration.ExtraInfo}`} />
        <Label
          value={`Categoría de la colaboración: ${colaboration.PrincipalCategory}`}
        />
        <Label value={`Sub categoría: ${colaboration.SubCategory}`} />
        <Label value={`Propuesta: ${colaboration.Description}`} />
        {colaboration.Document && (
          <>
            <Label value={`Documentos adjuntos: ${colaboration.Document}`} />
            {colaboration.Document.map((doc) => (
              <a href={doc} title="Click para abrir">
                Doc
              </a>
            ))}
          </>
        )}
        {colaboration.Reason && (
          <Label value={`Razón de rechazo: ${colaboration.Reason}`} />
        )}
      </ModalBody>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={onClose}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDViewInfo;
