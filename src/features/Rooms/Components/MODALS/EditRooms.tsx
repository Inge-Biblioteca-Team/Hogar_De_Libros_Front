import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Carousel, Label, Modal, TextInput } from "flowbite-react";
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
  const { register, handleSubmit, reset } = useForm<updateRooms>({
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

  const { mutate: updateRoom } = UseUpdateRoom();

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
    reset();
    setImageUrls(room.image ? [...room.image] : [null]);
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

  useEffect(() => {
    if (room.image) {
      setImageUrls([...room.image]);
    } else {
      setImageUrls([null]);
    }
  }, [room.image]);

  const addImageUrl = (newUrl: string) => {
    setImageUrls((prevUrls) => [...prevUrls, newUrl]);
  };

  const removeImage = (index: number) => {
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <>
      <Modal show={open} onClose={handleModalClose} size={"5xl"}>
        <Modal.Header>Editar Sala</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body
            className="grid gap-3 h-80"
            style={{ gridTemplateColumns: "39% 59%" }}
          >
            <fieldset className="flex flex-col">
              <legend className="font-bold pb-2">Imágenes de la Sala</legend>
              <Carousel slide={false} className="Custom-Carousel">
                {imageUrls
                  .filter((url) => url !== null)
                  .map((url, index) => (
                    <figure className="" key={index}>
                      <Button
                        className=" absolute z-50 bottom-2"
                        color={"failure"}
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
                  onClick={() => openImageModal()}
                  className="w-full h-full flex items-center justify-center cursor-pointer bg-gray-200"
                >
                  <p>Selecciona una imagen</p>
                </div>
              </Carousel>
            </fieldset>
            <div className=" grid grid-cols-2 gap-4">
              <fieldset className=" flex flex-col justify-between">
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
              <fieldset className=" flex flex-col justify-between">
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
          onAddImage={addImageUrl}
        />
      )}
    </>
  );
};

export default EditRoom;
