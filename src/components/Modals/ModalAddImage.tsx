import { Button, FileInput, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import uploadImage from "../../Services/UploadImg";

const AddImage = ({
  showModal,
  onCloseModal,
  onImageSelect,
  text,
}: {
  showModal: boolean;
  onCloseModal:  Dispatch<SetStateAction<boolean>>;
  onImageSelect: (url: string) => void;
  text: string;
}) => {
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    }
  };

  const handleConfirmLocalImage = async () => {
    if (file) {
      try {
        const filePath = await uploadImage(file);
        onImageSelect(filePath);
        setLocalImage(null);
        setFile(null);
        onCloseModal(false);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Modal show={showModal} onClose={()=>onCloseModal(false)} popup>
      <Modal.Header>Cargar Imagen {text} </Modal.Header>
      <Modal.Body className="flex flex-col">
        <p className="mb-2 font-semibold">Cargar una imagen local:</p>
        <FileInput onChange={handleImageUpload} className="custom-file-input" />
        {localImage && (
          <div className="mt-4">
            <p className="mb-2 font-semibold">Previsualización:</p>
            <img
              src={localImage ?? undefined}
              alt="Previsualización de la imagen local"
              className="rounded shadow-md w-full h-auto"
            />
            <Button
              className="mt-3"
              color="blue"
              onClick={handleConfirmLocalImage}
            >
              Confirmar
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddImage;
