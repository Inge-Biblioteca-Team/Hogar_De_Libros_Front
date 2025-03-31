import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Button, Carousel, Label, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Room } from "../../Types/Room_Interface";
import UseUpdateRoom from "../../Hooks/UseUpdateRooms";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import {
  ChevronsLeft,
  ChevronsRight,
} from "../../../../components/Chrevrons/Chevrons";

const EditRoom = ({
  open,
  setOpen,
  room,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  room: Room;
}) => {
  const { register, handleSubmit, reset, setValue } = useForm<Room>({
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

  const initialImageUrls = useMemo(() => room.image || [], [room]);

  const [imageUrls, setImageUrls] = useState<string[]>(initialImageUrls);

  useEffect(() => {
    setImageUrls(initialImageUrls);
  }, [initialImageUrls]);

  const { mutate: updateRoom, isLoading } = UseUpdateRoom();

  const onSubmit = async (data: Room) => {
    updateRoom(data, {
      onSuccess: () => {
        handleModalClose();
      },
      onError: () => {},
    });
  };

  const handleModalClose = () => {
    setOpen(false);
    reset();
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
      <Modal show={open} onClose={handleModalClose} size={"5xl"}>
        <Modal.Header className="dark:bg-neutral-900">Editar Sala</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] bg-white">
            <div className=" grid  md:gap-4 max-sm:grid-cols-1 grid-cols-3 grid-rows-1 lg:gap-5">
              <fieldset className="flexflex-col w-full">
                <legend className="font-bold pb-2">Imágenes de la Sala</legend>
                <Carousel
                  slide={false}
                  indicators={false}
                  style={{ height: "15rem" }}
                  leftControl={<ChevronsLeft />}
                  rightControl={<ChevronsRight />}
                >
                  {imageUrls
                    .filter((url) => url !== null)
                    .map((url, index) => (
                      <figure key={index} className="relative">
                        <Button
                          className="absolute bottom-2 left-[35%] z-50 px-4 py-2"
                          color="red"
                          size={"xs"}
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
              <div className=" grid grid-cols-2 max-sm:gap-8 max-sm:mt-4 gap-4 col-span-2">
                <fieldset className=" flex flex-col justify-between">
                  <legend className="whitespace-nowrap font-bold pb-2">
                    Información General
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
            </div>
          </Modal.Body>
          <ModalFooters onClose={handleModalClose} isLoading={isLoading} />
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

export default EditRoom;
