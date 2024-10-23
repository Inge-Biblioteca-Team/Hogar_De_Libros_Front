import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { FaBookReader } from "react-icons/fa";

import ForAdmin from "./NavbarOptions/ForAdmin";
import ForAll from "./NavbarOptions/ForAll";

const HomeNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(!visible);
  };

  const handleClose = () => setVisible(false);

  const rol = sessionStorage.getItem("role");

  return (
    <>
      <button type="button" className=" absolute left-4" onClick={showSidebar}>
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
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/" className="text-xl hover:text-blue-500">
                  Inicio
                </Sidebar.Item>
              </Sidebar.ItemGroup>
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
