import { Sidebar } from "flowbite-react";
import ForAll from "./ForAll";
import LeadingOptions from "./LeadingOptions";
import ResoursesOptions from "./ResoursesOptions";
import ServicesOptions from "./ServicesOptions";
import RecordsOptions from "./RecordsOptions";
import ExtraOptions from "./ExtraOptions";

const ForAdmin = () => {
  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Collapse label="Vistas de usuario">
          <ForAll />
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
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
        <ExtraOptions/>
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAdmin;
