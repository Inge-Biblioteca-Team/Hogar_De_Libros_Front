import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import AddEventsImage from "./AddEventsImage";
import { createEvents } from "../../types/Events";
import useCreateEvent from "../../Hooks/useCreateEvent";
import { addDay, format } from "@formkit/tempo";

const CreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { register, handleSubmit, setValue, reset } = useForm<createEvents>();

  const { mutate: createEvent } = useCreateEvent();

  const onSubmit = async (data: createEvents) => {
    if (imageUrl) {
      data.Image = imageUrl;
    }

    createEvent(data, {
      onSuccess: () => {
        reset();
        setImageUrl("");
        setIsModalOpen(false);
      },
      onError: () => {},
    });
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("Image", url);
  };

  const tomorrow = addDay(new Date());

  const toDay = format({
    date: tomorrow,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Button type="button" onClick={() => setIsModalOpen(true)} color={"blue"}>
        Añadir Evento
      </Button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Añadir nuevo Evento</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" flex flex-col gap-4">
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setIsImageModalOpen(true)}
                  src={imageUrl}
                  alt="Imagen del evento"
                  className="h-28 w-full rounded-md cursor-pointer"
                />
              ) : (
                <div
                  onClick={() => setIsImageModalOpen(true)}
                  className="h-28 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <span>Selecciona una imagen</span>
                </div>
              )}
            </div>
            <fieldset className="grid grid-cols-2 gap-3 ">
              <legend className="text-center w-full">
                Detalles del evento
              </legend>
              <div>
                <Label htmlFor="Location" value="Ubicación" />
                <TextInput
                  id="Location"
                  type="text"
                  required
                  {...register("Location", { required: true })}
                  placeholder="Escribe la ubicación del evento"
                />
              </div>

              <div>
                <Label htmlFor="Title" value="Título" />
                <TextInput
                  id="Title"
                  type="text"
                  required
                  {...register("Title")}
                  placeholder="Escribe el título del evento"
                />
              </div>
              <div>
                <Label htmlFor="Details" value="Detalles" />
                <TextInput
                  id="Details"
                  type="text"
                  required
                  {...register("Details")}
                  placeholder="Detalles del evento"
                />
              </div>

              <div>
                <Label htmlFor="Category" value="Categoría" />
                <Select
                 required
                   id="Category"
                 {...register("Category")}
                >
                  <option value="">Categoría del evento</option>
                  <option value="Exposición">Exposición de libro</option>
                  <option value="Presentación">Presentación de libro</option>
                  <option value="cultural">Artistico cultural</option>
                  <option value="Tertulias">Tertulias</option>
                  <option value="Inducción">Inducción</option>
                </Select>
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3 ">
              <legend className="text-center w-full p-2">Fecha y Hora</legend>
              <div>
                <Label htmlFor="Date" value="Fecha" />
                <TextInput
                  id="Date"
                  type="date"
                  min={toDay}
                  required
                  {...register("Date")}
                />
              </div>
              <div>
                <Label htmlFor="Time" value="Hora" />
                <TextInput
                  id="Time"
                  type="time"
                  required
                  {...register("Time", {
                    required: true,
                    onChange: (e) => {
                      const timeValue = e.target.value;
                      const timeWithSeconds = `${timeValue}:00`;
                      e.target.value = timeWithSeconds;
                    },
                  })}
                />
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3">
              <legend className="text-center w-full">
                Información Adicional
              </legend>
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
