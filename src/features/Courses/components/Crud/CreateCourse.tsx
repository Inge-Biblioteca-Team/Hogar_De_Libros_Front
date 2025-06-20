import { Button, Label, Select, TextInput, Modal } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Courses } from "../../types/Courses";
import { FaReadme } from "react-icons/fa6";
import UseCreateCourse from "../../Hooks/UseCreateCourse";
import { addDay } from "@formkit/tempo";
import CategoryOPT from "../OPTS/CategoryOPT";
import AgeOPT from "../OPTS/AgeOPT";
import ProgramsOPT from "../OPTS/ProgramsOPT";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";

const CreateCourse = () => {
  const { register, reset, handleSubmit, watch, setValue } = useForm<Courses>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: createCourse, isLoading } = UseCreateCourse();

  const onSubmit = async (data: Courses) => {
    createCourse(data, {
      onSuccess: () => {
        setIsModalOpen(false);
        reset();
      },
      onError: () => { },
    });
  };

  const tomorrow = addDay(new Date());

  const min = formatToYMD(tomorrow);

  const minfinaly = formatToYMD(watch("date") || new Date());

  const [openImage, setOpenImage] = useState<boolean>(false);
  const image = watch("image");

  const handleImageSelect = (url: string) => {
    setValue("image", url);
    setOpenImage(false);
  };

  const onClose = () => {
    setIsModalOpen(false);
    reset();
  };

  const handleClose = () => {
    setOpenImage(false);
  };
  const [dateWarningStart, setDateWarningStart] = useState<string>("");
  const [dateWarningEnd, setDateWarningEnd] = useState<string>("");
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");

  // Función para manejar el cambio de fecha de inicio
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(e.target.value);
    let correctedDate = new Date(inputDate);

    if (inputDate.getDay() === 5) {
      correctedDate.setDate(inputDate.getDate() + 2);
      setDateWarningStart("No se puede seleccionar un sábado, se ajustó al lunes siguiente.");
    } else if (inputDate.getDay() === 6) {
      correctedDate.setDate(inputDate.getDate() + 1);
      setDateWarningStart("No se puede seleccionar un domingo, se ajustó al lunes siguiente.");
    } else {
      setDateWarningStart("");
    }

    setSelectedStartDate(correctedDate.toISOString().split("T")[0]);
    setValue("date", correctedDate);

    if (inputDate.getDay() === 6 || inputDate.getDay() === 0) {
      setTimeout(() => {
        setDateWarningStart("");
      }, 3000);
    }
  };

  // Función para manejar el cambio de fecha de fin
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(e.target.value);
    let correctedDate = new Date(inputDate);

    if (inputDate.getDay() === 5) {
      correctedDate.setDate(inputDate.getDate() + 2);
      setDateWarningEnd("No se puede seleccionar un sábado, se ajustó al lunes siguiente.");
    } else if (inputDate.getDay() === 6) {
      correctedDate.setDate(inputDate.getDate() + 1);
      setDateWarningEnd("No se puede seleccionar un domingo, se ajustó al lunes siguiente.");
    } else {
      setDateWarningEnd("");
    }

    setSelectedEndDate(correctedDate.toISOString().split("T")[0]);
    setValue("endDate", correctedDate);

    setTimeout(() => {
      setDateWarningEnd("");
    }, 2000);
  };

  return (
    <>
      <Button className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800 max-sm:w-full" onClick={() => setIsModalOpen(true)} color="blue">
        Añadir curso
      </Button>
      <Modal show={isModalOpen} onClose={onClose} size={"5xl"}>
        <Modal.Header className="dark:bg-neutral-900">Crear nuevo curso</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="dark:bg-[#2d2d2d] bg-white grid max-sm:grid-cols-1 grid-cols-3 gap-3">
            <fieldset className=" flex ">
              <legend className=" font-bold pb-3">Imagen del curso</legend>
              <figure className=" w-full max-sm:h-96">
                {image ? (
                  <img
                    src={image}
                    alt="Imagen del programa"
                    className="w-full rounded-md cursor-pointer"
                    style={{ height: "100%" }}
                    onClick={() => setOpenImage(true)}
                  />
                ) : (
                  <div
                    className="w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                    style={{ height: "100%" }}
                    onClick={() => setOpenImage(true)}
                  >
                    <span>Selecciona una imagen</span>
                  </div>
                )}
              </figure>
            </fieldset>
            <div className=" col-span-2 max-sm:grid-cols-1 grid grid-cols-2 gap-3">
              <fieldset className="flex flex-col justify-between ">
                <legend className="whitespace-nowrap max-sm:pt-2 max-sm:text-center font-bold pb-2">Información General</legend>
                <span>
                  <Label htmlFor="courseName" value="Nombre del curso" />
                  <TextInput
                    required
                    id="courseName"
                    type="text"
                    {...register("courseName")}
                    placeholder="Ej. Informática avanzada"
                  />
                </span>

                <span>
                  <Label htmlFor="courseType" value="Categoría del curso" />
                  <Select {...register("courseType")} id="courseType" required>
                    <CategoryOPT />
                  </Select>
                </span>

                <span>
                  <Label htmlFor="instructor" value="Encargado del curso" />
                  <TextInput
                    id="instructor"
                    type="text"
                    required
                    {...register("instructor")}
                    placeholder="Persona que impartirá el curso"
                  />
                </span>
                <span>
                  <Label htmlFor="location" value="Lugar de ejecución" />
                  <TextInput
                    id="location"
                    type="text"
                    required
                    {...register("location")}
                    placeholder="Lugar donde se realizarán las sesiones"
                  />
                </span>
                <div>
                  <Label htmlFor="targetAge" value="Edad objetivo" />
                  <Select id="targetAge" required {...register("targetAge")}>
                    <AgeOPT />
                  </Select>
                </div>
                <div>
                  <Label htmlFor="program" value="Programa del curso" />
                  <Select
                    id="program"
                    {...register("programProgramsId")}
                    icon={FaReadme}
                  >
                    <ProgramsOPT />
                  </Select>
                </div>
              </fieldset>

              <fieldset className="flex flex-col justify-between gap-2">
                <legend className="font-bold max-sm:text-center max-sm:pt-2 pb-2">Fechas y matrícula</legend>
                <div>
                  <Label htmlFor="startDate" value="Fecha de inicio" />
                  <TextInput
                    type="date"
                    id="startDate"
                    value={selectedStartDate}
                    {...register("date")}
                    min={min}
                    onChange={handleStartDateChange}
                  />
                  {dateWarningStart && (
                    <p className="text-sm text-red-600 mt-1">{dateWarningStart}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="courseTime" value="Hora de inicio" />
                  <TextInput
                    min="07:00"
                    max="20:00"
                    type="time"
                    id="courseTime"
                    {...register("courseTime", {
                      required: true,
                      onChange: (e) => {
                        const timeValue = e.target.value;
                        const timeWithSeconds = `${timeValue}:00`;
                        e.target.value = timeWithSeconds;
                      },
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="startDate" value="Fecha de fin" />
                  <TextInput
                    type="date"
                    value={selectedEndDate}
                    {...register("endDate")}
                    min={minfinaly}
                    onChange={handleEndDateChange}
                  />
                  {dateWarningEnd && (
                    <p className="text-sm text-red-600 mt-1">{dateWarningEnd}</p>
                  )}
                </div>
                <span>
                  <Label htmlFor="duration" value="Duración del curso" />
                  <TextInput
                    type="number"
                    placeholder="Número de sesiones Ej. 3"
                    {...register("duration")}
                  />
                </span>
                <span>
                  <Label htmlFor="capacity" value="Cupos disponibles" />
                  <TextInput
                    id="capacity"
                    type="number"
                    required
                    {...register("capacity")}
                    placeholder="Capacidad máxima del curso"
                  />
                </span>
                <div>
                  <Label htmlFor="materials" value="Observaciones" />
                  <TextInput
                    id="material"
                    {...register("materials")}
                    placeholder="Ej. Se necesitan materiales....."
                  />
                </div>
              </fieldset>
            </div>
          </Modal.Body>
          <ModalFooters onClose={onClose} isLoading={isLoading} />
        </form>
      </Modal>
      <ModalAddNewImage
        open={openImage}
        text="del curso"
        Folder="Cursos"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default CreateCourse;
