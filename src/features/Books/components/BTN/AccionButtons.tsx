import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useState } from "react";
import ModalDownActive from "../Modals/ModalDownActive";

const AccionButtons = ({
  id,
  BookTitle,
  Status,
}: {
  id: string;
  BookTitle: string;
  Status: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" flex gap-7 justify-center">
      <Link
        title="Ver Información Completa"
        to={`/HogarDeLibros/Gestion/Libros/Ver/${id}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        className={`${Status ? `` : ` cursor-not-allowed`}`}
        title="Editar Activo"
        to={`/HogarDeLibros/Gestion/Libros/Editar/${id}`}
        onClick={(e) => {
          if (!Status) {
            e.preventDefault();
          }
        }}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button
        title="Deshabilitar Activo"
        type="button"
        className={`${Status ? `` : `cursor-not-allowed`}`}
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
        <ModalDownActive
          open={openModal}
          setOpen={setOpenModal}
          id={id}
          BookTitle={BookTitle}
          category="books"
        />
      </>
    </div>
  );
};

export default AccionButtons;
