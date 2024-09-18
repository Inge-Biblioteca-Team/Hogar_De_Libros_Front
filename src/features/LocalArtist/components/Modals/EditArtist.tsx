import { Dispatch, SetStateAction } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Artist } from "../../types/LocalArtist";

const EditArtist = ({
  edit,
  setEdit,
  Artist,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  return (
    <Modal show={edit} onClose={() => setEdit(false)}>
      <Modal.Header>
        <span>Artista: {Artist.Name}</span>
      </Modal.Header>
      <Modal.Body>
        <form action="">
        <fieldset className="mb-4">
            <legend className="text-lg font-semibold mb-2">
              Editar Información del Artista:
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <TextInput
                  type="text"
                  id="name"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <Label htmlFor="tipo">Profesión</Label>
                <TextInput
                  type="text"
                  id="tipo"
                  placeholder="Profesión del Artista"
                />
              </div>
              <div>
                <Label htmlFor="face">Facebook</Label>
                <TextInput
                  type="text"
                  id="face"
                  placeholder="Facebook del Artista"
                />
              </div>
              <div>
                <Label htmlFor="insta">Instagram</Label>
                <TextInput
                  type="text"
                  id="insta"
                  placeholder="Instagram del Artista"
                />
              </div>
              <div>
                <Label htmlFor="linkIn">LinkIn</Label>
                <TextInput
                  type="text"
                  id="LinkIn"
                  placeholder="LinkIn del Artista"
                />
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

export default EditArtist;
