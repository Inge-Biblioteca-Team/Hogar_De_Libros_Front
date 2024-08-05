import { Sidebar } from "flowbite-react";
import { useState } from "react";

const HomeNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button type="button" className=" absolute" onClick={showSidebar}>
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
      <Sidebar
        className={` bottom-0 left-0 top-20 mt-5 opacity-95 ${
          visible ? ` fixed` : `hidden`
        }`}
        id="sideBar"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" className="text-xl hover:text-blue-500">Inicio</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="text-xl hover:text-blue-500" href="/">Libros</Sidebar.Item>
            <Sidebar.Collapse label="Categorias">
              <Sidebar.Item href="#">Obras Generales</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item
              className="text-xl hover:text-blue-500" href="/">
              Catalogo Completo
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default HomeNavbar;
