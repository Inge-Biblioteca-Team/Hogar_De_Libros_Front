import {
  Button,
  Checkbox,
  FileInput,
  FloatingLabel,
  Label,
  Modal,
} from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { LiaSearchengin } from "react-icons/lia";

import { useQuery } from "react-query";
import UseUploadImage from "../../../Advice/Hooks/UseUploadImage";
import { CoverImage } from "../../Types/Types";
import { searchCovers } from "../../Services/BooksServices";
import { GetImageList } from "../../../../Services/UploadImg";

const ModalImageLoader = ({
  setOpen,
  open,
  selectImage,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  selectImage: (url: string) => void;
}) => {
  const [localImage, setLocalImage] = useState<string | null>(null);

  const onClose = () => {
    setOpen(false);
    setLocalImage(null);
  };

  const [localStorage, setLocal] = useState<boolean>(false);

  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const imageURL = URL.createObjectURL(uploadedFile);
      setLocalImage(imageURL);
    }
  };

  const { mutate: uploadImage } = UseUploadImage();

  const handleConfirmLocalImage = async () => {
    if (file) {
      uploadImage(file, {
        onSuccess: (filePath: string) => {
          selectImage(filePath);
          setLocalImage(null);
          setFile(null);
          onClose();
        },
      });
    }
  };

  const [searchKey, setSearchKey] = useState<string>("");

  const { data: images = [], refetch } = useQuery<CoverImage[], Error>(
    ["CoverList"],
    () => searchCovers(searchKey),
    {
      staleTime: Infinity,
    }
  );

  const handleSearch = () => {
    if (searchKey.trim()) {
      refetch();
    }
  };

  const { data: covers } = useQuery<[], Error>(
    ["imagesList"],
    () => GetImageList("Libros"),
    {
      enabled: localStorage,
      retry: 2,
    }
  );

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>
        Seleccionar caratula del libro
        <div className=" flex gap-3 items-center">
          <Checkbox onChange={(event) => setLocal(event.target.checked)} />
          <Label value="Utilizar imágenes locales" />
        </div>
      </Modal.Header>
      <Modal.Body>
        {localStorage ? (
          <>
            <FileInput
              onChange={handleImageUpload}
              className="custom-file-input"
            />
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
                  <Button color="blue" onClick={handleConfirmLocalImage}>
                    Confirmar
                  </Button>
                </div>
              </div>
            )}
            {!localImage && (
              <div className=" text-center mt-4">
                <div className="font-bold">Imágenes existentes</div>
                <div className=" h-60 w-full flex gap-5 flex-wrap">
                  {covers?.map((cover, index) => (
                    <figure key={index} className=" h-32 w-32">
                      <img
                        onClick={() => selectImage(cover)}
                        src={cover}
                        alt=""
                        className=" rounded-lg hover:scale-105"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="relative">
              <FloatingLabel
                variant="outlined"
                label="Búsqueda de caratula por nombre del recurso"
                onChange={(event) => setSearchKey(event.target.value)}
              />
              <button title="Buscar" type="submit" onClick={handleSearch}>
                <LiaSearchengin
                  className=" absolute top-3 z-50 right-4 hover:scale-105"
                  size={25}
                />
              </button>
            </div>
            {images.length > 0 && (
              <div className=" w-full text-center">
                <span className=" text-lg">Resultados de la búsqueda</span>
                <div className=" flex gap-3 flex-wrap justify-center">
                  {images.map((image) => (
                    <figure key={image.id}>
                      <img
                        title="Click para seleccionar la imagen"
                        src={image.imageLink}
                        alt={image.id}
                        onClick={() => selectImage(image.imageLink || "")}
                        className=" h-40 w-20 hover:scale-105"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalImageLoader;
