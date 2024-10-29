import { Button, Label, Select, TextInput, Modal } from "flowbite-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse } from "../../types/Courses";
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
  const { register, reset, handleSubmit, watch, setValue } =
    useForm<createCourse>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: createCourse } = UseCreateCourse();

  const onSubmit = async (data: createCourse) => {
    createCourse(data, {
      onSuccess: () => {
        setIsModalOpen(false);
        reset();
      },
      onError: () => {},
    });
  };

  const tomorrow = addDay(new Date());

  const min = formatToYMD(tomorrow);

  const minfinaly = formatToYMD(watch("date"));

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("image", url);
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

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} color="blue">
        Añadir Curso
      </Button>
      <Modal
        show={isModalOpen}
        onClose={onClose}
        size={"5xl"}
      >
        <Modal.Header>Crear nuevo curso</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" grid grid-cols-3 gap-3">
            <fieldset className=" flex">
              <legend className=" font-bold pb-3">Imagen del curso</legend>
              <figure className=" w-full">
                {imageUrl ? (
                  <img
                    src={imageUrl}
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
                <TextInput className=" hidden" {...register("image")} />
              </figure>
            </fieldset>
            <div className=" col-span-2 grid grid-cols-2 gap-3">
              <fieldset className="flex flex-col justify-between">
                <legend className="font-bold pb-2">Información General</legend>
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
                    placeholder="Lugar donde se realizaran las sesiones"
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
                <legend className="font-bold pb-2">Fechas y matricula</legend>
                <div>
                  <Label htmlFor="startDate" value="Fecha de inicio" />
                  <TextInput
                    type="date"
                    id="startDate"
                    {...register("date")}
                    min={min}
                  />
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
                    {...register("endDate")}
                    min={minfinaly}
                  />
                </div>
                <span>
                  <Label htmlFor="duration" value="Duración del curso" />
                  <TextInput
                    type="number"
                    placeholder="Numero de sesiones Ej. 3"
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
                    placeholder="capacidad máxima del curso"
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
          <ModalFooters onClose={onClose} />
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
