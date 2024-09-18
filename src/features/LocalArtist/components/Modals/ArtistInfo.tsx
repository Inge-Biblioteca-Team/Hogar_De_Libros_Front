import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Artist } from "../../types/LocalArtist";

const ArtistInfo = ({
  see,
  setSee,
  Artist,
}: {
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  return (
    <Modal show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Artista: {Artist.Name} </span>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-2 ml-3">
        <span className=" flex-col flex gap-2">
          <strong>Información Del Artista:</strong>
          <span>Nombre: {Artist.Name}</span>
          <span>Tipo de Profesión: {Artist.ArtisProfession}</span>
          <span>Información Relevante: {Artist.MoreInfo}</span>
          <span>Redes Sociales: {Artist.FBLink} {Artist.IGLink}{" "} {Artist.LILink}{" "}</span>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button color={"blue"} onClick={() => setSee(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtistInfo;
