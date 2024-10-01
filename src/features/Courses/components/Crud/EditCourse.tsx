import { Courses, program, updateCourse } from "../../types/Courses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { GetProgramsIntoCourses } from "../../services/SvCourses";
import AddImage from "../Modals/AddImage";
import { addDay, format } from "@formkit/tempo";
import { useQuery } from "react-query";
import UseUpdateCourse from "../../Hooks/UseUpdateCourse";
import { FaReadme } from "react-icons/fa6";

const EditCourse = ({
  open,
  setOpen,
  course,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  course: Courses;
}) => {
  const { register, handleSubmit, setValue } = useForm<updateCourse>({
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
    },
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const { data: programs } = useQuery<program[], Error>(
    ["ProgramList"],
    () => GetProgramsIntoCourses(),
    {
      staleTime: 600,
    }
  );

  const { mutate: updateCourse } = UseUpdateCourse();

  const onSubmit = async (data: updateCourse) => {
    updateCourse(data, {
      onSuccess: () => {
        setOpen(false);
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
    if (course.image) {
      setImageUrl(course.image);
    }
  }, [course.image]);
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
                  <TextInput
                    id="courseType"
                    type="text"
                    required
                    {...register("courseType")}
                    placeholder="Categoría del Curso"
                  />
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
                    <option value="">Seleccione la edad objetivo</option>
                    <option value="0">Todo Publico</option>
                    <option value="3">Niños 0-3 años</option>
                    <option value="11">Niños + 3 años</option>
                    <option value="24">Jovenes</option>
                    <option value="59">Adultos</option>
                    <option value="60">Adultos Mayores</option>
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
                    min={minDay}
                  />
                </div>
                <span>
                  <Label htmlFor="duration" value="Duración del Curso" />
                  <TextInput
                    id="duration"
                    type="text"
                    required
                    {...register("duration")}
                    placeholder="Duración del Curso..."
                  />
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
              </fieldset>
              <div className=" col-span-2">
                <Label htmlFor="program" value="Programa del Curso" />
                <Select
                  id="program"
                  {...register("programProgramsId")}
                  icon={FaReadme}
                >
                  <option value="">Curso Libre</option>
                  {programs?.map((program) => (
                    <option key={program.programsId} value={program.programsId}>
                      {program.programName}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center">
            <Button color={"failure"} onClick={() => setOpen(false)}>
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
