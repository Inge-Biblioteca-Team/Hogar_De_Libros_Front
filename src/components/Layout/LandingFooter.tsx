import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const LandingFooter = () => {
  return (
    <Footer className=" bottom-0 z-50 w-full bg-Body-dark text-white rounded-none flex flex-col max-lg:p-1 p-3">
      <div className=" flex flex-col md:flex-row lg:flex-row justify-between w-full">
        <div className=" flex flex-col">
          <Footer.Title
            className=" text-xl md:text-sm text-white max-sm:text-base"
            title="Biblioteca Pública Municipal De Nicoya"
          />
          <Footer.Title
            className="text-xl md:text-sm text-white max-sm:text-base"
            title="Dirección"
          />
          <Footer.LinkGroup>
            <Footer.Link
              href=""
              className=" mb-10 lg:mb-0 md:text-xs max-sm:text-xs "
            >
              50 metros norte del Liceo de Nicoya, frente a piscinas ANDE
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className=" flex max-lg:gap-1 max-sm:gap-8">
          <div>
            <Footer.Title
              title="Contactos"
              className=" text-xl md:text-sm text-white max-sm:text-base"
            />
            <Footer.LinkGroup col className="md:text-sm max-sm:text-sm">
              <Footer.Link href="">bpnicoya@sinabi.go.cr</Footer.Link>
              <Footer.Link href="">+506 2685-4213</Footer.Link>
              <Footer.Link href=""></Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              title="Servicios"
              className=" text-xl md:text-sm text-white max-sm:text-base"
            />
            <Footer.LinkGroup col className="md:text-sm max-sm:text-sm">
              <Footer.Link href="#MostPopularBooks">Libros</Footer.Link>
              <Footer.Link href="#Rooms">Salas</Footer.Link>
              <Footer.Link href="#Computers">Equipo de Cómputo</Footer.Link>
              <Footer.Link href="#Courses">Cursos</Footer.Link>
              <Footer.Link href="#Events">Eventos</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              title="Legal"
              className="text-xl md:text-sm text-white max-sm:text-base"
            />
            <Footer.LinkGroup col className="md:text-sm max-sm:text-sm">
              <Footer.Link href="">Política de privacidad</Footer.Link>
              <Footer.Link href="">Términos & condiciones</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Biblioteca De Nicoya™" year={2024} />
        <div className="mt-4 flex space-x-6 max-sm:text-sm">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsWhatsapp} />
        </div>
      </div>
    </Footer>
  );
};

export default LandingFooter;
