import { Drawer, Sidebar } from "flowbite-react";
import { useContext } from "react";
import { FaBookReader } from "react-icons/fa";

import ForAdmin from "./NavbarOptions/ForAdmin";
import ForAll from "./NavbarOptions/ForAll";
import UserContext from "../../Context/UserContext/UserContext";
import SidebarContext from "../../Context/NavBarContext/NavbarContext";

const HomeNavbar = () => {
  const { visible, handleClose, showSidebar } = useContext(SidebarContext);

  const { currentUser } = useContext(UserContext);


  const rol = currentUser?.role;

  return (
    <>
      <button type="button" className="absolute left-4" onClick={showSidebar}>
        {" "}
        <img
          className="invert dark:invert-0
            dark:hover:invert
            hover:scale-110 
            hover:invert-0"
          width={35}
          src="https://cdn-icons-png.flaticon.com/128/561/561184.png"
          alt=""
        />
      </button>
      <Drawer
        open={visible}
        onClose={handleClose}
        className=" opacity-90 w-fit"
      >
        <Drawer.Header title={"Menú de Navegación"} titleIcon={FaBookReader} />
        <Drawer.Items>
          <Sidebar className="[&>div]:bg-transparent [&>div]:p-0 w-full">
            <Sidebar.Items className=" w-72">
              {rol !== "admin" ? <ForAll /> : ""}
              {rol === "admin" ? <ForAdmin /> : ""}
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default HomeNavbar;
