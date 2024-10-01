import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Room, updateRooms } from "../../Types/Room_Interface";
import UseUpdateRoom from "../../Hooks/UseUpdateRooms";
import AddImage from "../../../../Services/AddImage";

const EditRoom = ({
  open,
  setOpen,
  room,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  room: Room;
}) => {
  const { register, handleSubmit, setValue } = useForm<updateRooms>({
    defaultValues: {
      roomId: room.roomId,
      name: room.name,
      roomNumber: room.roomNumber,
      image: room.image,
      location: room.location,
      area: room.area,
      capacity: room.capacity
    },
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const { mutate: updateRoom } = UseUpdateRoom();

  const onSubmit = async (data: updateRooms) => {
    updateRoom(data, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: () => {},
    });
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("image", url);
  };

  useEffect(() => {
    if (room.image) {
      setImageUrl(room.image);
    }
  }, [room.image]);

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} size={"5xl"}>
        <Modal.Header>Editar Sala</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" grid grid-cols-3 gap-3">
                        <fieldset className=" flex">
                            <legend className=" font-bold pb-3">Imagen de la Sala</legend>
                            <figure className=" w-full">
                                {imageUrl ? (
                                    <img
                                        onClick={() => setIsImageModalOpen(true)}
                                        src={imageUrl}
                                        alt="Imagen de la sala"
                                        className="w-full rounded-md cursor-pointer"
                                        style={{ height: "100%" }}
                                    />
                                ) : (
                                    <div
                                        onClick={() => setIsImageModalOpen(true)}
                                        className="w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                                        style={{ height: "100%" }}
                                    >
                                        <span>Selecciona una imagen</span>
                                    </div>
                                )}
                                <TextInput className=" hidden" {...register("image")} />
                            </figure>
                        </fieldset>


                        <div className=" col-span-2 grid grid-cols-2 gap-3">
                            <fieldset className="flex flex-col justify-between">
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

                                <span>
                                    <Label htmlFor="capacity" value="Salas Disponibles" />
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
                                        required
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
            <Button
              color={"failure"}
              onClick={() => setOpen(false)}
              tabIndex={2}
            >
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
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

export default EditRoom;