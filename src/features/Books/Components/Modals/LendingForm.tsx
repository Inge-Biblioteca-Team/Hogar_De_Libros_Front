import { FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
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
    setWarning("");
  };

  const minDate = formatToYMD(new Date());

  const { currentUser } = useContext(UserContext);

  const { register, handleSubmit, watch, reset, setValue } = useForm<BookLeading>({
    defaultValues: {
      userCedula: currentUser?.cedula,
      userName: `${currentUser?.name} ${currentUser?.lastName}`,
      userPhone: currentUser?.phoneNumber,
      userAddress: currentUser?.address,
      InscriptionCode: book.InscriptionCode,
      SignaCode: book.signatureCode,
      Title: book.Title,
      Author: book.Author,
      bookBookCode: book.BookCode,
    },
  });

  const maxDate = formatToYMD(
    addDay(watch("BookPickUpDate"), currentUser?.loanPolicity)
  );
  const { mutate: createNew, isLoading } = UseLeadingRequest();

  const onConfirm = (data: BookLeading) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  const [warning, setWarning]= useState("");

  const correctDateIfWeekend = (fieldName: keyof BookLeading) => {
    const dateValue = watch(fieldName);
    if (!dateValue) return;

    const inputDate = new Date(dateValue);
    let correctedDate = new Date(inputDate);

    if (inputDate.getDay() === 5) {
      correctedDate.setDate(inputDate.getDate() + 2);
      showWarning("No se permiten fechas sábado o domingo. Fecha ajustada al lunes.");
    } else if (inputDate.getDay() === 6) {
      correctedDate.setDate(inputDate.getDate() + 1);
      showWarning("No se permiten fechas sábado o domingo. Fecha ajustada al lunes.");
    }

    const correctedDateString = correctedDate.toISOString().split("T")[0];
    if (correctedDateString !== dateValue) {
      setValue(fieldName, correctedDateString);
    }
  };

  const showWarning = (message: string) => {
    setWarning(message);
    setTimeout(() => {
      setWarning("");
    }, 3000); 
  };
  
  useEffect(() => {
    correctDateIfWeekend("BookPickUpDate");
  }, [watch("BookPickUpDate")]);

  useEffect(() => {
    correctDateIfWeekend("LoanExpirationDate");
  }, [watch("LoanExpirationDate")]);

  return (
    <Modal  show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">Solicitud de préstamo</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" flex bg-white dark:bg-[#2d2d2d] flex-col gap-3">
          <fieldset className="grid lg:grid-cols-2 gap-x-3 gap-y-1">
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

          <fieldset className="grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del libro</legend>
            <FloatingLabel
              variant="filled"
              disabled={true}
              label="Código de signatura"
              value={book.signatureCode || "N/A"}
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

          <fieldset className=" grid grid-cols-2 gap-x-3 gap-y-1">
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
            <div className=" col-span-2 space-y-1">
              <FloatingLabel
              className="dark:text-white"
                variant="outlined"
                label="Centro educativo o institución"
                helperText="En caso de no pertenecer a un centro educativo favor omita el campo anterior."
                {...register("institution")}
              />
            </div>
          </fieldset>
          {warning && (
            <div className="text-red-500 text-sm font-medium animate-pulse mt-2">
              {warning}
            </div>
          )}
        </Modal.Body>
        <ModalFooters onClose={onClose}  isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default LendingForm;