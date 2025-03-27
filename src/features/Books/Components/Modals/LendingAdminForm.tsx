import { FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import ModalFooters from "../../../../components/ModalFooters";
import { formatToYMD } from "../../../../components/FormatTempo";
import { addDay } from "@formkit/tempo";
import { Book, BookLeading } from "../../Types/BooksTypes";
import { useForm } from "react-hook-form";
import UseLeadingRequest from "../../Hooks/UseLeadingRequest";
import { useQuery } from "react-query";
import { PersonData } from "../../../Users/Type/UserType";
import UseDebounce from "../../../../hooks/UseDebounce";
import { getUserInformationByCedula } from "../../../Users/Services/SvUsuer";

const LendingAdminForm = ({
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

  const { register, handleSubmit, watch, reset, setValue } =
    useForm<BookLeading>({
      defaultValues: {
        InscriptionCode: book.InscriptionCode,
        SignaCode: book.signatureCode,
        Title: book.Title,
        Author: book.Author,
        bookBookCode: book.BookCode,
      },
    });

  const maxDate = formatToYMD(addDay(watch("BookPickUpDate"), 5));

  const { mutate: createNew, isLoading } = UseLeadingRequest();

  const onConfirm = (data: BookLeading) => {
    createNew(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const cedula = UseDebounce(watch("userCedula"), 1000);

  const { data: User } = useQuery<PersonData>(
    ["userInformation", cedula],
    () =>
      cedula
        ? getUserInformationByCedula(cedula)
        : Promise.reject("Cedula no encontrada"),
    {
      enabled: !!cedula,
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: 1,
    }
  );

  useEffect(() => {
    if (User && User.results && User.resultcount > 0) {
      setValue(
        "userName",
        User.results[0].firstname + " " + User.results[0].lastname || ""
      );
    }
  }, [User, setValue]);

  return (
    <Modal dismissible show={open} onClose={onClose}>
      <Modal.Header>Solicitud de préstamo</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" flex flex-col gap-3">
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
          <fieldset className="grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del solicitante</legend>
            <FloatingLabel
              variant="outlined"
              label="Número de cédula"
              {...register("userCedula")}
              className=" cursor-default"
              type="number"
            />
            <FloatingLabel
              variant="outlined"
              label="Nombre completo"
              {...register("userName")}
              className=" cursor-default"
            />
            <FloatingLabel
              variant="outlined"
              label="Número de teléfono"
              {...register("userPhone")}
              className=" cursor-default"
            />
            <FloatingLabel
              variant="outlined"
              label="Dirección de residencia"
              {...register("userAddress")}
              className=" cursor-default"
            />
          </fieldset>
          <fieldset className=" grid grid-cols-2 gap-x-3 gap-y-1">
            <legend className="mb-1">Información del préstamo</legend>
            <FloatingLabel
              required
              id="BookPickUpDate"
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
              id="LoanExpirationDate"
              {...register("LoanExpirationDate")}
            />
            <div className=" col-span-2 space-y-1">
              <FloatingLabel
                variant="outlined"
                label="Centro educativo o institución"
                {...register("institution")}
              />
            </div>
          </fieldset>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default LendingAdminForm;
