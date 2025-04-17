import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { OpenModals } from "../../../Types/GlobalTypes";


const AdviceAccionsBTN = ({ setOpen1, setOpen2, setOpen3 }: OpenModals) => {
  return (
    <>
      <div className="flex max-sm:gap-0 gap-7">
        <button
          title="Ver Información Completa"
          type="button"
          className="hover:text-Body"
          onClick={() => setOpen1(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          title="Editar"
          type="button"
          className="hover:text-yellow-300"
          onClick={() => setOpen2(true)}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          title="Eliminar"
          type="button"
          className="hover:text-red-900"
          onClick={() => setOpen3(true)}
        >
          <PiTrash size={24} />
        </button>
      </div>
    </>
  );
};

export default AdviceAccionsBTN;
