import { Modal, FileInput, Button } from "flowbite-react";
import { useQuery } from "react-query";
import { GetImageList } from "../../Services/UploadImg";

const ModalAddNewImage = ({
  open,
  handleUpload,
  text,
  handleConfirmImage,
  localImage,
  onExistImageSelect,
  handleClose,
}: {
  text: string;
  open: boolean;
  localImage: string | null;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmImage: () => void;
  onExistImageSelect: (image: string) => void;
  handleClose: () => void;
}) => {
  const { data: images } = useQuery<[], Error>(
    ["imagesList"],
    () => GetImageList("Avisos"),
    {
      staleTime: 600,
    }
  );

  return (
    <Modal show={open} onClose={handleClose} popup>
      <Modal.Header>Cargar Imagen {text} </Modal.Header>
      <Modal.Body className="flex flex-col">
        <FileInput onChange={handleUpload} className="custom-file-input" />
        {localImage && (
          <div className="mt-4">
            <p className="mb-2 font-semibold">Previsualización:</p>
            <img
              src={localImage ?? undefined}
              alt="Previsualización de la imagen local"
              className="rounded shadow-md w-full h-60"
            />
            <div className=" flex justify-between mt-4">
              <Button color="failure" onClick={handleClose}>
                Cancelar
              </Button>
              <Button color="blue" onClick={handleConfirmImage}>
                Confirmar
              </Button>
            </div>
          </div>
        )}
        {!localImage && (
          <div className=" text-center mt-4">
            <div className="font-bold">Imágenes existentes</div>
            <div className=" h-60 w-full flex gap-5 flex-wrap">
              {images?.map((image, index) => (
                <figure key={index} className=" h-32 w-32">
                  <img
                    onClick={() => onExistImageSelect(image)}
                    src={image}
                    alt=""
                    className=" rounded-lg hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddNewImage;
