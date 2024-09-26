
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { updateEvent } from "../../types/Events";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { editEvent } from "../../services/SvEvents";
import AddEventsImage from "./AddEventsImage";

const EditEvent = ({
    edit,
    setEdit,
    event,
  }: {
    edit: boolean;
    setEdit: Dispatch<SetStateAction<boolean>>;
    event: updateEvent;
  }) => {
    const { register, handleSubmit, setValue } = useForm<updateEvent>({
      defaultValues: {
        Title: event.Title,
        Location: event.Location,
        Date: event.Date,
        Time: event.Time,
        Category: event.Category,
        Image: event.Image,
        TargetAudience: event.TargetAudience,
        InchargePerson: event.InchargePerson,
      },
    });
  
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
  
    const onSubmit = async (data: updateEvent) => {
      try {
        await editEvent(event.EventId, data);
        alert("Evento editado con éxito");
        setEdit(false);
      } catch (error) {
        console.error("Error al actualizar evento:", error);
      }
    };
  
    const handleImageSelect = (url: string) => {
      setImageUrl(url);
      setValue("Image", url);
    };
  
    useEffect(() => {
      if (event) {
        setImageUrl(event.Image);
      }
    }, [event, setValue]);
  
    return (
      <>
        <Modal show={edit} onClose={() => setEdit(false)}>
          <Modal.Header>Editar Evento</Modal.Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
              <div className="w-full flex items-center justify-center mb-4">
                {imageUrl ? (
                  <img
                    onClick={() => setIsImageModalOpen(true)}
                    src={imageUrl}
                    alt="Imagen del evento"
                    className="h-32 w-32 rounded-full cursor-pointer"
                  />
                ) : (
                  <FaCalendarAlt
                    size={120}
                    className="cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                  />
                )}
              </div>
  
              <fieldset className="grid grid-cols-2 gap-3">
                <legend className="text-center w-full">
                    Información Básica
                </legend>
  
                <div className="mb-4">
                  <Label htmlFor="Title" value="Título" />
                  <TextInput
                    id="Title"
                    type="text"
                    {...register("Title", { required: true })}
                    placeholder="Escribe el título del evento"
                  />
                </div>
  
                <div className="mb-4">
                  <Label htmlFor="Location" value="Ubicación" />
                  <TextInput
                    id="Location"
                    type="text"
                    {...register("Location", { required: true })}
                    placeholder="Escribe la ubicación del evento"
                  />
                </div>
  
                <div className="mb-4">
                  <Label htmlFor="Date" value="Fecha" />
                  <TextInput
                    id="Date"
                    type="date"
                    {...register("Date", { required: true })}
                  />
                </div>
  
                <div className="mb-4">
                  <Label htmlFor="Time" value="Hora" />
                  <TextInput
                    id="Time"
                    type="time"
                    {...register("Time", { required: true })}
                  />
                </div>
  
                <div className="mb-4">
                  <Label htmlFor="Category" value="Categoría" />
                  <TextInput
                    id="Category"
                    type="text"
                    {...register("Category", { required: true })}
                    placeholder="Escribe la categoría del evento"
                  />
                </div>
  
                <div className="mb-4">
                  <Label htmlFor="TargetAudience" value="Público Objetivo" />
                  <TextInput
                    id="TargetAudience"
                    type="text"
                    {...register("TargetAudience")}
                    placeholder="Público objetivo del evento"
                  />
                </div>
              </fieldset>
              <fieldset>
              <div className="mb-4">
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
              <Button color="failure" onClick={() => setEdit(false)} tabIndex={2}>
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
  
  export default EditEvent;