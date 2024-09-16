import { Dispatch, SetStateAction } from "react";
import { User } from "../../Type/UserType";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const EditUser = ({
  edit,
  setEdit,
  User,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  User: User;
}) => {
  return (
    <Modal show={edit} onClose={() => setEdit(false)}>
      <Modal.Header>
        <span>Editar Información del Usuario {User.name}</span>
      </Modal.Header>
      <Modal.Body>
        <form action="">
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
                />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <TextInput
                  type="text"
                  id="telefono"
                  placeholder="5057875"
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
                <select
                  title="Provincia de residencia"
                  id="provincia"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccione su provincia</option>
                </select>
              </div>
              <div>
                <Label htmlFor="canton">Cantón</Label>
                <select
                  id="canton"
                  title="Canton"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccione el cantón</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="direccion">Dirección</Label>
              <TextInput
                type="text"
                id="direccion"
                placeholder="Dirección completa"
              />
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">
              Rol y Privilegios
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rol">Rol</Label>
                <select
                  name=""
                  id=""
                  title="Rol"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Rol Del Usuario</option>
                </select>
              </div>
              <div>
                <Label htmlFor="privilegios">Privilegios de préstamo</Label>
                <select
                  id="privilegios"
                  title="Privilegios de Préstamos"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccione privilegios de préstamo</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center gap-9">
        <Button color={"failure"} onClick={() => setEdit(false)}>
            Cancelar
        </Button>
        <Button color={"blue"}>
            Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
