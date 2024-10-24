import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUsers, FaBookOpen, FaHandshake } from "react-icons/fa";
import FormActividadesAcademicas from "../Forms/FormActividadesAcademicas";
import FormColaborador from "../Forms/FormColaborador";
import MainFormAmigos from "../Forms/MainFormAmigos";
import FormDonaciones from "../Forms/FormDonaciones";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [activeForm, setActiveForm] = useState<"Colaboradores" | "Actividades" | "Donaciones" | "Amigos" | null>(null);

  const openForm = (form: "Colaboradores" | "Actividades" | "Donaciones" | "Amigos") => {
    setActiveForm(form);
  };

  return (
    <Modal show={isOpen} onClose={onClose} className="size'1/2"> {/* Cambia "5xl" a "md" para un modal más pequeño */}
      <Modal.Header>
        {activeForm === "Colaboradores" && "Registro de Colaboradores"}
        {activeForm === "Actividades" && "Registro de Actividades Académicas"}
        {activeForm === "Donaciones" && "Registro de Donaciones"}
        {activeForm === "Amigos" && "Registro de Amigos"}
      </Modal.Header>
      <Modal.Body className="flex flex-col items-center">
        {activeForm === null ? (
          <div className="grid grid-cols-2 gap-4">
            {/* Card de Colaboradores */}
            <div className="cursor-pointer" onClick={() => openForm("Colaboradores")}>
              <div className="card flex flex-col items-center justify-center p-4 border rounded-lg shadow-md h-48 w-64"> {/* Establecer altura y ancho fijos */}
                <FaUsers className="text-4xl mb-2" />
                <h3 className="text-lg font-bold">Colaboradores</h3>
              </div>
            </div>

            {/* Card de Actividades Académicas */}
            <div className="cursor-pointer" onClick={() => openForm("Actividades")}>
              <div className="card flex flex-col items-center justify-center p-4 border rounded-lg shadow-md h-48 w-64">
                <FaBookOpen className="text-4xl mb-2" />
                <h3 className="text-lg font-bold">Actividades Académicas</h3>
              </div>
            </div>

            {/* Card de Donaciones */}
            <div className="cursor-pointer" onClick={() => openForm("Donaciones")}>
              <div className="card flex flex-col items-center justify-center p-4 border rounded-lg shadow-md h-48 w-64">
                <BiSolidDonateHeart className="text-4xl mb-2" />
                <h3 className="text-lg font-bold">Donaciones</h3>
              </div>
            </div>

            {/* Card de Amigos */}
            <div className="cursor-pointer" onClick={() => openForm("Amigos")}>
              <div className="card flex flex-col items-center justify-center p-4 border rounded-lg shadow-md h-48 w-64">
                <FaHandshake className="text-4xl mb-2" />
                <h3 className="text-lg font-bold">Amigos</h3>
              </div>
            </div>
          </div>
        ) : (
          <>
            {activeForm === "Colaboradores" && <FormColaborador isOpen={isOpen} onClose={onClose} />}
            {activeForm === "Actividades" && <FormActividadesAcademicas isOpen={isOpen} onClose={onClose} />}
            {activeForm === "Donaciones" && <FormDonaciones isOpen={isOpen} onClose={onClose} />}
            {activeForm === "Amigos" && <MainFormAmigos isOpen={isOpen} onClose={onClose} />}
          </>
        )}
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"failure"} onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
