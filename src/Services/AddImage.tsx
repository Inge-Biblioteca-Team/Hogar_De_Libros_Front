import { Modal, FileInput, Button } from "flowbite-react";
import { useCallback, useState } from "react";
import { uploadImage } from "./UploadImg";
import toast from "react-hot-toast";

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

  const handleLocalImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = e.target.files?.[0];
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/svg+xml",
      ];

      if (!uploadedFile) return;

      if (!allowedTypes.includes(uploadedFile.type)) {
        toast.error(
          "Formato no permitido. Solo se aceptan JPG, PNG, GIF, WEBP y SVG."
        );
        e.target.value = "";
        return;
      }

      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    },
    []
  );

  const handleConfirmLocalImage = async () => {
    if (file) {
      try {
        const filePath = await uploadImage(file);
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
      <Modal.Header>Subir Imagen Local</Modal.Header>
      <Modal.Body className="flex flex-col">
        <p className="mb-2 font-semibold">Cargar una imagen local:</p>
        <FileInput
          onChange={handleLocalImageUpload}
          accept=".jpg,.png,.pdf"
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
