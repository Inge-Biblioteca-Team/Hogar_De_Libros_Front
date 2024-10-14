import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import ViewAdvice from "./Modals/ViewAdvice";
import EditAdvice from "./Modals/EditAdvice";
import DeleteAdvice from "./Modals/DeleteAdvice";
import { useState } from "react";

const AdviceAccionsBTN = () => {
  const [openV, setOpenV] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);
  const [openD, setOpenD] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-7">
        <button
          title="Ver Información Completa"
          type="button"
          className="hover:text-Body"
          onClick={() => setOpenV(true)}
        >
          <PiEyeLight size={24} />
        </button>
        <button
          title="Editar"
          type="button"
          className="hover:text-yellow-300"
          onClick={() => setOpenE(true)}
        >
          <PiPencilDuotone size={24} />
        </button>
        <button
          title="Eliminar"
          type="button"
          className="hover:text-red-900"
          onClick={() => setOpenD(true)}
        >
          <PiTrash size={24} />
        </button>
      </div>
      <ViewAdvice open={openV} setOpen={setOpenV} />
      <EditAdvice open={openE} setOpen={setOpenE} />
      <DeleteAdvice open={openD} setOpen={setOpenD} />
    </>
  );
};

export default AdviceAccionsBTN;
