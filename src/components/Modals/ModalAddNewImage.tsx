import { Modal, FileInput, Button } from "flowbite-react";
import { useQuery } from "react-query";
import { GetImageList } from "../../Services/UploadImg";
import { useCallback, useState } from "react";
import UseUploadImage from "../../hooks/UseUploadImage";

const ModalAddNewImage = ({
  open,
  text,
  Folder,
  onSelectImage,
  onClose,
}: {
  text: string;
  open: boolean;
  Folder: string;
  onSelectImage: (image: string) => void;
  onClose: () => void;
}) => {
  const { data: images } = useQuery<[], Error>(
    ["imagesList", Folder],
    () => GetImageList(Folder),
    {
      staleTime: 600,
      retry: 2,
    }
  );

  const { mutate: uploadImage } = UseUploadImage();

  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    }
  }, []);

  const handleConfirmImage = useCallback(() => {
    if (file) {
      uploadImage(
        { image: file, folder: Folder },
        {
          onSuccess: (filePath: string) => {
            onSelectImage(filePath);
            setLocalImage(null);
            setFile(null);
          },
        }
      );
    }
  }, [file, uploadImage, Folder, onSelectImage]);

  return (
    <Modal show={open} onClose={onClose} popup>
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
              <Button color="red" onClick={onClose}>
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
                <figure key={index}>
                  <img
                    onClick={() => onSelectImage(image)}
                    src={image}
                    alt=""
                    className=" rounded-lg hover:scale-105 h-32 w-32"
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
