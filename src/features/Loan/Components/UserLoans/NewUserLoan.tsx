import {
  Breadcrumb,
  Button,
  Card,
  Label,
  Popover,
  TextInput,
} from "flowbite-react";
import {
  HomeRoute,
  ManageRoute,
  BooksRoute,
  CurrentRoute,
} from "../../../Books/components/Redirections";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetByBookCode } from "../../../Books/services/SvBooks";
import { Book } from "../../../Books/type/Book";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { newloan } from "../../Types/BookLoan";
import { addDays, subDays } from "date-fns";
import UseGenerateNewUserLoan from "../../Hooks/Books/UseGenerateNewUserLoan";

const NewUsaerLoan = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();
  const { register, setValue, handleSubmit } = useForm<newloan>();

  const { data: book } = useQuery<Book, Error>(
    ["OneBookForUser", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetByBookCode(BookCode);
    },
    { enabled: !!BookCode }
  );

  useEffect(() => {
    if (book) {
      const now = new Date();
      const localDate = now.toLocaleString("sv-SE", {
        timeZone: "America/Costa_Rica",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedDate = localDate.replace(" ", "T");
      setValue("Title", book.Title);
      setValue("bookBookCode", book.BookCode);
      setValue("SignaCode", book.SignatureCode);
      setValue("InscriptionCode", book.InscriptionCode);
      setValue("Author", book.Author);
      setValue("LoanRequestDate", formattedDate);
      setValue("BookPickUpDate", now.toLocaleDateString("sv-SE"));

    }
  }, [book, setValue]);

  const today = new Date();

  const futureDate = addDays(today, 29);
  const maxDate = futureDate.toISOString().split("T")[0];

  const previousDate = subDays(today, 1);
  const minDate = previousDate.toISOString().split("T")[0];

  const { mutate: NewLoan } = UseGenerateNewUserLoan();

  const onSubmit = (New: newloan) => {
    console.log(New);
    NewLoan(New);
  };
  const Navi = useNavigate();
  const goBack = () => {
    Navi(-1);
  };

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksRoute />
        <CurrentRoute CurrentPage={"Solicitud de Préstamo"} />
      </Breadcrumb>
      <div className="w-full flex place-content-center pt-10">
        <Card className="max-w-fit mx-auto bg-gray-100 ">
          <form
            className="grid grid-cols-3 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className=" flex flex-col gap-7">
              <legend className=" pb-3 font-bold">Sobre el solicitante</legend>
              <span>
                <Label htmlFor="disabledInput1">Número de Cedula</Label>
                <TextInput
                  type="text"
                  id="disabledInput1"
                  placeholder="Numero de cedula sin guiones"
                  {...register("userCedula")}
                  required
                />
              </span>
              <span>
                <Label htmlFor="disabledInput2">Nombre completo</Label>
                <TextInput
                  type="text"
                  id="disabledInput2"
                  placeholder="Nombre"
                />
              </span>
              <span>
                <Label htmlFor="disabledInput2">Correo Electrónico</Label>
                <TextInput
                  type="text"
                  id="disabledInput2"
                  placeholder="TuCorreo@ejemplo.com"
                />
              </span>
              <span>
                <Label htmlFor="disabledInput2">Número de teléfono</Label>
                <TextInput type="text" id="disabledInput2" placeholder="+xxx xxxx xxxx" />
              </span>
            </fieldset>
            <fieldset className=" flex flex-col gap-7">
              <legend className=" pb-3 font-bold">Sobre el Libro</legend>
              <span>
                <Label
                  htmlFor="InscriptionCode"
                  value="Código de Inscripción"
                />
                <TextInput
                  id="InscriptionCode"
                  type="text"
                  placeholder=""
                  {...register("InscriptionCode")}
                  disabled
                />
              </span>
              <span>
                <Label htmlFor="SignatureCode" value="Código de Signatura" />
                <TextInput
                  id="SignatureCode"
                  type="text"
                  placeholder=""
                  {...register("SignaCode")}
                  disabled
                />
              </span>
              <span>
                <Label htmlFor="title" value="Título del Libro" />
                <TextInput
                  id="title"
                  type="text"
                  placeholder=""
                  {...register("Title")}
                  disabled
                />
              </span>
              <span>
                <Label htmlFor="author" value="Autor" />
                <TextInput
                  id="author"
                  type="text"
                  placeholder=""
                  {...register("Author")}
                  disabled
                />
              </span>
            </fieldset>
            <fieldset className=" flex flex-col gap-7">
              <legend className=" pb-3 font-bold">Sobre el prestamo</legend>
              <span>
                <Label htmlFor="disabledInput1">
                  Fecha y hora de Solicitud
                </Label>
                <TextInput
                  id="datetimeRequest"
                  type="datetime-local"
                  {...register("LoanRequestDate")}
                  disabled
                />
              </span>
              <span>
                <Label htmlFor="disabledInput2">Fecha de recolección </Label>
                <TextInput
                  type="date"
                  {...register("BookPickUpDate")}
                  min={minDate}
                />
              </span>
              <span>
                <Label htmlFor="disabledInput2">
                  Fecha de vencimiento del prestamo
                </Label>
                <TextInput
                  type="date"
                  {...register("LoanExpirationDate")}
                  min={minDate}
                  max={maxDate}
                />
              </span>
              <div className="flex flex-col justify-end pt-6">
                <Popover
                  aria-labelledby="default-popover"
                  content={
                    <div className=" flex flex-col items-center gap-4 m-3">
                      <p>Esta seguro?</p>
                      <div className=" flex gap-3">
                        <Button
                          color={"failure"}
                          onClick={() => goBack()}
                          type="button"
                        >
                          Cancelar
                        </Button>
                        <Button color={"success"} type="submit">
                          Confirmar
                        </Button>
                      </div>
                    </div>
                  }
                >
                  <Button color={"blue"}>Enviar Solicitud</Button>
                </Popover>
              </div>
            </fieldset>
          </form>
        </Card>
      </div>
    </>
  );
};

export default NewUsaerLoan;
