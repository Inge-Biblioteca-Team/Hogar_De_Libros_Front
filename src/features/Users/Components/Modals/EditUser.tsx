import { Dispatch, SetStateAction, useEffect } from "react";
import { User } from "../../Type/UserType";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import UseEditInfoUser from "../../Hooks/UseEditInfoUser";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

const EditUser = ({
  edit,
  setEdit,
  User,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  const { register, setValue, handleSubmit } = useForm<User>();

  useEffect(() => {
    if (User) {
      setValue("email", User.email);
      setValue("phoneNumber", User.phoneNumber);
      setValue("province", User.province);
      setValue("district", User.district);
      setValue("address", User.address);
      setValue("role", User.role);
    }
  }, [User, setValue]);

  const { mutate: patchUser } = UseEditInfoUser();

  const useClient = useQueryClient();

  const handleConfirm = (data: User) => {
    patchUser(
      { user: data, cedula: User.cedula },
      {
        onSuccess: () => {
          setEdit(false);
          toast.success("Editado correctamente");
          useClient.invalidateQueries("UsersMG");
        },
        onError: () => {
          toast.error("Error al editar");
        },
      }
    );
  };

  return (
    <Modal show={edit} onClose={() => setEdit(false)}>
      <Modal.Header>
        <span>Editar Información del Usuario {User.name}</span>
      </Modal.Header>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body>
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
                  <option value="">Seleccione su provincia</option>
                  <option value="GT">Guanacaste</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="canton">Cantón</Label>
                <Select id="canton" title="Canton" {...register("district")}>
                  <option value="">Seleccione el cantón</option>
                  <option value="NI">Nicoya</option>
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
            <legend className="text-lg font-semibold mb-2">
              Rol y Privilegios
            </legend>

            <Label htmlFor="rol">Rol</Label>
            <Select id="" title="Rol" {...register("role")}>
              <option value="">Rol Del Usuario</option>
              <option value="admin">Administrador</option>
              <option value="creator">Asistente</option>
              <option value="external_user">Usuario Externo</option>
              <option value="viewer">Usuario Basico</option>
            </Select>

            <div></div>
          </fieldset>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center gap-9">
          <Button color={"failure"} onClick={() => setEdit(false)}>
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

export default EditUser;
