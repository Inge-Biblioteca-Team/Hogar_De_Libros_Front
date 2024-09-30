import { Button, Label, Select, TextInput, Modal } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { program, createCourse } from "../../types/Courses";
import { useQuery, } from "react-query";
import { GetProgramsIntoCourses } from "../../services/SvCourses";
import AddImage from "../Modals/AddImage";
import { FaReadme } from 'react-icons/fa6';
import UseCreateCourse from "../../Hooks/UseCreateCourse";

const CreateCourse = () => {
    const { register, setValue, reset, handleSubmit } = useForm<createCourse>();

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);


    const { data: programs } = useQuery<program[], Error>(
        ["ProgramList"],
        () => GetProgramsIntoCourses(),
        {
            staleTime: 600,
        }
    );

    const { mutate: createCourse } = UseCreateCourse();

    const onSubmit = async (data: createCourse) => {
     createCourse(data, {
        onSuccess: () => {
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

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)} color="blue">
                Añadir Curso
            </Button>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Header>Crear Nuevo Curso</Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className="grid grid-cols-6 grid-rows-1 gap-3">
                        <figure className="col-span-2">
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
                                        className="h-52 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
                                    >
                                        <span>Selecciona una imagen</span>
                                    </div>
                                )}
                        </figure>
                        <div className=" grid grid-col-2 gap-3 col-span-4">
                        <fieldset>
                            <legend className="pb-3 font-bold">Información Básica</legend>
                            <span>
                                <Label htmlFor="courseName" value="Nombre del Curso" />
                                <TextInput
                                    id="courseName"
                                    type="text"
                                    {...register("courseName", { required: true })}
                                    placeholder="Nombre del Curso..."
                                />
                            </span>

                            <span>
                                <Label htmlFor="courseType" value="Categoría del Curso" />
                                <TextInput
                                    id="courseType"
                                    type="text"
                                    {...register("courseType", { required: true })}
                                    placeholder="Categoría del Curso..."
                                    />
                            </span>

                            <span>
                                <Label htmlFor="instructor" value="Encargado del Curso" />
                                <TextInput
                                    id="instructor"
                                    type="text"
                                    {...register("instructor", { required: true })}
                                    placeholder="Encargado del Curso..."
                                />
                            </span>
                            <span>
                                <Label htmlFor="capacity" value="Cupos Disponibles" />
                                <TextInput
                                    id="capacity"
                                    type="number"
                                    {...register("capacity", { required: true })}
                                    placeholder="0s"
                                    />
                            </span>
                            <div>
                        <Label htmlFor="startDate" value="Edad Objetivo" />
                            <TextInput />
                        </div>
                            </fieldset>
                            <fieldset>
                                <legend className="pb-3 font-bold">
                                    Fechas del curso
                                    </legend>
                        <div>
                        <Label htmlFor="startDate" value="Fecha De Inicio" />
                            <TextInput 
                            type="date"
                           {...register("date")} />
                        </div>
                        <div>
                        <Label htmlFor="startDate" value="Hora De Inicio" />
                            <TextInput
                            type="time"
                            {...register("courseTime")}
                             />
                        </div>
                        <div>
                        <Label htmlFor="startDate" value="Fecha De Fin" />
                            <TextInput
                             type="date"
                             {...register("endDate")} />
                        </div>
                        <span>
                                <Label htmlFor="location" value="Ubicación del Curso" />
                                <TextInput
                                    id="location"
                                    type="text"
                                    {...register("location", { required: true })}
                                    placeholder="Ubicación del Curso..."
                                    />
                            </span>

                            <span>
                                <Label htmlFor="duration" value="Duración del Curso" />
                                <TextInput
                                    id="duration"
                                    type="text"
                                    {...register("duration", { required: true })}
                                    placeholder="Duración del Curso..."
                                    />
                            </span>
                                </fieldset>
                                <div className=" col-span-2">
                            <Label htmlFor="program" value="Programa del Curso" />
                            <Select id="program" {...register("programProgramsId")}
                            icon={FaReadme} >
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
                        <Button color={"failure"} onClick={() => setIsModalOpen(false)}>
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
