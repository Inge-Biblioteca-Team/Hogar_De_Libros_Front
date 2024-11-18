import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Carousel, Label, Modal, TextInput } from "flowbite-react";
import { Room } from "../../Types/Room_Interface";
import UseCreateRooms from "../../Hooks/UseCreateRoms";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import ModalFooters from "../../../../components/ModalFooters";

const CreateRooms = () => {
  const { register, reset, handleSubmit, setValue } = useForm<Room>();

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: createRoom } = UseCreateRooms();

  const handleModalClose = () => {
    setIsModalOpen(false);
    reset();
    setImageUrls([]);
  };

  const onSubmit = async (data: Room) => {
    createRoom(data, {
      onSuccess: () => {
        handleModalClose();
      },
    });
  };

  const handleImageSelect = (url: string) => {
    setImageUrls((prevUrls) => [...prevUrls, url]);
    setValue("image", [...imageUrls, url]);
    setOpenImage(false);
  };

  const [openImage, setOpenImage] = useState<boolean>(false);

  const removeImage = (index: number) => {
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const onClose = () => {
    setOpenImage(false);
  };

  return (
    <>
      <Button className="max-sm:w-full" onClick={() => setIsModalOpen(true)} color="blue">
        Añadir sala
      </Button>

      <Modal show={isModalOpen} onClose={handleModalClose} size={"5xl"}>
        <Modal.Header>Crear nueva sala</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="bg-white">
            <div className=" grid max-sm:grid-cols-1 grid-cols-3 grid-rows-1 gap-5">
              <fieldset className="flex flex-col w-full">
                <legend className="font-bold pb-2">Imágenes de la sala</legend>
                <Carousel
                  slide={false}
                  className="Custom-Carousel"
                  indicators={false}
                  style={{ height: "15rem" }}
                >
                  {imageUrls
                    .filter((url) => url !== null)
                    .map((url, index) => (
                      <figure key={index}>
                        <Button
                          className="absolute bottom-2 z-50 !rounded-md"
                          color={"red"}
                          onClick={() => removeImage(index)}
                        >
                          Eliminar
                        </Button>
                        <img
                          className=" w-full h-64"
                          src={url}
                          alt={`Image ${index + 1}`}
                        />
                      </figure>
                    ))}
                  <div
                    className="w-full h-full flex items-center justify-center cursor-pointer bg-gray-200"
                    onClick={() => setOpenImage(true)}
                  >
                    <p>Selecciona una imagen</p>
                  </div>
                </Carousel>
              </fieldset>
              <div className=" grid max-sm:gap-8 grid-cols-2 gap-4 lg:col-span-2">
                <fieldset className=" flex flex-col justify-between">
                  <legend className="whitespace-nowrap font-bold pb-2">
                    Información general
                  </legend>
                  <span>
                    <Label htmlFor="name" value="Nombre de la sala" />
                    <TextInput
                      required
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="Nombre de la sala"
                    />
                  </span>

                  <span>
                    <Label htmlFor="roomNumber" value="Número de sala" />
                    <TextInput
                      id="roomNumber"
                      type="number"
                      required
                      {...register("roomNumber")}
                      placeholder="0"
                    />
                  </span>

                  <span>
                    <Label htmlFor="area" value="Área de Sala" />
                    <TextInput
                      id="area"
                      type="number"
                      required
                      {...register("area")}
                      placeholder="0"
                    />
                  </span>
                </fieldset>
                <fieldset className=" flex flex-col justify-between">
                  <legend className="font-bold pb-2">Detalles de sala</legend>
                  <span>
                    <Label htmlFor="capacity" value="Aforo de sala" />
                    <TextInput
                      id="capacity"
                      type="number"
                      required
                      {...register("capacity")}
                      placeholder="0"
                    />
                  </span>

                  <span>
                    <Label htmlFor="observations" value="Observaciones" />
                    <TextInput
                      id="observations"
                      type="text"
                      {...register("observations")}
                      placeholder="Observaciones"
                    />
                  </span>

                  <span>
                    <Label htmlFor="location" value="Lugar de sala" />
                    <TextInput
                      id="location"
                      type="text"
                      required
                      {...register("location")}
                      placeholder="Lugar"
                    />
                  </span>
                </fieldset>
              </div>
            </div>
          </Modal.Body>
          <ModalFooters onClose={handleModalClose} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="de la sala"
        Folder="Salas"
        onSelectImage={handleImageSelect}
        onClose={onClose}
      />
    </>
  );
};
export default CreateRooms;
