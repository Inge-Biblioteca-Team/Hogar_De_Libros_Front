import { Button, FloatingLabel, Modal, Spinner, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Loans } from "../../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseCancelLoan from "../../../Hooks/Books/UseCancelLoan";
import UserContext from "../../../../../Context/UserContext/UserContext";
import { BookLeading } from "../../../../Books/Types/BooksTypes";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseLeadingRequestBookExtended from "../../../Hooks/Books/UseLeadingRequestBookExtended";

const MDLoanInfo = ({
  Loan,
  showCancel,
  setShowCancel,
  showChange,
  setShowChange,
}: {
  Loan: Loans;
  showCancel: boolean;
  setShowCancel: Dispatch<SetStateAction<boolean>>;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: cancelLoan } = UseCancelLoan();

  const [Observations, setObservations] = useState<string>("");
  const handleCancel = () => {
    cancelLoan({
      LoanID: Loan.BookLoanId,
      person: Loan.Cedula,
      Observations: Observations,
    });
    setShowCancel(false);
  };

  const { currentUser } = useContext(UserContext);

  const {handleSubmit, register, setValue } = useForm<BookLeading>({
    defaultValues: {
      userCedula: currentUser?.cedula,
      userName: `${currentUser?.name} ${currentUser?.lastName}`,
      userPhone: currentUser?.phoneNumber,
      userAddress: currentUser?.address,
      InscriptionCode: Loan.book.InscriptionCode,
      SignaCode: Loan.book.signatureCode,
      Title: Loan.book.Title,
      Author: Loan.book.Author,
      bookBookCode: String(Loan.book.BookCode)
    },
  });

    useEffect(() => {
      if (currentUser) {
        setValue("BookLoanId", Loan.BookLoanId);
        setValue("userCedula", currentUser.cedula);
        setValue("userName", `${currentUser.name} ${currentUser.lastName}`);
        setValue("userPhone", currentUser.phoneNumber);
        setValue("userAddress", currentUser.address);
        
        // Campos relacionados con el libro
        setValue("InscriptionCode", Loan.book.InscriptionCode);
        setValue("SignaCode", Loan.book.signatureCode);
        setValue("Title", Loan.book.Title);
        setValue("Author", Loan.book.Author);
        setValue("bookBookCode", String(Loan.book.BookCode));
      }
    }, [currentUser, Loan.book, Loan.BookLoanId]); // Solo se ejecuta cuando currentUser cambia. Si Loan.book puede cambiar

    const { mutate: createNew, isLoading } = UseLeadingRequestBookExtended();

  const onConfirm = (data: BookLeading) => {
    createNew(data, {
      onSuccess: () => {
        setShowChange(false);
        toast.success("Registro creado exitosamente");
      },
    });
  };

  return (
    <>
      <Modal dismissible show={showCancel} popup onClose={() => setShowCancel(false)} size={"md"}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3>¿Está seguro de cancelar la solicitud de préstamo?</h3>
            <Textarea
              rows={3}
              onChange={(event) => setObservations(event.target.value)}
              placeholder="Escriba el motivo de su cancelación."
            />
            <div className="flex justify-center gap-4 mt-10">
              <Button
                disabled={isLoading}
                color="red"
                onClick={() => {
                  setShowCancel(false);
                }}
                title="Cancelar y regresar"
              >
                Volver
              </Button>
              <Button disabled={isLoading} title="Confirmar" color="blue" onClick={() => handleCancel()}>
              {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal dismissible show={showChange} popup onClose={() => setShowChange(false)} size="md">
        <Modal.Header>Solicitar Extensión</Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit(onConfirm)}>
          <div className="text-center">
            <h3>Formulario de Solicitud de Extensión</h3>
            <Textarea
              rows={3}
              placeholder="Ingresa el motivo de la extensión" />
              <fieldset className=" grid grid-cols-2 gap-x-3 gap-y-1">
                          <legend className="mb-1">Información del préstamo</legend>
                          <FloatingLabel
                            required
                            className="dark:text-white"
                            variant="outlined"
                            label="Fecha de vencimiento"
                            type="date"
                            id="LoanExpirationDate"
                            {...register("LoanExpirationDate")}
                          />
                          </fieldset>
            <div className="flex justify-center gap-4 mt-10">
              <Button
                disabled={isLoading}
                color="red"
                onClick={() => setShowChange(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                color="blue"
              >
                {isLoading ? (
                          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
                        ) : (
                          "Confirmar"
                        )}
              </Button>
            </div>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MDLoanInfo;