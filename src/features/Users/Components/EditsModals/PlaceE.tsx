import { Label, Modal, Select, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import { useEffect } from "react";
import OptProvincias from "../../../../components/OptProvincias";
import OptCanton from "../../../../components/OptCanton";
import ModalFooters from "../../../../components/ModalFooters";

const PlaceE = ({
  open,
  setOpen,
  User,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  User: User;
}) => {
  const { register, setValue, handleSubmit, watch } = useForm<User>();

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

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar Información De Residencia</Modal.Header>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body>
          <div>
            <Label>Provincia</Label>
            <Select {...register("province")}>
              <OptProvincias />
            </Select>
          </div>
          <div>
            <Label>Cantón</Label>
            <Select {...register("district")}>
              <OptCanton province={watch("province")} />
            </Select>
          </div>
          <div>
            <Label>Dirección</Label>
            <TextInput {...register("address")} />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default PlaceE;
