import { Sidebar } from "flowbite-react";
import LeadingOptions from "./LeadingOptions";
import ResoursesOptions from "./ResoursesOptions";
import ServicesOptions from "./ServicesOptions";
import RecordsOptions from "./RecordsOptions";
import ExtraOptions from "./ExtraOptions";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";
import SidebarDriver from "../../../utils/SidebarDriver";

const ForAdmin = () => {
  const { handleNavigation } = useContext(SidebarContext);

  return (
    <>
      <>
        <Sidebar.ItemGroup>
          <Sidebar.Item id={"inicio"}
            className=" cursor-pointer text-2xl"
            onClick={() => handleNavigation("/HogarDeLibros")}
          >
            Inicio
          </Sidebar.Item>
          <Sidebar.Item
           id={"Advices"}
            className=" cursor-pointer"
            onClick={() => handleNavigation("/HogarDeLibros/Avisos")}
          >
            Avisos importantes
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </>
      <LeadingOptions />
      <Sidebar.ItemGroup>
        <RecordsOptions />
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <ResoursesOptions />
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <ServicesOptions />
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <ExtraOptions />
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <SidebarDriver />
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAdmin;
