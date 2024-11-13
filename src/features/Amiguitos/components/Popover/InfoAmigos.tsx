import { Popover } from 'flowbite-react';
import React from 'react';

const InfoAmigos = ({children}:{children:React.ReactNode}) => {


  return (
    <div className="relative">
      <Popover
        className="z-10 w-80 lg:w-96"
        trigger="click"
        
        content={
          <div className="p-4 bg-white border rounded shadow-md w-full">
            <h3 className="font-semibold">Cualidades Necesarias</h3>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Capacidad de empatía y cortesía</li>
              <li>Excelentes habilidades de comunicación</li>
              <li>Capacidad de resolución efectiva de problemas</li>
              <li>Manejo adecuado del estrés en situaciones difíciles</li>
              <li>Conocimiento profundo del producto o servicio</li>
            </ul>
            <p className="text-sm font-medium">Requisitos indispensables:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Certificación que acredite competencias en atención al cliente.</li>
              <li>Experiencia mínima de 1 año en un puesto relacionado con atención al cliente.</li>
            </ul>
          </div>
        }
      >
        {children}
      </Popover>
    </div>
  );
};

export default InfoAmigos;
