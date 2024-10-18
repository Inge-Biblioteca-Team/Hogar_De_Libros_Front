import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Carousel, Label, Modal, TextInput } from "flowbite-react";
import { CreateRoom } from "../../Types/Room_Interface";
import UseCreateRooms from "../../Hooks/UseCreateRoms";
import AddImage from "../../Services/AddImage";

const CreateRooms = () => {
  const { register, reset, handleSubmit } = useForm<CreateRoom>();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const [imageUrls, setImageUrls] = useState<(string | null)[]>([null]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: createRoom } = UseCreateRooms();

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    reset();
    setImageUrls([null]);
  };

  const onSubmit = async (data: CreateRoom) => {
    const filteredImageUrls: string[] = [];
    for (let i = 0; i < imageUrls.length; i++) {
      if (imageUrls[i] !== null) {
        filteredImageUrls.push(imageUrls[i]!);
      }
    }

    data.image = filteredImageUrls;

    createRoom(data, {
      onSuccess: () => {
        handleModalClose();
        console.log(data);
      },
      onError: () => {},
    });
  };
  const removeImage = (index: number) => {
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const addImageUrl = (newUrl: string) => {
    setImageUrls((prevUrls) => [...prevUrls, newUrl]);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} color="blue">
        Añadir Sala
      </Button>
      <Modal show={isModalOpen} onClose={handleModalClose} size={"5xl"}>
        <Modal.Header>Crear Nueva Sala</Modal.Header>
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
                    <figure key={index}>
                      <Button
                        className="absolute bottom-2 z-50"
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
export default CreateRooms;
