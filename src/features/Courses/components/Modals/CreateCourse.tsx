import { Button, Label, Navbar, TextInput, Card } from "flowbite-react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse } from "../../types/Courses";
import { useQueryClient } from "react-query";
import AddImage from "./AddImage";
import { FaUserEdit } from "react-icons/fa";
import { CreateCourses } from "../../services/SvCourses";

const CreateCourse = () => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<createCourse>();

    const QueryCli = useQueryClient()

    const navi = useNavigate();
    const Goto = () => {
        navi(`/`);
    };

    const onSubmit = async (data: createCourse) => {
        try {
          await CreateCourses(data);
          alert("Curso añadido con éxito");
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
            <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4">
                <Navbar.Brand className="w-full flex items-center justify-between p-4 max-sm:w-4/5 max-sm:p-0">
                    <div className="flex items-center flex-grow justify-center space-x-2">
                        <FontAwesomeIcon
                            onClick={Goto}
                            icon={faBookOpen}
                            className="text-white h-6 w-6 cursor-pointer"
                        />
                        <span className="text-white text-3xl font-semibold break-words max-sm:text-xl">
                            Biblioteca Pública Municipal de Nicoya
                        </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle className="bg-white" />
            </Navbar>
            <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-6xl bg-white shadow-lg rounded-lg">
        <div className="flex">
          <figure className="w-1/3 flex items-center justify-center p-4">
            {imageUrl ? (
              <img
                onClick={() => setIsImageModalOpen(true)}
                src={imageUrl}
                alt="Imagen del Curso"
                className="rounded-lg h-64 shadow-md w-64 object-cover"
              />
            ) : (
              <FaUserEdit size={120} className=" cursor-pointer" 
              onClick={()=>setIsImageModalOpen(true)} />
            )}
          </figure>

            <div className="w-2/3 p-6 grid grid-cols-2 gap-4">
              <h2 className="col-span-2 text-3xl font-bold text-gray-800 mb-4">
                Añadir Curso
              </h2>

              <div>
                <Label htmlFor="courseType" value="Nombre del Curso" />
                <TextInput
                  id="courseType"
                  type="text"
                  {...register("courseType", { required: true })}
                  placeholder="Nombre del Curso..."
                />
              </div>

              <div>
                <Label htmlFor="instructor" value="Encargado del Curso" />
                <TextInput
                  id="instructor"
                  type="text"
                  {...register("instructor", { required: true })}
                  placeholder="Encargado del Curso..."
                />
              </div>

              <div>
                <Label htmlFor="date" value="Fecha del Curso" />
                <TextInput
                  id="date"
                  type="date"
                  {...register("date", { required: true })}
                />
              </div>

              <div>
                <Label htmlFor="courseTime" value="Hora del Curso" />
                <TextInput
                  id="courseTime"
                  type="time"
                  {...register("courseTime", { required: true })}
                />
              </div>

              <div>
                <Label htmlFor="location" value="Ubicación del Curso" />
                <TextInput
                  id="location"
                  type="text"
                  {...register("location", { required: true })}
                  placeholder="Ubicación del Curso..."
                />
              </div>

              <div>
                <Label htmlFor="capacity" value="Cupos Disponibles" />
                <TextInput
                  id="capacity"
                  type="number"
                  {...register("capacity", { required: true })}
                  placeholder="0"
                />
              </div>

              <div>
                <Label htmlFor="duration" value="Duración del Curso" />
                <TextInput
                  id="duration"
                  type="text"
                  {...register("duration", { required: true })}
                  placeholder="Duración del Curso..."
                />
              </div>

              <div>
                <Label htmlFor="targetAge" value="Rango de Edad" />
                <TextInput
                  id="targetAge"
                  type="number"
                  {...register("targetAge", { required: true })}
                  placeholder="Edad objetivo"
                />
              </div>

              <div>
                <Label htmlFor="endDate" value="Fecha final del curso" />
                <TextInput
                  id="endDate"
                  type="date"
                  {...register("endDate", { required: true })}
                />
              </div>

              <div>
                <Label htmlFor="Status" value="Estado" />
                <TextInput
                  id="Status"
                  type="text"
                  {...register("Status", { required: true })}
                  placeholder="Estado del Curso"
                />
              </div>
            </div>
          </div>

        <div className="flex justify-center p-4 space-x-4">
          <Button color="failure" onClick={() => navigate('/HogarDeLibros/Gestion/Cursos')}>
            Cancelar
          </Button>
          <Button type="submit" color={"blue"} onClick={handleSubmit(onSubmit)}>
            Guardar
          </Button>
        </div>
      </Card>

      <AddImage
        showModal={isImageModalOpen}
        onCloseModal={() => setIsImageModalOpen(false)}
        onImageSelect={handleImageSelect}
      />
    </div>
        </>
    );
};
export default CreateCourse;