import { Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NewWSLoan } from "../../Types/ComputerLoan";
import UseGenerateWSLoan from "../../Hooks/Computers/UseGenerateWSLoan";
import ModalFooters from "../../../../components/ModalFooters";
import { useQuery } from "react-query";
import { PersonData } from "../../../Users/Type/UserType";
import UseDebounce from "../../../../hooks/UseDebounce";
import { getUserInformationByCedula } from "../../../Users/Services/SvUsuer";

const ModalewSWLoan = ({
  MNumber,
  open,
  setOpen,
}: {
  MNumber: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, handleSubmit, reset, watch } =
    useForm<NewWSLoan>();

  setValue("MachineNumber", MNumber);

  const { mutate, isLoading } = UseGenerateWSLoan();

  const onSubmit = (data: NewWSLoan) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  const onClose = () => {
    setOpen(false);
    reset();
  };

  const cedula = UseDebounce(watch("cedula"), 1000);

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
    if (User) {
     setValue("UserName", User.nombre)
    }
  }, [User, setValue]);

  return (
    <Modal show={open} onClose={onClose} size={"md"}>
      <Modal.Header className="dark:bg-neutral-900">
        <h5>Nuevo préstamo de equipo {MNumber} </h5>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-5">
          <div>
            <Label htmlFor="UserName">Número de cédula</Label>
            <TextInput
              placeholder="Numero de cédula sin guiones ni espacios"
              className=""
              type="number"
              pattern="[0-9]*"
              required
              {...register("cedula")}
            />
          </div>
          <div>
            <Label htmlFor="UserName">Nombre</Label>
            <TextInput
              placeholder="Tu nombre completo"
              type="text"
              required
              {...register("UserName")}
            />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default ModalewSWLoan;
