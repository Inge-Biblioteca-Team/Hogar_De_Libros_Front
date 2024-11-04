import { Drawer, Sidebar, ToggleSwitch } from "flowbite-react";
import { useContext, useState } from "react";
import { FaBookReader } from "react-icons/fa";

import ForAdmin from "./NavbarOptions/ForAdmin";
import ForAll from "./NavbarOptions/ForAll";
import UserContext from "../../Context/UserContext/UserContext";
import SidebarContext from "../../Context/NavBarContext/NavbarContext";

const HomeNavbar = () => {
  const { visible, handleClose, showSidebar } = useContext(SidebarContext);

  const { currentUser } = useContext(UserContext);

  const rol = currentUser?.role;
  const [navMode, setNavMode] = useState(false);

  return (
    <>
      <button
        type="button"
        className="absolute left-4"
        onClick={showSidebar}
        id="hamburger"
      >
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
        {rol == "admin" && (
          <div className=" flex ml-5 mb-2 gap-3">
            <span className=" text-black">Modo de usuario</span>
            <ToggleSwitch
              color="gray"
              checked={navMode}
              onChange={setNavMode}
            />
          </div>
        )}
        <Drawer.Items>
          <Sidebar className="[&>div]:bg-transparent [&>div]:p-0 w-full">
            {rol == "admin" && (
              <Sidebar.Items className=" w-72">
                {navMode ? <ForAll /> : <ForAdmin />}
              </Sidebar.Items>
            )}
            {rol !== "admin" && (
              <Sidebar.Items className=" w-72">
                <ForAll />
              </Sidebar.Items>
            )}
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default HomeNavbar;
