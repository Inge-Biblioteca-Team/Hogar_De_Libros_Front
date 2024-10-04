import { Courses, updateCourse } from "../../types/Courses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import AddImage from "../Modals/AddImage";
import { addDay, format } from "@formkit/tempo";
import UseUpdateCourse from "../../Hooks/UseUpdateCourse";
import { FaReadme } from "react-icons/fa6";
import CategoryOPT from "../OPTS/CategoryOPT";
import AgeOPT from "../OPTS/AgeOPT";
import ProgramsOPT from "../OPTS/ProgramsOPT";

const EditCourse = ({
  open,
  setOpen,
  course,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  course: Courses;
}) => {
  const { register, handleSubmit, setValue, watch } = useForm<updateCourse>({
    defaultValues: {
      Id: course.courseId,
      date: course.date,
      courseTime: course.courseTime,
      location: course.location,
      instructor: course.instructor,
      courseName: course.courseName,
      courseType: course.courseType,
      targetAge: course.targetAge,
      capacity: course.capacity,
      image: course.image,
      duration: course.duration,
      endDate: course.endDate,
      programProgramsId: course.programProgramsId,
      materials: course.materials,
    },
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [duration, setDuration] = useState("1");
  const [durationN, setDurationN] = useState("Días");

  const { mutate: updateCourse } = UseUpdateCourse();

  const onSubmit = async (data: updateCourse) => {
    updateCourse(data, {
      onSuccess: () => {
        setOpen(false);
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
    if (course.image) {
      setImageUrl(course.image);
    }
  }, [course.image]);

  useEffect(() => {
    if (course.duration) {
      const durationString = course.duration;
      const [num, unit] = durationString.split(" ");
      setDurationN(num);
      setDuration(unit);
    }
  }, [course.duration]);

  useEffect(() => {
    setValue("duration", durationN + " " + duration);
  }, [duration, durationN, setValue]);


  const minDate2 = watch("date")

  
  const minDay2 = format({
    date: minDate2,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} size={"5xl"}>
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
                  <Select id="courseType" required {...register("courseType")}>
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
                    required
                  >
                   <ProgramsOPT/>
                  </Select>
                </div>
              </fieldset>

              <fieldset className="flex flex-col justify-between gap-2">
                <legend className="font-bold pb-2">Fechas y Matricula</legend>
                <div>
                  <Label htmlFor="startDate" value="Fecha de inicio" />
                  <TextInput
                    type="date"
                    required
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
                      placeholder="Duración"
                      value={durationN}
                      onChange={(event) => setDurationN(event.target.value)}
                    />
                    <Select
                      className=" col-span-2"
                      onChange={(event) => setDuration(event.target.value)}
                      value={duration}
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
                  <div>
                    <Label htmlFor="materials" value="Observaciones" />
                    <TextInput
                      id="material"
                      {...register("materials")}
                      placeholder="Ej. Se necesita un lapiz"
                    />
                  </div>
                </span>
              </fieldset>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center">
            <Button
              color={"failure"}
              onClick={() => setOpen(false)}
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

export default EditCourse;
