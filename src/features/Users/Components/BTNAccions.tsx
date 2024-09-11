import { BiTargetLock } from "react-icons/bi";
import { TbUserEdit } from "react-icons/tb";
import { TiUserDeleteOutline } from "react-icons/ti";
import { TbTruckReturn } from "react-icons/tb";
const BTNAccions = () => {
  return (
    <>
      <div className=" flex gap-3 items-center justify-center text-3xl">
        <button type="button" title="Ver Informacion de Usuario">
          <BiTargetLock />
        </button>
        <button type="button" title="Editar Informacion de Usuario">
          <TbUserEdit />
        </button>
        <button type="button" title="Desabilitar Usuario" className="hidden">
          <TiUserDeleteOutline />
        </button>
        <button type="button" title="Rehabilitar Usuario" className="">
          <TbTruckReturn />
        </button>
      </div>
    </>
  );
};

export default BTNAccions;
