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
        <Label value={`Nombre del donante: ${donation.UserFullName}`} />
        <Label value={`Cedula: ${donation.UserCedula}`} />
        <Label value={`Dirección: ${donation.UserAddress}`} />
        <Label value={`Teléfono: ${donation.UserPhone}`} />
        <Label value={`Correo: ${donation.UserEmail}`} />
        <Label value={`Categoría: ${donation.SubCategory}`} />
        <Label
          value={`Fecha de entrega del donativo: ${formatToDMY(
            donation.DateRecolatedDonation
          )}`}
        />
        <Label value={`Descripción: ${donation.ItemDescription}`} />
        <Label
          value={`Condición del objeto a donar: ${donation.ResourceCondition}`}
        />
        <Label value={`Estado: ${donation.Status}`} />
        {donation.Reason && (
          <Label value={`Motivo de rechazo: ${donation.Reason}`} />
        )}
        {donation.Document && donation.Document.length > 0 ? (
          <div>
            <Label value="Imágenes adjuntas" />
            {donation.Document.map((image, index) => (
              <figure className="h-20 w-32">
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
          <Label value="No proporciona imágenes del articulo" />
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
