import { Courses } from "../../types/Courses";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Label, Modal, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { addDay } from "@formkit/tempo";
import UseUpdateCourse from "../../Hooks/UseUpdateCourse";
import { FaReadme } from "react-icons/fa6";
import CategoryOPT from "../OPTS/CategoryOPT";
import AgeOPT from "../OPTS/AgeOPT";
import ProgramsOPT from "../OPTS/ProgramsOPT";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";

const EditCourse = ({
  open,
  setOpen,
  course,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  course: Courses;
}) => {
  const { register, handleSubmit, setValue, watch, reset } = useForm<Courses>({
    defaultValues: {
      courseId: course.courseId,
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
      programProgramsId: course.programProgramsId || "",
      materials: course.materials,
    },
  });

  const { mutate: updateCourse } = UseUpdateCourse();

  const onSubmit = async (data: Courses) => {
    updateCourse(data, {
      onSuccess: () => {
        setOpen(false);
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
    setOpen(false);
    reset();
  };

  const handleClose = () => {
    setOpenImage(false);
  };

  useEffect(() => {
    const initialImageUrl = course.image;
    setImageUrl(initialImageUrl);
  }, [course.image]);

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)} size={"5xl"}>
        <Modal.Header>Editar curso</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className=" bg-white md:gap-4 grid max-sm:grid-cols-1 grid-cols-3 gap-3">
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
                    <span >Selecciona una imagen</span>
                  </div>
                )}
              </figure>
            </fieldset>
            <div className=" col-span-2 grid max-sm:grid-cols-1 grid-cols-2 gap-3">
              <fieldset className="flex flex-col justify-between">
                <legend className="whitespace-nowrap font-bold max-sm:text-center pb-2">Información General</legend>
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
                <legend className="font-bold max-sm:text-center max-sm:pt-2 pb-2">Fechas y matricula</legend>
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
        text="del aviso"
        Folder="Avisos"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </>
  );
};

export default EditCourse;
