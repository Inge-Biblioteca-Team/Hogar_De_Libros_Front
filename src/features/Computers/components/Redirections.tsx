import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const EquipmentCrumb = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/Gestion/EquipodeComputo" icon={HiHome}>
        Equipo de Computo
      </Breadcrumb.Item>
    </>
  );
};

const ActionCrumb = ({Acction}:{Acction:string}) => {
  return (
    <>
      <Breadcrumb.Item>{Acction}</Breadcrumb.Item>
    </>
  );
};

export { EquipmentCrumb, ActionCrumb };
