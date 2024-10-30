import { Label, Modal, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
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
      setValue("email", User.email);
      setValue("phoneNumber", User.phoneNumber);
    }
  }, [User, setValue]);

  const { mutate: patchUser } = UseEditInfoUser();

  const useClient = useQueryClient();

  const handleConfirm = (data: User) => {
    patchUser(
      { user: data, cedula: User.cedula },
      {
        onSuccess: () => {
          setOpen(false);
          toast.success("Editado correctamente");
          useClient.invalidateQueries("userInfo");
        },
        onError: () => {
          toast.error("Error al editar");
        },
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
        <ModalFooters onClose={onClose}/>
      </form>
    </Modal>
  );
};

export default ContacE;
