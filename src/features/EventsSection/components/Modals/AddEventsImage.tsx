import { Button, FileInput, Modal } from "flowbite-react";
import { uploadEventImage } from "../../services/SvEvents";
import { useState } from "react";

const AddImage = ({
  showModal,
  onCloseModal,
  onImageSelect,
}: {
  showModal: boolean;
  onCloseModal: () => void;
  onImageSelect: (url: string) => void;
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
        const filePath = await uploadEventImage(file);
        onImageSelect(filePath);
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
      <Modal.Header>Subir Imagen del Evento</Modal.Header>
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