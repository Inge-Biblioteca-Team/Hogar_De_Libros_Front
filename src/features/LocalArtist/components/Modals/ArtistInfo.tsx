import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { Artist } from "../../types/LocalArtist";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
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
    <Modal dismissible show={see} onClose={() => setSee(false)}>
      <Modal.Header>
        <span>Artista: {Artist.Name} </span>
      </Modal.Header>
      <Modal.Body className="flex flex-col gap-2 ml-3">
        <figure className=" w.full flex items-center justify-center">
          <img
            src={Artist.Cover}
            alt=""
            className=" rounded-full h-64 shadow-2xl w-64"
          />
        </figure>
        <span className=" flex-col flex gap-2 text-center">
          <strong>Información del artista</strong>
          <span>Nombre: {Artist.Name}</span>
          <span>Profesión: {Artist.ArtisProfession}</span>
          {Artist.MoreInfo == "" ? (
            ""
          ) : (
            <span>Información Relevante: {Artist.MoreInfo}</span>
          )}
          <span className="flex items-center justify-center gap-3">
            {Artist.LILink == "" ? (
              ""
            ) : (
              <a href={Artist.LILink} target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={24} />
                {""}
              </a>
            )}

            {Artist.FBLink == "" ? (
              ""
            ) : (
              <a href={Artist.FBLink} target="_blank" rel="noopener noreferrer">
                <AiFillTikTok size={29} /> {""}
              </a>
            )}
            {Artist.IGLink == "" ? (
              ""
            ) : (
              <a href={Artist.IGLink} target="_blank" rel="noopener noreferrer">
                <RiInstagramFill size={29} /> {""}
              </a>
            )}

            {Artist.FBLink == "" ? (
              ""
            ) : (
              <a href={Artist.FBLink} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={26} /> {""}
              </a>
            )}
          </span>
        </span>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"blue"} onClick={() => setSee(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtistInfo;
