import { NavbarCollapse, Navbar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const OPACNavBar = () => {
  const { handleNavigation } = useContext(SidebarContext);
  return (
    <>
      <div className=" grid items-center justify-around ">
        <NavbarCollapse>
          <Navbar.Link
            className="text-white  text-xl hover:scale-110 hover:!text-white hover:underline "
            onClick={() => handleNavigation("/OPAC/Libros")}
          >
            Libros
          </Navbar.Link>
          <div className="text-white text-xl">|</div>
          <Navbar.Link
            className="text-white text-xl hover:scale-110 hover:!text-white hover:underline "
            onClick={() => handleNavigation("/OPAC/Equipo-Computo")}
          >
            Equipos de cómputo
          </Navbar.Link>
        </NavbarCollapse>
      </div>
    </>
  );
};

export default OPACNavBar;
