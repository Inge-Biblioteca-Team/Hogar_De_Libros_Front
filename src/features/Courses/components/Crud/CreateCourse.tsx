import { Button, Label, Select, TextInput, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse } from "../../types/Courses";
import AddImage from "../Modals/AddImage";
import { FaReadme } from "react-icons/fa6";
import UseCreateCourse from "../../Hooks/UseCreateCourse";
import { addDay, format } from "@formkit/tempo";
import CategoryOPT from "../OPTS/CategoryOPT";
import AgeOPT from "../OPTS/AgeOPT";
import ProgramsOPT from "../OPTS/ProgramsOPT";

const CreateCourse = () => {
  const { register, setValue, reset, handleSubmit, watch } =
    useForm<createCourse>();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [duration, setDuration] = useState("1");
  const [durationN, setDurationN] = useState("Días");

  const { mutate: createCourse } = UseCreateCourse();

  const onSubmit = async (data: createCourse) => {
    createCourse(data, {
      onSuccess: () => {
        setIsModalOpen(false);
        reset();
        setImageUrl("");
      },
      onError: () => {},
    });
  };

  const handleImageSelect = (url: string) => {
    setImageUrl(url);
    setValue("image", url);
  };

  const tomorrow = addDay(new Date());

  const minDay = format({
    date: tomorrow,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

  useEffect(() => {
    setValue("duration", durationN + " " + duration);
  }, [duration, durationN, setValue]);

  const minDay2 = format({
    date: watch("date"),
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} color="blue">
        Añadir Curso
      </Button>
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size={"5xl"}
      >
        <Modal.Header>Crear Nuevo Curso</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" grid grid-cols-3 gap-3">
            <fieldset className=" flex">
              <legend className=" font-bold pb-3">Imagen del Curso</legend>
              <figure className=" w-full">
                {imageUrl ? (
                  <img
                    onClick={() => setIsImageModalOpen(true)}
                    src={imageUrl}
                    alt="Imagen del programa"
                    className="w-full rounded-md cursor-pointer"
                    style={{ height: "100%" }}
                  />
                ) : (
                  <div
                    onClick={() => setIsImageModalOpen(true)}
                    className="w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                    style={{ height: "100%" }}
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
                  <Label htmlFor="courseName" value="Nombre del Curso" />
                  <TextInput
                    required
                    id="courseName"
                    type="text"
                    {...register("courseName")}
                    placeholder="Nombre del Curso"
                  />
                </span>

                <span>
                  <Label htmlFor="courseType" value="Categoría del Curso" />
                  <Select {...register("courseType")} id="courseType" required>
                    <CategoryOPT />
                  </Select>
                </span>

                <span>
                  <Label htmlFor="instructor" value="Encargado del Curso" />
                  <TextInput
                    id="instructor"
                    type="text"
                    required
                    {...register("instructor")}
                    placeholder="Encargado del Curso"
                  />
                </span>
                <span>
                  <Label htmlFor="location" value="Lugar de ejecución" />
                  <TextInput
                    id="location"
                    type="text"
                    required
                    {...register("location")}
                    placeholder="Lugar"
                  />
                </span>
                <div>
                  <Label htmlFor="targetAge" value="Edad Objetivo" />
                  <Select id="targetAge" required {...register("targetAge")}>
                    <AgeOPT />
                  </Select>
                </div>
                <div>
                  <Label htmlFor="program" value="Programa del Curso" />
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
                <legend className="font-bold pb-2">Fechas y Matricula</legend>
                <div>
                  <Label htmlFor="startDate" value="Fecha de inicio" />
                  <TextInput
                    type="date"
                    id="startDate"
                    {...register("date")}
                    min={minDay}
                  />
                </div>
                <div>
                  <Label htmlFor="courseTime" value="Hora de inicio" />
                  <TextInput
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
                  <Label htmlFor="startDate" value="Fecha De Fin" />
                  <TextInput
                    type="date"
                    {...register("endDate")}
                    min={minDay2}
                  />
                </div>
                <span>
                  <Label htmlFor="duration" value="Duración del Curso" />
                  <div className="w-full grid-cols-3 grid gap-1">
                    <TextInput
                      type="number"
                      placeholder="Duracion"
                      onChange={(event) => setDurationN(event.target.value)}
                    />
                    <Select
                      className=" col-span-2"
                      onChange={(event) => setDuration(event.target.value)}
                    >
                      <option value="Días">Días</option>
                      <option value="Meses">Meses</option>
                      <option value="Años">Años</option>
                    </Select>
                  </div>
                </span>
                <span>
                  <Label htmlFor="capacity" value="Cupos Disponibles" />
                  <TextInput
                    id="capacity"
                    type="number"
                    required
                    {...register("capacity")}
                    placeholder="0"
                  />
                </span>
                <div>
                  <Label htmlFor="materials" value="Observaciones" />
                  <TextInput
                    id="material"
                    {...register("materials")}
                    placeholder="Ej. Se necesita un lapiz"
                  />
                </div>
              </fieldset>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center">
            <Button
              color={"failure"}
              onClick={() => setIsModalOpen(false)}
              tabIndex={2}
            >
              Cancelar
            </Button>
            <Button color={"blue"} type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <AddImage
        showModal={isImageModalOpen}
        onCloseModal={() => setIsImageModalOpen(false)}
        onImageSelect={handleImageSelect}
      />
    </>
  );
};

export default CreateCourse;
