import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse } from "../../types/Courses";
import { useQueryClient } from "react-query";
import { CreateCourses } from "../../services/SvCourses";
import AddImage from "../Modals/AddImage";
import toast from "react-hot-toast";

const CreateCourse = () => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [, setImageUrl] = useState("src/Assets/course.jpg");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
    } = useForm<createCourse>();

    const QueryCli = useQueryClient()

    const onSubmit = async (data: createCourse) => {
        try {
            await CreateCourses(data);
            toast.success("Curso añadido correctamente...");
            navigate('/HogarDeLibros/Gestion/Cursos');
            QueryCli.invalidateQueries("CursoMG")
        } catch (error) {
            console.error("Error al añadir el curso:", error);
            alert("Hubo un error al añadir curso...");
        }
    };

    const handleImageSelect = (url: string) => {
        setImageUrl(url);
        setValue("image", url);
    };

    return (
        <>
            <div className="w-full flex place-content-center pt-10">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid gap-14 w-4/5 text-2xl grid-cols-3 "
                    style={{ gridTemplateColumns: "" }}
                >

                    <fieldset className="flex-none w-full">
                        <legend className=" pb-3 font-bold ">Imagen del Curso</legend>
                        <figure className="relative">
                            <img
                                onClick={() => setIsImageModalOpen(true)}
                                src={watch("image") || "src/Assets/course.jpg"}
                                alt="Imagen del Curso"
                                className="rounded-xl shadow-xl w-full"
                                style={{
                                    height: "22.8em",
                                    maxHeight: "22.8em",
                                    zIndex: "88888",
                                }}
                            />
                            <figcaption className="absolute w-full flex justify-center" style={{ top: "100%" }}>
                                <Button
                                    className="items-center rounded-none rounded-s-md"
                                    onClick={() => setIsImageModalOpen(true)}
                                    color={"blue"}
                                >
                                    Cambiar Imagen
                                </Button>
                            </figcaption>
                        </figure>
                    </fieldset>

                    <fieldset className=" flex flex-col gap-7">
                        <legend className=" pb-3 font-bold">Información básica</legend>

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

                        <span>
                            <Label htmlFor="capacity" value="Cupos Disponibles" />
                            <TextInput
                                id="capacity"
                                type="number"
                                {...register("capacity", { required: true })}
                                placeholder="0"
                            />
                        </span>
                    </fieldset>


                    <fieldset className=" flex flex-col gap-7">
                        <legend className=" pb-3 font-bold ">Detalles</legend>

                        <span>
                            <Label htmlFor="date" value="Fecha inicial del Curso" />
                            <TextInput
                                id="date"
                                type="date"
                                {...register("date", { required: true })}
                            />
                        </span>

                        <span>
                            <Label htmlFor="endDate" value="Fecha final del curso" />
                            <TextInput
                                id="endDate"
                                type="date"
                                {...register("endDate", { required: true })}
                            />
                        </span>

                        <span>
                            <Label htmlFor="courseTime" value="Hora del Curso" />
                            <TextInput
                                id="courseTime"
                                type="time"
                                {...register("courseTime", { required: true })}
                            />
                        </span>

                        <span>
                            <Label htmlFor="targetAge" value="Rango de Edad" />
                            <TextInput
                                id="targetAge"
                                type="number"
                                {...register("targetAge", { required: true })}
                                placeholder="Edad objetivo"
                            />
                        </span>

                        <span>
                            <Label htmlFor="programProgramsId" value="ProgramId" />
                            <TextInput
                                id="programProgramsId"
                                type="number"
                                {...register("programProgramsId", { required: true })}
                                placeholder="0"
                            />
                        </span>

                        <div className="flex justify-center p-4 space-x-4">
                            <Button type="submit" color={"blue"} onClick={handleSubmit(onSubmit)}>
                                Guardar
                            </Button>
                            <AddImage
                                showModal={isImageModalOpen}
                                onCloseModal={() => setIsImageModalOpen(false)}
                                onImageSelect={handleImageSelect}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
};
export default CreateCourse;