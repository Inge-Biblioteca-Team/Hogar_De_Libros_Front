import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { Label, Modal, Select, TextInput } from "flowbite-react";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import ModalFooters from "../../../../components/ModalFooters";
import OPTEventType from "../OPTEventType";
import { Events } from "../../types/Events";
import UseEditEvent from "../../Hooks/UseEditEvent";

const EditEvent = ({
  edit,
  setEdit,
  event,
}: {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  event: Events;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Events>({
    defaultValues: {
      Title: event.Title,
      Location: event.Location,
      Date: event.Date,
      Time: event.Time,
      Category: event.Category,
      Image: event.Image,
      TargetAudience: event.TargetAudience,
      InchargePerson: event.InchargePerson,
      EventId: event.EventId,
    },
  });

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

  const { mutate: update, isLoading } = UseEditEvent();

  const onSubmit = async (data: Events) => {
    update(data, {
      onSuccess: () => {
        setEdit(false);
      },
    });
  };

  return (
    <>
      <Modal show={edit} onClose={onClose}>
        <Modal.Header>Editar Evento</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="bg-white flex flex-col">
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
                <Select {...register("Category")} required>
                  <OPTEventType />
                </Select>
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
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del evento"
        Folder="Evento"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default EditEvent;
