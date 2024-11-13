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
    <>
      <div className=" w-full flex justify-center items-center">
        <NavbarCollapse>
          <Navbar.Link
            className="text-white hover:scale-110 hover:!text-white hover:underline "
            href="#Home"
          >
            Sobre nosotros
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#MostPopularBooks"
          >
            Libros
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Rooms"
          >
            Salas
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Computers"
            id="computerRef"
          >
            Equipos de cómputo
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Courses"
          >
            Cursos
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Events"
          >
            Eventos
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Programs"
          >
            Programas
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#Friends"
          >
            Amigos de la biblioteca
          </Navbar.Link>
          <Navbar.Link
            className="text-white  hover:scale-110 hover:!text-white hover:underline "
            href="#ContacUs"
          >
            Contáctenos
          </Navbar.Link>
        </NavbarCollapse>
      </div>
    </>
  );
};

export default LandingNavbar;
