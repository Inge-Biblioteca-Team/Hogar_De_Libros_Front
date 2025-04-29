import { addDay } from "@formkit/tempo";
import { Modal, FloatingLabel } from "flowbite-react";
import { Dispatch, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";
import UserContext from "../../../../Context/UserContext/UserContext";
import { BookLeading } from "../../../Books/Types/BooksTypes";
import { BookC } from "../../Types/BooksChildrensTypes";
import UseNewChildLoan from "../../Hooks/UseNewChildLoan";

const LendingChild = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: BookC;
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
      userName: `${currentUser?.name} ${currentUser?.lastName}`,
      userPhone: currentUser?.phoneNumber,
      userAddress: currentUser?.address,
      InscriptionCode: book.InscriptionCode,
      SignaCode: book.SignatureCode,
      Title: book.Title,
      Author: book.Author,
      bookBookCode: book.BookCode,
    },
  });

  const maxDate = formatToYMD(
    addDay(watch("BookPickUpDate"), currentUser?.loanPolicity)
  );
  const { mutate: createNew, isLoading } = UseNewChildLoan();

  const onConfirm = (data: BookLeading) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal  show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">Solicitud de préstamo</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" flex bg-white dark:bg-[#2d2d2d] flex-col gap-3">
          <fieldset className="grid gap-x-3 gap-y-1 grid-cols-2 max-md:grid-cols-1">
            <legend className="mb-1">Información del solicitante</legend>
            <FloatingLabel
              variant="filled"
              label="Número de cédula"
              {...register("userCedula")}
              readOnly
              className="dark:text-white cursor-default"
              disabled={true}
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Nombre completo"
              {...register("userName")}
              readOnly
              className="dark:text-white cursor-default"
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Número de teléfono"
              {...register("userPhone")}
              readOnly
              className="dark:text-white cursor-default"
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Dirección de residencia"
              {...register("userAddress")}
              readOnly
              className="dark:text-white cursor-default"
            />
          </fieldset>

          <fieldset className="grid grid-cols-2 max-md:grid-cols-1 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del libro</legend>
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Código de signatura"
              value={book.SignatureCode || "N/A"}
              className="dark:text-white cursor-default"
              readOnly
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Numero de inscripción"
              value={book.InscriptionCode}
              className="dark:text-white cursor-default"
              readOnly
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Autor"
              value={book.Author || "Desconocido"}
              className="dark:text-white cursor-default"
              readOnly
            />
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Título"
              value={book.Title}
              className="dark:text-white cursor-default"
              readOnly
            />
          </fieldset>

          <fieldset className=" grid grid-cols-2 max-md:grid-cols-1 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del préstamo</legend>
            <FloatingLabel
              required
              className="dark:text-white"
              id="BookPickUpDate"
              variant="outlined"
              label="Fecha de recolección"
              type="date"
              min={minDate}
              {...register("BookPickUpDate")}
            />
            <FloatingLabel
              required
              className="dark:text-white"
              variant="outlined"
              label="Fecha de vencimiento"
              type="date"
              min={watch("BookPickUpDate")}
              max={maxDate}
              id="LoanExpirationDate"
              {...register("LoanExpirationDate")}
            />
            <div className=" col-span-2 space-y-1 max-md:col-span-1">
              <FloatingLabel
              className="dark:text-white"
                variant="outlined"
                label="Centro educativo o institución"
                helperText="En caso de no pertenecer a un centro educativo favor omita el campo anterior."
                {...register("institution")}
              />
            </div>
          </fieldset>
        </Modal.Body>
        <ModalFooters onClose={onClose}  isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default LendingChild
