import { Modal, FileInput, Button } from "flowbite-react";
import { useState } from "react";
import { uploadImage } from "../../Books/services/SvSearchIMG";

const AddImage = ({
  showModal,
  onCloseModal,
  onAddImage,
}: {
  showModal: boolean;
  onCloseModal: () => void;
  onAddImage: (url: string) => void;
}) => {
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleLocalImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        onAddImage(filePath);
        setLocalImage(null);
        setFile(null);
        onCloseModal();
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Modal show={showModal} onClose={onCloseModal} popup>
      <Modal.Header>Subir Imagen Local</Modal.Header>
      <Modal.Body className="flex flex-col">
        <p className="mb-2 font-semibold">Cargar una imagen local:</p>
        <FileInput
          onChange={handleLocalImageUpload}
          className="custom-file-input"
        />
        {localImage && (
          <div className="mt-4">
            <p className="mb-2 font-semibold">Previsualización:</p>
            <img
              src={localImage}
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
