import { faUser } from "@fortawesome/free-solid-svg-icons";
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
            Equipo de Cómputo
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
            href="#Programs"
          >
            Programas
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
            Contáctanos
          </Navbar.Link>
          <Navbar.Link
  className="text-white hover:!text-black"
  href="/LogIn"
>
  <FontAwesomeIcon icon={faUser} className="text-white h-5 w-5" /> {/* Ícono de usuario */}
</Navbar.Link>

        </NavbarCollapse>
      </div>
  );
};

export default LandingNavbar;
