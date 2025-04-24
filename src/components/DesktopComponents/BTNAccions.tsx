import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { OpenModals } from "../../Types/GlobalTypes";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { HiTruck, HiClock } from "react-icons/hi";

const BTNAccions = ({
  setOpen1,
  setOpen2,
  setOpen3,
  setOpen4,
  setOpen5,
  setOpen6,
  setOpen7,
  setOpen8,
  setOpen9,
  setOpen10,
  setOpen11,
  status,
}: OpenModals) => {
  return (
    <div className="w-full flex gap-3 items-center justify-center text-3xl">
      {setOpen1 && (
        <button
          type="button"
          title="Ver información"
          className="hover:text-Body"
          onClick={() => setOpen1(true)}
        >
          <PiEyeLight size={30} />
        </button>
      )}

      {status && (
        <>
          {setOpen2 && (
            <button
              type="button"
              title="Editar"
              className="hover:text-yellow-400"
              onClick={() => setOpen2(true)}
            >
              <PiPencilDuotone size={30} />
            </button>
          )}
          {setOpen3 && (
            <button
              type="button"
              title="Deshabilitar"
              className="hover:text-red-800"
              onClick={() => setOpen3(true)}
            >
              <PiTrash size={30} />
            </button>
          )}
        </>
      )}

      {!status && (
        <>
          {setOpen5 && (
            <button
              type="button"
              title="Denegar solicitud"
              onClick={() => setOpen5(true)}
            >
              <FaRegCircleXmark size={30} />
            </button>
          )}
          {setOpen4 && (
            <button
              type="button"
              title="Aceptar solicitud"
              onClick={() => setOpen4(true)}
            >
              <FaRegCircleCheck size={30} />
            </button>
          )}
        </>
      )}

      {setOpen6 && (
        <button
          type="button"
          title="Eliminar"
          onClick={() => setOpen6(true)}
          className="hover:text-red-600"
        >
          <PiTrash size={24} />
        </button>
      )}

      {setOpen7 && (
        <button
          type="button"
          title="Reactivar"
          onClick={() => setOpen7(true)}
          className="hover:text-green-600"
        >
          <FaRegCircleCheck size={30} />
        </button>
      )}

      {setOpen8 && (
        <button
          type="button"
          title="Cancelar"
          onClick={() => setOpen8(true)}
          className="hover:text-orange-500"
        >
          <FaRegCircleXmark size={30} />
        </button>
      )}

      {setOpen10 && status && (
        <button
          type="button"
          title="Extender"
          onClick={() => setOpen10(true)}
          className="hover:text-purple-600"
        >
          <HiClock size={30} />
        </button>
      )}

      {setOpen9 && status && (
        <button
          type="button"
          title="Recibido"
          onClick={() => setOpen9(true)}
          className="hover:text-blue-600"
        >
          <HiTruck size={30} />
        </button>
      )}

      {setOpen11 && (
        <button
          type="button"
          title="Finalizar"
          onClick={() => setOpen11(true)}
          className="hover:text-blue-600"
        >
          <HiClock />
        </button>
      )}
    </div>
  );
};

export default BTNAccions;
