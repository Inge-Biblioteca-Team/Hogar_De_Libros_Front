import React from 'react';
import { Link } from 'react-router-dom';
import { PiEyeLight, PiPencilDuotone, PiTrash } from 'react-icons/pi';
import { Computer } from '../types/Computer';

interface ActionButtonsProps {
  computer: Computer;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ computer }) => {
  const viewLink = `/`; 
  const editLink = `/HogarDeLibros/Gestion/EquipodeComputo/Editar`; 
  const disableLink = `/`; 

  return (
    <div className="flex items-center space-x-4">
      <Link to={viewLink} className="text-cyan-600 hover:underline dark:text-cyan-500">
        <PiEyeLight size={24} />
        <span className="sr-only">Ver detalles</span>
      </Link>
      <Link to={editLink} className="text-cyan-600 hover:underline dark:text-cyan-500">
        <PiPencilDuotone size={24} />
        <span className="sr-only">Editar</span>
      </Link>
      <Link to={disableLink} className="text-red-600 hover:underline dark:text-red-500">
        <PiTrash size={24} />
        <span className="sr-only">Deshabilitar</span>
      </Link>
    </div>
  );
};

export default ActionButtons;