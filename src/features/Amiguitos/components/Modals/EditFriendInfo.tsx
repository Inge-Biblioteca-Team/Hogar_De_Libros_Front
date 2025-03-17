import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Friend } from "../../types/FriendType";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import OPTCategories from "../OPTCategories";
import OPTSubCategories from "../OPTSubCategories";
import UseEditFriend from "../../Hooks/UseEditFriend";

const EditFriendInfo = ({
  open,
  setOpen,
  friend,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  friend: Friend;
}) => {
  const { register, reset, handleSubmit } = useForm<Friend>({
    defaultValues: {
      UserFullName: friend.UserFullName,
      UserAddress: friend.UserAddress,
      UserPhone: friend.UserPhone,
      UserEmail: friend.UserEmail,
      PrincipalCategory: friend.PrincipalCategory,
      SubCategory: friend.SubCategory,
      Experience: friend.Experience,
      ExtraInfo: friend.ExtraInfo,
      FriendId: friend.FriendId,
    },
  });

  const onClose = () => {
    setOpen(false);
    reset();
  };

  const { mutate: editFriend, isLoading } = UseEditFriend();

  const onConfirm = (data: Friend) => {
    editFriend(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal onClose={onClose} show={open}>
      <Modal.Header>Editar información de amigo</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className=" grid grid-cols-2 gap-3">
          <FloatingLabel
            variant="outlined"
            label="Nombre completo"
            {...register("UserFullName")}
          />

          <FloatingLabel
            variant="outlined"
            label="Dirección de residencia"
            {...register("UserAddress")}
          />

          <FloatingLabel
            variant="outlined"
            label="Número de teléfono"
            {...register("UserPhone")}
          />

          <FloatingLabel
            variant="outlined"
            label="Correo electrónico"
            {...register("UserEmail")}
          />

          <FloatingLabel
            variant="outlined"
            label="Experiencia"
            {...register("Experience")}
          />

          <FloatingLabel
            variant="outlined"
            label="Información adicional"
            {...register("ExtraInfo")}
          />
          <div>
            <Label value="Categoría principal" />
            <Select {...register("PrincipalCategory")}>
              <OPTCategories />
            </Select>
          </div>
          <div>
            <Label value="Sub categoría" />
            <Select {...register("SubCategory")}>
              <OPTSubCategories />
            </Select>
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default EditFriendInfo;
