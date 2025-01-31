import { Label, Modal, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import { useEffect } from "react";
import ModalFooters from "../../../../components/ModalFooters";

const ContacE = ({
  open,
  setOpen,
  User,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  User: User;
}) => {
  const { register, setValue, handleSubmit } = useForm<User>();

  useEffect(() => {
    if (User) {
      setValue("cedula", User.cedula);
      setValue("email", User.email);
      setValue("phoneNumber", User.phoneNumber);
    }
  }, [User, setValue]);

  const { mutate: patchUser, isLoading } = UseEditInfoUser();


  const handleConfirm = (data: User) => {
    patchUser(data,
      {
        onSuccess: () => {
          setOpen(false);
        }
      }
    );
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar Información De Contacto</Modal.Header>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body>
          <div>
            <Label>Teléfono</Label>
            <TextInput {...register("phoneNumber")} />
          </div>
          <div>
            <Label>Correo</Label>
            <TextInput {...register("email")} />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading} />
      </form>
    </Modal>
  );
};

export default ContacE;
