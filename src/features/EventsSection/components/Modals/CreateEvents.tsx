import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import useCreateEvent from "../../Hooks/useCreateEvent";
import { addDay, format } from "@formkit/tempo";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import ModalFooters from "../../../../components/ModalFooters";
import OptAges from "../OptAges";
import OPTEventType from "../OPTEventType";
import { Events } from "../../types/Events";

const CreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm<Events>();

  const { mutate: createEvent, isLoading } = useCreateEvent();

  const onSubmit = async (data: Events) => {
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

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("Image", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setIsModalOpen(false);
    reset();
    setImageUrl("");
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  const tomorrow = addDay(new Date());

  const toDay = format({
    date: tomorrow,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [dateWarning, setDateWarning] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(e.target.value);
    let correctedDate = new Date(inputDate);

    if (inputDate.getDay() === 5) {
      correctedDate.setDate(inputDate.getDate() + 2);
      setDateWarning("No se puede realizar la entrega de donativos sábados, se ajustó al lunes siguiente.");
    } else if (inputDate.getDay() === 6) {
      correctedDate.setDate(inputDate.getDate() + 1);
      setDateWarning("No se puede realizar la entrega de donativos domingo. Se ha ajustado al lunes más cercano.");
    } else {
      setDateWarning("");
    }
    const correctedDateStirng = correctedDate.toISOString().split("T")[0];
    setSelectedDate(correctedDateStirng);
    setValue("Date", correctedDateStirng);

    if(inputDate.getDay()===5 || inputDate.getDay()===6){
      setTimeout(()=> {
        setDateWarning("");
      }, 3000)
    }

  }

  return (
    <>
      <Button
        className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800 max-md:w-full "
        type="button"
        onClick={() => setIsModalOpen(true)}
        color={"blue"}
      >
        Añadir evento
      </Button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header className="dark:bg-neutral-900">
          Añadir nuevo evento
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] bg-white flex flex-col gap-4">
            <div className="w-full flex items-center justify-center">
              {imageUrl ? (
                <img
                  onClick={() => setOpenImage(true)}
                  src={imageUrl}
                  alt="Imagen del evento"
                  className="h-28 w-full rounded-md cursor-pointer"
                />
              ) : (
                <div
                  onClick={() => setOpenImage(true)}
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
                <Select required id="Category" {...register("Category")}>
                  <OPTEventType />
                </Select>
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3 ">
              <legend className="text-center w-full p-2">Fecha y hora</legend>
              <div>
                <Label htmlFor="Date" value="Fecha" />
                <TextInput
                  id="Date"
                  type="date"
                  min={toDay}
                  required
                  value={selectedDate}
                  {...register("Date")}
                  onChange={handleChange}
                />
                {dateWarning && (
                <p className="text-sm text-red-600 mt-1">{dateWarning}</p>
                 )}
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
                  min="07:00"
                  max="20:00"
                />
              </div>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-3">
              <legend className="text-center w-full">
                Información adicional
              </legend>
              <div>
                <Label htmlFor="TargetAudience" value="Público objetivo" />
                <Select {...register("TargetAudience")} required>
                  <OptAges />
                </Select>
              </div>
              <div>
                <Label htmlFor="InchargePerson" value="Persona a cargo" />
                <TextInput
                  id="InchargePerson"
                  type="text"
                  required
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

export default CreateEvent;
