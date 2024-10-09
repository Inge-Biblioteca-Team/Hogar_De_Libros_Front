import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Room, updateRooms } from "../../Types/Room_Interface";
import UseUpdateRoom from "../../Hooks/UseUpdateRooms";
import AddImage from "../../Services/AddImage";

const EditRoom = ({
  open,
  setOpen,
  room,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  room: Room;
}) => {
  const { register, handleSubmit, setValue, reset, unregister } =
    useForm<updateRooms>({
      defaultValues: {
        roomId: room.roomId,
        name: room.name,
        roomNumber: room.roomNumber,
        image: room.image,
        location: room.location,
        area: room.area,
        capacity: room.capacity,
        observations: room.observations,
      },
    });

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<(string | null)[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const { mutate: updateRoom } = UseUpdateRoom();

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
    reset();
    setImageUrls(room.image ? [...room.image] : [null]);
    setCurrentCarouselIndex(0);
  };

  const onSubmit = async (data: updateRooms) => {
    const filteredImageUrls: string[] = [];
    for (let i = 0; i < imageUrls.length; i++) {
      if (imageUrls[i] !== null) {
        filteredImageUrls.push(imageUrls[i]!);
      }
    }

    data.image = filteredImageUrls;

    updateRoom(data, {
      onSuccess: () => {
        handleModalClose();
        console.log(data);
      },
      onError: () => {},
    });
  };

  const handleImageSelect = (url: string, index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = url;
    setImageUrls(newImageUrls);
    setValue(`image.${index}`, url);
  };

  const handleDeleteImage = (index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
    unregister(`image.${index}`);

    if (currentCarouselIndex >= newImageUrls.length) {
      setCurrentCarouselIndex(newImageUrls.length - 1);
    }
  };

  useEffect(() => {
    if (room.image) {
      setImageUrls([...room.image]);
    } else {
      setImageUrls([null]);
    }
  }, [room.image]);

  const CustomLeftControl = () => (
    <button
      type="button"
      onClick={() => {
        if (currentCarouselIndex > 0) {
          setCurrentCarouselIndex(currentCarouselIndex - 1);
        }
      }}
      className="flex items-center justify-center h-8 w-8 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
    >
      <span className="sr-only">Anterior</span>
      &#8592;
    </button>
  );

  const CustomRightControl = () => (
    <button
      type="button"
      onClick={() => {
        if (currentCarouselIndex < imageUrls.length - 1) {
          setCurrentCarouselIndex(currentCarouselIndex + 1);
        } else {
          // agregar uno nuevo
          setImageUrls([...imageUrls, null]);
          setCurrentCarouselIndex(currentCarouselIndex + 1);
        }
      }}
      className="flex items-center justify-center h-8 w-8 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
    >
      <span className="sr-only">Siguiente</span>
      &#8594;
    </button>
  );

  return (
    <>
      <Modal show={open} onClose={handleModalClose} size={"5xl"}>
        <Modal.Header>Editar Sala</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" grid grid-cols-3 gap-4">
            <fieldset className="flex flex-col">
              <legend className="font-bold pb-8">Imágenes de la Sala</legend>
              <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {imageUrls[currentCarouselIndex] ? (
                      <>
                        <img
                          onClick={() => openImageModal(currentCarouselIndex)}
                          src={imageUrls[currentCarouselIndex]!}
                          alt={`Imagen ${currentCarouselIndex + 1}`}
                          className="w-full h-full object-cover rounded-md cursor-pointer"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteImage(currentCarouselIndex)
                          }
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-200 focus:outline-none"
                        >
                          &#x2715;
                        </button>
                      </>
                    ) : (
                      <div
                        onClick={() => openImageModal(currentCarouselIndex)}
                        className="w-full h-full flex items-center justify-center cursor-pointer bg-gray-200"
                      >
                        <span>Selecciona una imagen</span>
                      </div>
                    )}
                    <TextInput
                      className="hidden"
                      {...register(`image.${currentCarouselIndex}`)}
                      value={imageUrls[currentCarouselIndex] || ""}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                  <CustomLeftControl />
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                  <CustomRightControl />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {imageUrls.map((_, index) => (
                    <button
                      title="Ir A"
                      key={index}
                      type="button"
                      onClick={() => setCurrentCarouselIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentCarouselIndex === index
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </fieldset>

            <div className=" col-span-2 grid grid-cols-2 gap-8">
              <fieldset>
                <legend className="font-bold pb-2">Información General</legend>
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
                  <Label htmlFor="roomNumber" value="Número de Sala" />
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
              <fieldset>
                <legend className="font-bold pb-2">Detalles de Sala</legend>
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
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center">
            <Button color={"failure"} onClick={handleModalClose} tabIndex={2}>
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {isImageModalOpen && (
        <AddImage
          showModal={isImageModalOpen}
          onCloseModal={closeImageModal}
          onImageSelect={handleImageSelect}
          imageIndex={currentImageIndex}
        />
      )}
    </>
  );
};

export default EditRoom;
