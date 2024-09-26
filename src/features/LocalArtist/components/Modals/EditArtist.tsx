import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Artist, updateArtist } from "../../types/LocalArtist";
import { useForm } from "react-hook-form";
import { editArtist } from "../../services/SvArtist";
import AddImage from "./AddImage";
import { FaFacebookSquare, FaUserEdit } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const EditArtist = ({
  edit,
  setEdit,
  Artist,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  Artist: Artist;
}) => {
  const { register, handleSubmit, setValue } = useForm<updateArtist>({
    defaultValues: {
      Name: Artist.Name,
      ArtisProfession: Artist.ArtisProfession,
      MoreInfo: Artist.MoreInfo,
      Cover: Artist.Cover,
      FBLink: Artist.FBLink,
      IGLink: Artist.IGLink,
      LILink: Artist.LILink,
    },
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onSubmit = async (data: updateArtist) => {
    try {
      await editArtist(Artist.ID, data);
      alert("Artista editado con éxito");
      setEdit(false);
    } catch (error) {
      console.error("Error updating artist:", error);
    }
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("Cover", url);
  };

  useEffect(() => {
    if (Artist) {
      setImageUrl(Artist.Cover);
    }
  }, [Artist, setValue]);

  return (
    <>
      <Modal show={edit} onClose={() => setEdit(false)}>
        <Modal.Header>Editar Artista</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setIsImageModalOpen(true)}
                  src={imageUrl}
                  alt="Imagen del artista"
                  className="h-32 w-32 rounded-full"
                />
              ) : (
                <FaUserEdit
                  size={120}
                  className=" cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                />
              )}
            </div>
            <fieldset className="grid grid-cols-2 gap-3">
              <legend>Infomación Basica</legend>
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
                  value="Profesión del Artista"
                />
                <TextInput
                  id="ArtisProfession"
                  type="text"
                  {...register("ArtisProfession", { required: true })}
                  placeholder="Escribe la Profesión del Artista"
                />
              </div>
            </fieldset>
            <fieldset className=" grid-cols-2 grid gap-2">
              <legend>Redes Sociales</legend>
              <div className="mb-4">
                <Label htmlFor="FBLink" value="Facebook Link" />
                <TextInput
                  icon={FaFacebookSquare}
                  id="FBLink"
                  type="url"
                  {...register("FBLink")}
                  placeholder="https://facebook.com"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="IGLink" value="Instagram Link" />
                <TextInput
                  icon={RiInstagramFill}
                  id="IGLink"
                  type="url"
                  {...register("IGLink")}
                  placeholder="https://instagram.com"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="LILink" value="LinkedIn Link" />
                <TextInput
                  icon={BsLinkedin}
                  id="LILink"
                  type="url"
                  {...register("LILink")}
                  placeholder="https://linkedin.com"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="LILink" value="TikTok Link" />
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
              <Label htmlFor="MoreInfo" value="Más Información" />
              <TextInput
                id="MoreInfo"
                type="text"
                {...register("MoreInfo")}
                placeholder="Más información sobre el artista"
              />
            </div>
          </Modal.Body>
          <Modal.Footer className=" flex items-center justify-center">
            <Button color="failure" onClick={() => setEdit(false)} tabIndex={2}>
              Cancelar
            </Button>
            <Button type="submit" color={"blue"}>
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <AddImage
        showModal={isImageModalOpen}
        onCloseModal={() => setIsImageModalOpen(false)}
        onImageSelect={handleImageSelect}
      />
    </>
  );
};

export default EditArtist;
