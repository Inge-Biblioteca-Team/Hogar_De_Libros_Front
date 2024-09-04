import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useState } from "react";
import ModalDownActive from "../Modals/ModalDownActive";

const AccionButtonsChildrens = ({
  id,
  BookTitle,
}: {
  id: string;
  BookTitle: string;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" flex gap-7 justify-center">
      <Link
        title="Ver Informacion Completa"
        to={`/HogarDeLibros/Gestion/LibrosI/Ver/${id}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        title="Editar Activo"
        to={`/HogarDeLibros/Gestion/LibrosI/Editar/${id}`}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button title="Deshabilitar Activo" type="button">
        <PiTrash size={24} onClick={() => setOpenModal(true)} />
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
