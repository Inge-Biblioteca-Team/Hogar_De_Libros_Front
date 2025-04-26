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
      <div className=" w-full flex justify-center items-center pt-2 max-lg:!text-sm !text-white">
        <NavbarCollapse>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Home"
          >
            Sobre nosotros
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#MostPopularBooks"
          >
            Libros
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Rooms"
          >
            Salas
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Computers"
            id="computerRef"
          >
            Equipos de cómputo
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Courses"
          >
            Cursos
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Events"
          >
            Eventos
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Programs"
          >
            Programas
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
            href="#Friends"
          >
            Amigos de la biblioteca
          </Navbar.Link>
          <Navbar.Link
            className="dark:text-white text-base text-white hover:!text-white hover:scale-110 
              relative 
              after:content-[''] after:absolute 
              after:w-0 after:h-[2px] after:bg-white after:left-0 
              after:bottom-0 after:transition-all after:duration-300 
              hover:after:w-full 
              max-lg:!text-sm"
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
