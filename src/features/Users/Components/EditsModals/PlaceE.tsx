import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import { useEffect } from "react";

const PlaceE = ({
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
      setValue("province", User.province);
      setValue("district", User.district);
      setValue("address", User.address);
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
            <Label>Provincia</Label>
            <Select {...register("province")}>
              <option value="">Seleccione la provincia de residencia</option>
              <option value="Guanacaste">Guanacaste</option>
              <option value="San Jose">San Jose</option>
            </Select>
          </div>
          <div>
            <Label>Canton</Label>
            <Select {...register("district")}>
              <option value="">Seleccione su canton de residencia</option>
              <option value="Nicoya">Nicoya</option>
              <option value="Moravia">Moravia</option>
            </Select>
          </div>
          <div>
            <Label>Direccion</Label>
            <TextInput {...register("address")} />
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"failure"}  onClick={() => setOpen(false)} >Cancelar</Button>
          <Button color={"blue"} type="submit">
            Confirmar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default PlaceE;
