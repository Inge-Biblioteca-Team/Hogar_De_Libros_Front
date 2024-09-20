import { Button, Label, Modal, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import toast from "react-hot-toast";
import { useEffect } from "react";

const GeneralInfoE = ({
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
      setValue("name", User.name);
      setValue("lastName", User.lastName);
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

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Editar Información De Residencia</Modal.Header>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body>
          <div>
            <Label>Nombre</Label>
            <TextInput {...register("name")} />
          </div>
          <div>
            <Label>Apellidos</Label>
            <TextInput {...register("lastName")} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color={"failure"} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Confirmar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default GeneralInfoE;
