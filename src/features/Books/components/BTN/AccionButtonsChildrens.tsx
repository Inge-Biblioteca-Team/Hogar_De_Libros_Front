import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useState } from "react";
import ModalDownActive from "../Modals/ModalDownActive";

const AccionButtonsChildrens = ({
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
        to={`/HogarDeLibros/Gestion/LibrosI/Ver/${id}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        className={`${Status ? `` : ` cursor-not-allowed`}`}
        title="Editar Activo"
        to={`/HogarDeLibros/Gestion/LibrosI/Editar/${id}`}
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
          category="book-children"
          open={openModal}
          setOpen={setOpenModal}
          id={id}
          BookTitle={BookTitle}
        />
      </>
    </div>
  );
};

export default AccionButtonsChildrens;
