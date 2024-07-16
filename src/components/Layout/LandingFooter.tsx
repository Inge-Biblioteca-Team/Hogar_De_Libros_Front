import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const LandingFooter = () => {
  return (
    <Footer className=" bottom-0 z-50 w-full bg-Body-dark text-white rounded-none flex flex-col p-3">
      <div className=" flex justify-between w-full">
        <div className=" flex flex-col">
          <Footer.Title
            className="text-lg text-white"
            title="Biblioteca Publica Municipal De Nicoya"
          />
          <Footer.Title className="text-lg text-white" title="Direccion" />
          <Footer.LinkGroup>
            <Footer.Link href="">
              50 Norte del Liceo de Nicoya, frente a piscinas ANDE
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className=" flex">
          <div>
            <Footer.Title title="Contactos" className="text-lg text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="">bpnicoya@sinabi.go.cr</Footer.Link>
              <Footer.Link href="">+506 2685-4213</Footer.Link>
              <Footer.Link href=""></Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Servicios" className="text-lg text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="#MostPopularBooks">Libros</Footer.Link>
              <Footer.Link href="#Rooms">Salas</Footer.Link>
              <Footer.Link href="#Computers">Equipo de Computo</Footer.Link>
              <Footer.Link href="#Courses">Cursos</Footer.Link>
              <Footer.Link href="#Events">Eventos</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-lg text-white" />
            <Footer.LinkGroup col>
              <Footer.Link href="">Política de privacidad</Footer.Link>
              <Footer.Link href="">Términos & Condiciones</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider/>
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Biblioteca De Nicoya™" year={2024} />
        <div className="mt-4 flex space-x-6">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsWhatsapp} />
        </div>
      </div>
    </Footer>
  );
};

export default LandingFooter;
