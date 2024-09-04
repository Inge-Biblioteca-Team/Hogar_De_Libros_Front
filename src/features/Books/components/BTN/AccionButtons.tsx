import { PiEyeLight, PiPencilDuotone, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useState } from "react";
import ModalDownActive from "../Modals/ModalDownActive";

const AccionButtons = ({
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
        to={`/HogarDeLibros/Gestion/Libros/Ver/${id}`}
      >
        <PiEyeLight size={24} />
      </Link>
      <Link
        title="Editar Activo"
        to={`/HogarDeLibros/Gestion/Libros/Editar/${id}`}
      >
        <PiPencilDuotone size={24} />
      </Link>
      <button title="Deshabilitar Activo" type="button">
        <PiTrash size={24} onClick={() => setOpenModal(true)} />
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
