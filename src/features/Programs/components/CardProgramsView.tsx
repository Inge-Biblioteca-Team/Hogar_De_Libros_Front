import React from 'react';
import { Card } from 'flowbite-react';
import { Program } from '../types/Programs';

type CardProgramsViewProps = {
  Program: Program;
};

const CardProgramsView: React.FC<CardProgramsViewProps> = ({ Program }) => {
  return (
    <Card
      className="hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={Program.image}
          alt={Program.programName}
          className="object-cover w-full h-full"
        />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {Program.programName}
      </h5>
      <p className="font-normal text-gray-700">
        Instructor: {Program.description}
      </p>
      <p className="font-normal text-gray-700">
        Estado: {Program.status ? 'Activo' : 'Inactivo'}
      </p>
    </Card>
  );
};

export default CardProgramsView;