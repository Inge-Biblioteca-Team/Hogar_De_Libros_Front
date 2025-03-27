import { Dispatch, SetStateAction } from "react";
import { Button, Modal, Spinner } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Artist } from "../../types/LocalArtist";
import UseDownArtist from "../../Hooks/UseDownArtist";

const DisableArtist = ({
  dow,
  setDow,
  Artist,
}: {
  dow: boolean;
  setDow: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  const { mutate: Disable, isLoading } = UseDownArtist();

  const handleDisbale = () => {
    Disable(Artist.ID);
    setDow(false);
  };

  return (
    <Modal dismissible show={dow} onClose={() => setDow(false)} popup size={"md"}>
      <Modal.Body>
        <div className="text-center mt-10">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            ¿Estás seguro de que deseas dar de baja al Artista?
          </h3>
          <p className="mb-4 text-md font-semibold text-gray-600 dark:text-gray-300">
            {Artist.Name}
          </p>
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={() => setDow(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button color="blue" onClick={() => handleDisbale()} disabled={isLoading}>
            {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DisableArtist;
