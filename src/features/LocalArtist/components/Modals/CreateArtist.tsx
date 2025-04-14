import { useCallback, useState } from "react";
import { Modal, Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Artist} from "../../types/LocalArtist";
import { FaFacebookSquare, FaUserEdit } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import UseCreateArtist from "../../Hooks/UseCreateArtist";

const CreateArtist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, setValue, reset } = useForm<Artist>();

  const { mutate: create, isLoading } = UseCreateArtist();

  const onSubmit = async (data: Artist) => {
    create(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("Cover", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setIsModalOpen(false);
    reset();
    setImageUrl("");
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800 w-full md:w-full lg:w-auto sm:w-40 bg-Body text-white mt-2 p-2 rounded-md hover:bg-blue-800"
      >
        Añadir artista
      </button>
      <Modal  show={isModalOpen} onClose={onClose}>
        <Modal.Header className="dark:bg-neutral-900 bg-white">Añadir nuevo artista</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] bg-white">
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setOpenImage(true)}
                  src={imageUrl}
                  alt="Imagen del artista"
                  className="h-32 w-32 rounded-full"
                  title="Editar imagen del artista"
                />
              ) : (
                <FaUserEdit
                  size={120}
                  className=" cursor-pointer"
                  title="Editar imagen del artista"
                  onClick={() => setOpenImage(true)}
                />
              )}
            </div>
            <fieldset className="max-sm:grid-cols-1 grid grid-cols-2 gap-3">
              <legend>Información básica</legend>
              <div>
                <Label htmlFor="Name" value="Nombre" />
                <TextInput
                  id="Name"
                  type="text"
                  {...register("Name")}
                  placeholder="Escribe el nombre del Artista"
                  required
                />
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="ArtisProfession"
                  value="Profesión del Artista"
                />
                <Select
                  required
                  id="ArtisProfession"
                  {...register("ArtisProfession")}
                >
                  <option value="">Seleccione el tipo de artista</option>
                  <option value="Músico">Músico</option>
                  <option value="Pintor">Pintor</option>
                  <option value="Escritor">Escritor</option>
                  <option value="Actor">Actor</option>
                  <option value="Escultor">Escultor</option>
                  <option value="Fotógrafo">Fotógrafo</option>
                </Select>
              </div>
            </fieldset>
            <fieldset className="max-sm:grid-cols-1 grid-cols-2 grid gap-2">
              <legend>Redes sociales</legend>
              <div className="mb-4">
                <Label htmlFor="FBLink" value="Facebook link" />
                <TextInput
                  icon={FaFacebookSquare}
                  id="FBLink"
                  type="url"
                  {...register("FBLink")}
                  placeholder="https://facebook.com"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="IGLink" value="Instagram link" />
                <TextInput
                  icon={RiInstagramFill}
                  id="IGLink"
                  type="url"
                  {...register("IGLink")}
                  placeholder="https://instagram.com"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="LILink" value="LinkedIn link" />
                <TextInput
                  icon={BsLinkedin}
                  id="LILink"
                  type="url"
                  {...register("LILink")}
                  placeholder="https://linkedin.com"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="LILink" value="TikTok link" />
                <TextInput
                  icon={AiFillTikTok}
                  id="LILink"
                  type="url"
                  placeholder="https://TikTok.com"
                />
              </div>
            </fieldset>
            <div className="mb-4">
              <Label htmlFor="MoreInfo" value="Más información" />
              <TextInput
                id="MoreInfo"
                type="text"
                {...register("MoreInfo")}
                placeholder="Más información sobre el artista"
              />
            </div>
          </Modal.Body>
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del artista"
        Folder="Artistas"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default CreateArtist;
