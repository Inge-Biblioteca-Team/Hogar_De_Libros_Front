import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { updateEvent } from "../../types/Events";
import { Label, Modal, TextInput } from "flowbite-react";
import { editEvent } from "../../services/SvEvents";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import ModalFooters from "../../../../components/ModalFooters";

const EditEvent = ({
  edit,
  setEdit,
  event,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  event: updateEvent;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<updateEvent>({
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

  const UseClient = useQueryClient();

  const onSubmit = async (data: updateEvent) => {
    try {
      console.log("EventId:", event.EventId);
      await editEvent(event.EventId, data);
      toast.success("Evento editado con éxito");
      setEdit(false);
      UseClient.invalidateQueries("EventCatalog");
    } catch (error) {
      console.error("Error al actualizar evento:", error);
    }
  };

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const initialImageUrl = event.Image;
    setImageUrl(initialImageUrl);
  }, [event.Image]);

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("Image", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setEdit(false);
    reset();
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  return (
    <>
      <Modal show={edit} onClose={onClose}>
        <Modal.Header>Editar Evento</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" flex flex-col">
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setOpenImage(true)}
                  src={imageUrl}
                  alt="Imagen del evento"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              ) : (
                <FaCalendarAlt
                  size={120}
                  className="cursor-pointer"
                  onClick={() => setOpenImage(true)}
                />
              )}
            </div>

            <fieldset className="grid grid-cols-2 gap-3">
              <legend className="text-center w-full p-4">
                Información básica
              </legend>

              <div className="mb-4">
                <Label htmlFor="Title" value="Título" />
                <TextInput
                  id="Title"
                  type="text"
                  {...register("Title")}
                  required
                  placeholder="Escribe el título del evento"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="Location" value="Ubicación" />
                <TextInput
                  id="Location"
                  type="text"
                  {...register("Location")}
                  required
                  placeholder="Escribe la ubicación del evento"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="Date" value="Fecha" />
                <TextInput
                  id="Date"
                  type="date"
                  required
                  {...register("Date")}
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="Time" value="Hora" />
                <TextInput
                  type="time"
                  id="Time"
                  required
                  min={"07:00"}
                  max={"20:00"}
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
                <Label htmlFor="TargetAudience" value="Público objetivo" />
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
                <Label htmlFor="InchargePerson" value="Persona a cargo" />
                <TextInput
                  id="InchargePerson"
                  type="text"
                  {...register("InchargePerson")}
                  placeholder="Nombre de la persona a cargo"
                />
              </div>
            </fieldset>
          </Modal.Body>

          <ModalFooters onClose={onClose} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del evento"
        Folder="Eventos"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default EditEvent;
