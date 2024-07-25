import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, NavbarCollapse } from "flowbite-react";
import { useEffect } from "react";

const LandingNavbar = () => {
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 120;
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <Navbar className="sticky top-0 z-50 text-white w-full bg-Body py-4">
      <Navbar.Brand
        className="w-full flex flex-col p-4 max-sm:w-4/5
      max-sm:p-0"
      >
        <span
          className=" text-white text-3xl font-semibold break-words
      max-sm:text-xl"
        >
          <FontAwesomeIcon
            href="#Home"
            icon={faBookOpen}
            className="text-white h-6 w-6 cursor-pointer"
          />{" "}
          Biblioteca Pública Municipal de Nicoya
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className=" bg-white" />
      <div className=" w-full flex justify-center items-center max-sm:">
        <NavbarCollapse>
          <Navbar.Link className="text-white hover:!text-black " href="#Home">
            Sobre Nosotros
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:!text-black "
            href="#MostPopularBooks"
          >
            Libros
          </Navbar.Link>
          <Navbar.Link className="text-white hover:!text-black " href="#Rooms">
            Salas
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:!text-black "
            href="#Computers"
          >
            Equipo de Computo
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:!text-black "
            href="#Courses"
          >
            Cursos
          </Navbar.Link>
          <Navbar.Link className="text-white hover:!text-black " href="#Events">
            Eventos
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:!text-black "
            href="#Friends"
          >
            Amiguitos de La biblioteca
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:!text-black "
            href="#ContacUs"
          >
            Contactanos
          </Navbar.Link>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
};

export default LandingNavbar;
