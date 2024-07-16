import { Navbar } from "flowbite-react";
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
    <Navbar className="bg-transparent text-white">
      <Navbar.Brand href="#Home">Sobre Nosotros</Navbar.Brand>
      <Navbar.Brand href="#MostPopularBooks">Libros</Navbar.Brand>
      <Navbar.Brand href="#Rooms">Salas</Navbar.Brand>
      <Navbar.Brand href="#Computers">Equipo de Computo</Navbar.Brand>
      <Navbar.Brand href="#Courses">Cursos</Navbar.Brand>
      <Navbar.Brand href="#Events">Eventos</Navbar.Brand>
      <Navbar.Brand href="#Friends">Amiguitos de La biblioteca</Navbar.Brand>
      <Navbar.Brand href="#ContacUs">Contactanos</Navbar.Brand>
    </Navbar>
  );
};

export default LandingNavbar;
