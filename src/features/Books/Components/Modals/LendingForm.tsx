import { FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useContext } from "react";
import ModalFooters from "../../../../components/ModalFooters";
import { formatToYMD } from "../../../../components/FormatTempo";
import { addDay } from "@formkit/tempo";
import { Book, BookLeading } from "../../Types/BooksTypes";
import { useForm } from "react-hook-form";
import UserContext from "../../../../Context/UserContext/UserContext";
import UseLeadingRequest from "../../Hooks/UseLeadingRequest";

const LendingForm = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: Book;
}) => {
  const onClose = () => {
    setOpen(false);
    reset();
  };

  const minDate = formatToYMD(new Date());

  const { currentUser } = useContext(UserContext);

  const { register, handleSubmit, watch, reset } = useForm<BookLeading>({
    defaultValues: {
      userCedula: currentUser?.cedula,
      Name: `${currentUser?.name} ${currentUser?.lastName}`,
      PhoneNumber: currentUser?.phoneNumber,
      address: currentUser?.address,
      InscriptionCode: book.InscriptionCode,
      SignaCode: book.signatureCode,
      Title: book.Title,
      Author: book.Author,
      bookBookCode: book.BookCode,
    },
  });

  const maxDate = formatToYMD(addDay(watch("BookPickUpDate"), 5));


  const { mutate: createNew } = UseLeadingRequest();

  const onConfirm = (data: BookLeading) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Solicitud de préstamo</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" flex flex-col gap-3">
          <fieldset className="grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del solicitante</legend>
            <FloatingLabel
              variant="filled"
              label="Numero de cédula"
              {...register("userCedula")}
              readOnly
              className=" cursor-default"
              disabled={true}
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Nombre completo"
              {...register("Name")}
              readOnly
              className=" cursor-default"
            />
            <FloatingLabel
               variant="filled"
               disabled={true}
              label="Numero de teléfono"
              {...register("PhoneNumber")}
              readOnly
              className=" cursor-default"
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Dirección"
              {...register("address")}
              readOnly
              className=" cursor-default"
            />
          </fieldset>

          <fieldset className="grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del libro</legend>
            <FloatingLabel
               variant="filled"
              disabled={true}
              label="Código de signatura"
              value={book.signatureCode || "N/A"}
              className=" cursor-default"
              readOnly
            />
            <FloatingLabel
               variant="filled"
              disabled={true}
              label="Numero de inscripción"
              value={book.InscriptionCode}
              className=" cursor-default"
              readOnly
            />
            <FloatingLabel
               variant="filled"
              disabled={true}
              label="Autor"
              value={book.Author || "Desconocido"}
              className=" cursor-default"
              readOnly
            />
            <FloatingLabel
               variant="filled"
              disabled={true}
              label="Titulo"
              value={book.Title}
              className=" cursor-default"
              readOnly
            />
          </fieldset>

          <fieldset className=" grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del préstamo</legend>
            <FloatingLabel
              required
              variant="outlined"
              label="Fecha de recolección"
              type="date"
              min={minDate}
              {...register("BookPickUpDate")}
            />
            <FloatingLabel
              required
              variant="outlined"
              label="Fecha de vencimiento"
              type="date"
              min={watch("BookPickUpDate")}
              max={maxDate}
              {...register("LoanExpirationDate")}
            />
            <div className=" col-span-2 space-y-1">
              <FloatingLabel
                variant="outlined"
                label="Centro educativo o institución"
                helperText="En caso de no pertenecer a un centro educativo favor omita el campo anterior."
                {...register("institution")}
              />
            </div>
          </fieldset>
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default LendingForm;
