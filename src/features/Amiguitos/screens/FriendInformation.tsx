import { Button, Card } from "flowbite-react";
import courseImage from "../../../Assets/course.jpg";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import FormColaborador from "../../Collaborators/Components/Modals/FormColaborador";
import { useState } from "react";
import MainFormAmigos from "../components/Forms/MainFormAmigos";
import FormDonaciones from "../../Donations/Components/Modals/FormDonaciones";
import ImageDonation from "../../../Assets/Donaciones.webp";
import ImageFriend from "../../../Assets/Amigos.png";

const FriendInformation = () => {
  const [OpenD, setOpenD] = useState<boolean>(false);
  const [OpenA, setOpenA] = useState<boolean>(false);
  const [OpenC, setOpenC] = useState<boolean>(false);

  return (
    <>
      <MiddleCrumb label="Información de voluntariados" />
      <main className=" flex flex-col w-full items-center justify-center gap-4 mb-4">
        <h3 className=" font-bold text-xl max-sm:text-base">
          Conoce más sobre cómo apoyar a la biblioteca
        </h3>
        <section className="w-11/12 flex flex-col gap-7">
          <Card className="dark:bg-[#2d2d2d]">
            <h4 className=" font-bold">Colaboradores</h4>
            <div className=" flex justify-around max-sm:flex-col-reverse max-sm:gap-3">
              <div>
                <p>
                  Puedes realizar una actividad de colaboración con la biblioteca
                  en una de las siguientes areas:
                </p>
                <ul className="list-disc">
                  <li className=" ml-5">
                    Cuentacuentos para adultos mayores, niños o jóvenes
                  </li>
                  <li className=" ml-5">Exposiciones artísticas</li>
                  <li className=" ml-5">Presentaciones audiovisuales</li>
                  <li className=" ml-5">
                    Dirigir una tertulia con todo público
                  </li>
                  <li className=" ml-5">
                    Impartir cursos (inducción, Excel, Word, PowerPoint)
                  </li>
                  <li className=" ml-5">Formación de emprendedurismo</li>
                  <li className=" ml-5">
                    Cursos libres (inglés, contabilidad, marketing, publicidad,
                    otros)
                  </li>
                  <li className=" ml-5">Actividades informativas</li>
                  <li className=" ml-5">Cuidado del ambiente</li>
                  <li className=" ml-5">Cultura de paz</li>
                  <li className=" ml-5">Derechos y deberes de los jóvenes</li>
                  <li className=" ml-5">Igualdad y equidad de género</li>
                  <li className=" ml-5">Historia y rescate indígena</li>
                  <li className=" ml-5">Entre otras</li>
                </ul>
              </div>
              <figure className="">
                <img
                  src={courseImage}
                  alt="Colaboraciones"
                  className="h-56 w-76  rounded-md"
                />
                <figcaption className=" flex items-center flex-col gap-4 max-sm:hidden">
                  <h5 className=" font-semibold dark:text-white">
                    ¡Únete a nuestra comunidad de voluntariado!
                  </h5>
                  <p className="dark:text-white font-normal text-gray-700 ">
                    Participa en nuestras actividades y comparte tu amor por los
                    libros con otras personas.
                  </p>
                  <Button
                    className="hover:scale-105 transition-transform duration-300"
                    color={"blue"}
                    onClick={() => setOpenC(true)}
                  >
                    ¡Ir al formulario!
                  </Button>
                </figcaption>
              </figure>
            </div>
            <Button
              className="w-36 hover:scale-105 transition-transform duration-300
               hidden max-sm:block"
              onClick={() => setOpenC(true)}
              color={"blue"}
            >
              ¡Ir al formulario!
            </Button>
          </Card>
          <Card className="dark:bg-[#2d2d2d]">
            <h4 className=" font-bold">Donaciones</h4>
            <div className=" flex justify-around max-sm:flex-col-reverse max-sm:gap-3 flex-row-reverse">
              <div className=" flex flex-col gap-3">
                <p>
                  Estamos abiertos a recibir donativos, aquí te dejamos algunas
                  cosas de las que recibimos:
                </p>
                <div>
                  <h3>Libros</h3>
                  <ul className="list-disc">
                    <li className=" ml-5">Historia</li>
                    <li className=" ml-5">Literatura</li>
                    <li className=" ml-5">Educativos:Máximo 5 años de antiguedad.</li>
                  </ul>
                </div>
                <div>
                  <h3>Mobiliario y accesorios</h3>
                  <ul className="list-disc">
                    <li className=" ml-5">Mobiliarios</li>
                    <li className=" ml-5">Estanterías</li>
                    <li className=" ml-5">Expositores de libros</li>
                    <li className=" ml-5">Lockers</li>
                    <li className=" ml-5">Dispensadores</li>
                    <li className=" ml-5">Coffe maker</li>
                    <li className=" ml-5">Mantelería</li>
                    <li className=" ml-5">Entre otros</li>
                  </ul>
                </div>
              </div>
              <figure className=" flex flex-col items-center justify-center">
                <img
                  src={ImageDonation}
                  alt="Colaboraciones"
                  className="h-56 w-76  rounded-md"
                />
                <figcaption className=" flex items-center flex-col gap-4 max-sm:hidden">
                  <h5 className=" font-semibold dark:text-white">
                    ¡Únete a nuestra comunidad de voluntariado!
                  </h5>
                  <p className="dark:text-white font-normal text-gray-700">
                    Participa en nuestras actividades y comparte tu amor por los
                    libros con otras personas.
                  </p>
                  <Button
                    className="hover:scale-105 transition-transform duration-300"
                    color={"blue"}
                    onClick={() => setOpenD(true)}
                  >
                    ¡Ir al formulario!
                  </Button>
                </figcaption>
              </figure>
            </div>
            <Button
              className="w-36 hover:scale-105 transition-transform duration-300
               hidden max-sm:block"
              onClick={() => setOpenD(true)}
              color={"blue"}
            >
              ¡Ir al formulario!
            </Button>
          </Card>

          <Card className="dark:bg-[#2d2d2d]">
            <h4 className=" font-bold">Amigos de la biblioteca</h4>
            <div className=" flex justify-around max-sm:flex-col-reverse max-sm:gap-3">
              <div className=" flex flex-col gap-3">
                <p>
                  Contamos con amigos que nos ayudan en las labores{" "}
                  <br />
                  cotidianas de la biblioteca. Si quieres apoyarnos, también
                  puedes unirte. Aquí algunas de las áreas de nuestros amigos:
                </p>
                <ul className="list-disc">
                  <li className=" ml-5">Atención al usuario</li>
                  <li className=" ml-5">
                    Ordenar la colección general e infantil
                  </li>
                  <li className=" ml-5">
                    Acompañamiento y logística en las actividades
                  </li>
                  <li className=" ml-5">Visitas guiadas</li>
                  <li className=" ml-5">Acompañamiento de puertas abiertas</li>
                  <li className=" ml-5">
                    Actualización del contenido de la página web de la
                    Biblioteca
                  </li>
                  <li className=" ml-5">Lectura y Escritura</li>
                  <li className=" ml-5">Emprendedurismo</li>
                  <li className=" ml-5">Hora del Cuento para Niños</li>
                  <li className=" ml-5">Manualidades</li>
                </ul>
              </div>
              <figure className=" flex flex-col items-center justify-center">
                <img
                  src={ImageFriend}
                  alt="Colaboraciones"
                  className="h-56 w-76  rounded-md"
                />
                <figcaption className=" flex items-center flex-col gap-4 max-sm:hidden">
                  <h5 className=" font-semibold dark:text-white">
                    ¡Únete a nuestra comunidad de voluntariado!
                  </h5>
                  <p className="dark:text-white font-normal text-gray-700 ">
                    Participa en nuestras actividades y comparte tu amor por los
                    libros con otras personas.
                  </p>
                  <Button
                    className="hover:scale-105 transition-transform duration-300"
                    color={"blue"}
                    onClick={() => setOpenA(true)}
                  >
                    ¡Ir al formulario!
                  </Button>
                </figcaption>
              </figure>
            </div>
            <Button
              className="w-36 hover:scale-105 transition-transform duration-300
               hidden max-sm:block"
              onClick={() => setOpenA(true)}
              color={"blue"}
            >
              ¡Ir al formulario!
            </Button>
          </Card>
        </section>
      </main>
      <FormColaborador open={OpenC} setOpen={setOpenC} />
      <MainFormAmigos open={OpenA} setOpen={setOpenA} />
      <FormDonaciones open={OpenD} setOpen={setOpenD} />
    </>
  );
};

export default FriendInformation;
