import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import AddEventsImage from "./AddEventsImage";
import { createEvents } from "../../types/Events";
import useCreateEvent from "../../Hooks/useCreateEvent";

const CreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<createEvents>();
  
  const { mutate: createEvent } = useCreateEvent({
    Open: setIsModalOpen,
    Reset: () => {
      reset();
      setImageUrl(null);
    },
  });

  const onSubmit = async (data: createEvents) => {
    if (imageUrl) {
      data.Image = imageUrl; 
    }
    try {
      await createEvent(data);
      toast.success("Evento añadido con éxito");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al añadir el evento:", error);
      toast.error("Hubo un error al añadir el evento");
    }
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("Image", url);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="w-40 bg-Body text-white mt-2 p-2 rounded-md hover:bg-blue-800"
      >
        Añadir Evento
      </button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Añadir nuevo Evento</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setIsImageModalOpen(true)}
                  src={imageUrl}
                  alt="Imagen del evento"
                  className="h-32 w-32 rounded-md cursor-pointer"
                />
              ) : (
                <div
                  onClick={() => setIsImageModalOpen(true)}
                  className="h-32 w-32 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <span>Selecciona una imagen</span>
                </div>
              )}
            </div>

            <fieldset className="grid grid-cols-2 gap-3 mt-4">
              <legend>Información Básica</legend>
              <div>
                <Label htmlFor="Location" value="Ubicación" />
                <TextInput
                  id="Location"
                  type="text"
                  {...register("Location", { required: true })}
                  placeholder="Escribe la ubicación del evento"
                />
                {errors.Location && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>

              <div>
                <Label htmlFor="Title" value="Título" />
                <TextInput
                  id="Title"
                  type="text"
                  {...register("Title", { required: true })}
                  placeholder="Escribe el título del evento"
                />
                {errors.Title && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3 mt-4">
              <legend>Detalles del Evento</legend>
              <div>
                <Label htmlFor="Details" value="Detalles" />
                <TextInput
                  id="Details"
                  type="text"
                  {...register("Details")}
                  placeholder="Detalles del evento"
                />
              </div>

              <div>
                <Label htmlFor="Category" value="Categoría" />
                <TextInput
                  id="Category"
                  type="text"
                  {...register("Category", { required: true })}
                  placeholder="Escribe la categoría del evento"
                />
                {errors.Category && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3 mt-4">
              <legend>Fecha y Hora</legend>
              <div>
                <Label htmlFor="Date" value="Fecha" />
                <TextInput
                  id="Date"
                  type="date"
                  {...register("Date", { required: true })}
                />
                {errors.Date && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <div>
                <Label htmlFor="Time" value="Hora" />
                <TextInput
                  id="Time"
                  type="time"
                  {...register("Time", { required: true })}
                />
                {errors.Time && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3 mt-4">
              <legend>Información Adicional</legend>
              <div>
                <Label htmlFor="TargetAudience" value="Público Objetivo" />
                <TextInput
                  id="TargetAudience"
                  type="text"
                  {...register("TargetAudience")}
                  placeholder="Ej. Adultos, jóvenes"
                />
              </div>
              <div>
                <Label htmlFor="InchargePerson" value="Persona a Cargo" />
                <TextInput
                  id="InchargePerson"
                  type="text"
                  {...register("InchargePerson")}
                  placeholder="Nombre de la persona a cargo"
                />
              </div>
            </fieldset>
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center">
            <Button
              color="failure"
              onClick={() => {
                setIsModalOpen(false);
                reset(); 
              }}
              tabIndex={2}
            >
              Cancelar
            </Button>
            <Button type="submit" color={"blue"}>
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <AddEventsImage
        showModal={isImageModalOpen}
        onCloseModal={() => setIsImageModalOpen(false)}
        onImageSelect={handleImageSelect}
      />
    </>
  );
};

export default CreateEvent;
