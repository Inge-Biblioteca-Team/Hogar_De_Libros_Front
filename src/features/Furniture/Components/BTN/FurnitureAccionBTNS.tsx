import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDownFurniture from "../Modals/ModalDownFurniture";

const FurnitureAccionBTNS = ({
  id,
  Status,
}: {
  id: number;
  Status: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex gap-7">
      <Link
        title="Ver Información Completa"
        to={`/HogarDeLibros/Gestion/Muebles/Ver/${id}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        title="Editar Moviliario"
        to={Status ? `/HogarDeLibros/Gestion/Muebles/Editar/${id}` : "#"}
        className={`${Status ? "" : "cursor-not-allowed"}`}
        onClick={(e) => {
          if (!Status) {
            e.preventDefault();
          }
        }}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button
        title="Deshabilitar Moviliario"
        type="button"
        className={`${Status ? "" : "cursor-not-allowed"}`}
        onClick={() => {
          if (Status) {
            setOpenModal(true);
          }
        }}
        disabled={!Status}
      >
        <PiTrash size={24} />
      </button>
      <>
        <ModalDownFurniture
          open={openModal}
          setOpen={setOpenModal}
          id={id}
          Description=""
        />
      </>
    </div>
  );
};

export default FurnitureAccionBTNS;