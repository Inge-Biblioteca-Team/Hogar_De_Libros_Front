import { Button, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ChangeExpiredDate, Loans } from "../../Types/BookLoan";
import UseExtendLoan from "../../Hooks/Books/UseExtendLoan";
import { useForm } from "react-hook-form";
import { formatToYMD } from "../../../../components/FormatTempo";

const LoanRenuve = ({
  Loan,
  showChange,
  setShowChange,
}: {
  Loan: Loans;
  showChange: boolean;
  setShowChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: ExtendLoan, } = UseExtendLoan();

  const { register, handleSubmit, setValue } = useForm<ChangeExpiredDate>();

  useEffect(() => {
    if (Loan) {
      setValue("BookLoanId", Loan.BookLoanId);
      setValue("LoanExpirationDate", formatToYMD(Loan.LoanExpirationDate));
    }
  }, [Loan, setValue]);

  const onSubmit = (data: ChangeExpiredDate) => {
    ExtendLoan(data, {
      onSuccess: () => {
        setShowChange(false); 
      },
    });
  };

  return (
    <>
      <Modal show={showChange} onClose={() => setShowChange(false)} size={"md"}>
        <Modal.Header>Extension de fecha de devolución</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="">
              <label htmlFor="NewDate">Ingrese la fecha de devolución</label>
              <TextInput
                id="NewDate"
                type="date"
                {...register("LoanExpirationDate")}
              />
              <div className="flex justify-center gap-4 mt-10">
                <Button
                  color="red"
                  onClick={() => {
                    setShowChange(false);
                  }}
                >
                  Regresar
                </Button>
                <Button color="blue" type="submit">
                  Guardar
                </Button>
              </div>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default LoanRenuve;
