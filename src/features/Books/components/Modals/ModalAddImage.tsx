import { Modal, TextInput, Button, Spinner, FileInput } from "flowbite-react";
import { useState } from "react";
import { IMGsearh } from "../../type/SearchIMG";
import { searchImages, uploadImage } from "../../services/SvSearchIMG";

const ModalAddImage = ({
  showModal,
  onCloseModal,
  onImageSelect,
}: {
  showModal: boolean;
  onCloseModal: () => void;
  onImageSelect: (url: string) => void;
}) => {
  const [searchIMG, setSearchIMG] = useState<string>("");
  const [images, setImages] = useState<IMGsearh[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setNoResult(false);
    try {
      const results = await searchImages(searchIMG);
      results.length === 0 ? setNoResult(true) : setImages(results);
    } catch (error) {
      console.error('Error al buscar imágenes:', error);
      setNoResult(true);
    }
    setLoading(false);
  };

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
        const imageUrl = await uploadImage(file);
        onImageSelect(imageUrl);
        setLocalImage(null);
        setFile(null);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };


  return (
    <Modal show={showModal} onClose={onCloseModal} popup>
      <Modal.Header>Buscar Carátulas de Libros</Modal.Header>
      <Modal.Body className="flex flex-col">
        <TextInput
          type="text"
          placeholder="Buscar carátulas"
          value={searchIMG}
          onChange={(e) => setSearchIMG(e.target.value)}
        />
        <Button className="mt-3" color={"blue"} onClick={handleSearch}>
          {loading ? (
            <span>
              <Spinner aria-label="Spinner button example" size="sm" color={"purple"} />
              <span className="pl-3">Cargando</span>
            </span>
          ) : (
            "Buscar"
          )}
        </Button>
        {noResult ? (
          "No hay resultados para el título buscado"
        ) : (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src.large}
                alt={image.alt}
                className="cursor-pointer rounded h-full w-full"
                onClick={() => onImageSelect(image.src.large)}
              />
            ))}
          </div>
        )}
        <div className="mt-6">
          <p className="mb-2 font-semibold">O cargar una imagen local</p>
          <FileInput onChange={handleLocalImageUpload}
          className="custom-file-input" />

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
                color={"blue"}
                onClick={handleConfirmLocalImage}
              >
                Confirmar Imagen Local
              </Button>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddImage;
