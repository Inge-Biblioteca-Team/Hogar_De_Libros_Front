import { Button, Label, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Donation } from "../../Types/DonationType";
import { formatToDMY } from "../../../../components/FormatTempo";

const MDSeeDonation = ({
  open,
  setOpen,
  donation,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  donation: Donation;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Información de la donación</Modal.Header>
      <Modal.Body className=" flex flex-col gap-4">
      <Label>
        <strong>Nombre del donante: </strong> {donation.UserFullName}
      </Label>
      <Label>
       <strong>Cédula: </strong>{donation.UserCedula}
      </Label>
      <Label>
       <strong>Dirección: </strong> {donation.UserAddress}
      </Label>
      <Label>
        <strong>Teléfono: </strong> {donation.UserPhone}
      </Label>
      <Label>
       <strong>Correo: </strong> {donation.UserEmail}
      </Label>
      <Label>
        <strong>Categoría: </strong> {donation.SubCategory}
      </Label>
      <Label>
       <strong>Fecha de entrega del donativo: </strong> {formatToDMY(donation.DateRecolatedDonation)}
      </Label>
      <Label>
        <strong>Descripción: </strong> {donation.ItemDescription}
      </Label>
      <Label>
       <strong>Condición del objeto a donar: </strong> {donation.ResourceCondition}
      </Label>
      <Label>
       <strong>Estado: </strong> {donation.Status}
      </Label>
      {donation.Reason && (
        <Label>
          <strong>Motivo de rechazo: </strong> {donation.Reason}
        </Label>
      )}
      {donation.Document && donation.Document.length > 0 ? (
        <div>
          <Label>
           <strong>Imágenes adjuntas:</strong>
          </Label>
            {donation.Document.map((image, index) => (
              <figure className="h-20 w-32" key={"Doc" + index}>
                <a href={image} target="#blank">
                  <img
                    src={image}
                    alt={"Imagen # " + index}
                    key={index}
                    className="h-20 w-32 rounded-mm"
                  />
                </a>
              </figure>
            ))}
        </div>
        ) : (
          <Label>
            <strong>No proporciona imágenes del artículo</strong>
          </Label>
        )}
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={onClose}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDSeeDonation;
