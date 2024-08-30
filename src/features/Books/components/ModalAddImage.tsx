import { Modal, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import searchImages from "../services/SvSearchIMG";
import { IMGsearh } from "../type/SearchIMG";

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

  const handleSearch = async () => {
    const results = await searchImages(searchIMG);
    setImages(results);
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
        <Button className="mt-3" onClick={handleSearch}>
          Buscar
        </Button>
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
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddImage;