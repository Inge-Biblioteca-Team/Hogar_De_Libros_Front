import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Label, Modal, Select, TextInput } from "flowbite-react";
import { Artist } from "../../types/LocalArtist";
import { useForm } from "react-hook-form";
import { FaFacebookSquare, FaUserEdit } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import UseEditArtist from "../../Hooks/UseEditArtist";
const EditArtist = ({
  edit,
  setEdit,
  Artist,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  const { register, handleSubmit, setValue, reset, watch } = useForm<Artist>({
    defaultValues: {
      ID: Artist.ID,
      Name: Artist.Name,
      ArtisProfession: Artist.ArtisProfession,
      MoreInfo: Artist.MoreInfo,
      Cover: Artist.Cover,
      FBLink: Artist.FBLink,
      IGLink: Artist.IGLink,
      LILink: Artist.LILink,
    },
  });

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(watch("Cover"));

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("Cover", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setEdit(false);
    reset();
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  const { mutate: editArtist, isLoading } = UseEditArtist();

  const onSubmit = async (data: Artist) => {
    editArtist(data, {
      onSuccess: () => {
        setEdit(false);
      },
    });
  };

  return (
    <>
      <Modal  show={edit} onClose={() => setEdit(false)}>
        <Modal.Header className="dark:bg-neutral-900 bg-white">Editar artista</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] bg-white">
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setOpenImage(true)}
                  src={imageUrl}
                  alt="Imagen del artista"
                  className="h-32 w-32 rounded-full"
                />
              ) : (
                <FaUserEdit
                  size={120}
                  className=" cursor-pointer"
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
                  {...register("Name", { required: true })}
                  placeholder="Escribe el nombre del Artista"
                />
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="ArtisProfession"
                  value="Profesión del artista"
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
              <legend>Redes Sociales</legend>
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
                  {...register("LILink")}
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
          <ModalFooters onClose={onClose} isLoading={isLoading}/>
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

export default EditArtist;
