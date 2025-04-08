import {
  Button,
  FloatingLabel,
  Modal,
  Spinner,
  Textarea,
} from "flowbite-react";
import {
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { LoansRes } from "../../../Types/BookLoan";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseCancelLoan from "../../../Hooks/Books/UseCancelLoan";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UseLeadingRequestBookExtended from "../../../Hooks/Books/UseLeadingRequestBookExtended";
import { formatToYMD } from "../../../../../components/FormatTempo";
import { addDay } from "@formkit/tempo";
import { ExtendBookLeading } from "../../../../Books/Types/BooksTypes";

const MDLoanInfo = ({
  Loan,
  showCancel,
  setShowCancel,
  showChange,
  setShowChange,
}: {
  Loan: LoansRes;
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
      person: Loan.userCedula,
      Observations: Observations,
    });
    setShowCancel(false);
  };

  const { handleSubmit, register } = useForm<ExtendBookLeading>({
    defaultValues: {
      BookLoanId: Loan.BookLoanId
    },
  });


  const { mutate: createNew, isLoading } = UseLeadingRequestBookExtended();

  const onConfirm = (data: ExtendBookLeading) => {
    createNew(data, {
      onSuccess: () => {
        setShowChange(false);
      },
    });
  };

  return (
    <>
      <Modal
        dismissible
        show={showCancel}
        popup
        onClose={() => setShowCancel(false)}
        size={"md"}
      >
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
              <Button
                disabled={isLoading}
                title="Confirmar"
                color="blue"
                onClick={() => handleCancel()}
              >
                {isLoading ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />{" "}
                    <p className="pl-3">Cargando...</p>
                  </>
                ) : (
                  "Confirmar"
                )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        dismissible
        show={showChange}
        popup
        onClose={() => setShowChange(false)}
        size="md"
      >
        <Modal.Header>Solicitar Extensión</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onConfirm)}>
            <div className="text-center space-y-4">
              <h3>Formulario de solicitud de extensión</h3>
              <div>
                <Textarea
                  rows={3}
                  placeholder="Ingresa el motivo de la extensión"
                  {...register("Reason")}
                />
              </div>
              <fieldset className="">
                <legend className="mb-1">
                  Hasta que fecha devolverias el libro
                </legend>
                <FloatingLabel
                  required
                  className="dark:text-white"
                  variant="outlined"
                  label="Fecha de vencimiento"
                  type="date"
                  min={formatToYMD(new Date())}
                  max={formatToYMD(addDay(new Date(), 30))}
                  id="LoanExpirationDate"
                  {...register("LoanExpirationDate", {
                    required: "La fecha es requerida",
                    validate: (value) => {
                      const selectedDate = new Date(value);
                      const day = selectedDate.getDay();
                      if (day === 0 || day === 6) {
                        return toast.error("No se permite seleccionar fines de semana")
                      }
                      return true;
                    },
                  })}
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
                <Button type="submit" disabled={isLoading} color="blue">
                  {isLoading ? (
                    <>
                      <Spinner aria-label="Spinner button example" size="sm" />{" "}
                      <p className="pl-3">Cargando...</p>
                    </>
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
