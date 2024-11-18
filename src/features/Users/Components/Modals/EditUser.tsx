import { Dispatch, SetStateAction, useEffect } from "react";
import { User } from "../../Type/UserType";
import { Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import ModalFooters from "../../../../components/ModalFooters";
import OptCanton from "../../../../components/OptCanton";
import OptProvincias from "../../../../components/OptProvincias";
import OptRole from "../OptRole";

const EditUser = ({
  edit,
  setEdit,
  User,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const { register, setValue, handleSubmit, watch } = useForm<User>();

  useEffect(() => {
    if (User) {
      setValue("email", User.email);
      setValue("phoneNumber", User.phoneNumber);
      setValue("province", User.province);
      setValue("district", User.district);
      setValue("address", User.address);
      setValue("role", User.role);
      setValue("loanPolicy", User.loanPolicy);
      setValue("cedula", User.cedula);
    }
  }, [User, setValue]);

  const { mutate: patchUser } = UseEditInfoUser();

  const handleConfirm = (data: User) => {
    patchUser(data, {
      onSuccess: () => {
        setEdit(false);
      },
    });
  };

  const onClose = () => {
    setEdit(false);
  };

  return (
    <Modal show={edit} onClose={onClose}>
      <Modal.Header>
        <span>Editar información del usuario {User.name}</span>
      </Modal.Header>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body className=" bg-white">
          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">
              Información de contacto
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Correo</Label>
                <TextInput
                  type="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  {...register("email")}
                />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <TextInput
                  type="text"
                  id="telefono"
                  placeholder="5057875"
                  {...register("phoneNumber")}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">
              Información de residencia
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="provincia">Provincia</Label>
                <Select
                  title="Provincia de residencia"
                  id="provincia"
                  {...register("province")}
                >
                  <OptProvincias />
                </Select>
              </div>
              <div>
                <Label htmlFor="canton">Cantón</Label>
                <Select id="canton" title="Canton" {...register("district")}>
                  <OptCanton province={watch("province")} />
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="direccion">Dirección</Label>
              <TextInput
                type="text"
                id="direccion"
                placeholder="Dirección completa"
                {...register("address")}
              />
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2 ">
              Rol y Privilegios
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <div className=" ">
                <Label htmlFor="rol">Rol</Label>
                <Select id="" title="Rol" {...register("role")}>
                  <OptRole />
                </Select>
              </div>
              <div>
                <Label htmlFor="loan">Privilegios de préstamo</Label>
                <Select {...register("loanPolicy")}>
                  <option value={0}>No se permite el préstamo</option>
                  <option value={8}>Máximo 1 libro cada 8 días</option>
                  <option value={15}>Máximo 2 libros por 15 días</option>
                  <option value={22}>Máximo 3 libros por 22 días</option>
                  <option value={30}>Máximo 5 libros por 30 días</option>
                  <option value={78}>Sin limite de préstamo</option>
                </Select>
              </div>
            </div>
          </fieldset>
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default EditUser;
