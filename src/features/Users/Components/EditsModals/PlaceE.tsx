import { Label, Modal, Select, TextInput } from "flowbite-react";
import { User } from "../../Type/UserType";
import { useForm } from "react-hook-form";
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
      setValue("cedula", User.cedula);
      setValue("province", User.province);
      setValue("district", User.district);
      setValue("address", User.address);
    }
  }, [User, setValue]);

  const { mutate: patchUser, isLoading } = UseEditInfoUser();

  const handleConfirm = (data: User) => {
    patchUser(data,
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar información de residencia</Modal.Header>
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
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default PlaceE;
