import { Popover } from 'flowbite-react';
import React from 'react';

const InfoColaborador = ({children}:{children:React.ReactNode}) => {

  return (
    <div className="relative">
      <Popover
        className="z-10 w-80 lg:w-96"
        trigger="click"
        content={
          <div className="p-4 bg-white border rounded shadow-md h-auto ">
            <h3 className="font-semibold">Documentación Requerida</h3>
            <p className="mb-2">
              Para exponer sus conocimientos sobre el tema o para realizar el curso seleccionado, se requiere la siguiente documentación:
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Certificado o diploma relacionado con el área de conocimiento.</li>
              <li>Currículum actualizado que detalle la experiencia relevante.</li>
              <li>Cartas de recomendación o avales de instituciones pertinentes.</li>
              <li>Documentación adicional que respalde su experiencia y conocimientos.</li>
            </ul>
            <p className="text-sm font-medium">Nota: Estos documentos pueden ser presentados en formato digital o físico.</p>
            
            <h3 className="font-semibold mt-4">Cualidades Necesarias</h3>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Dominio del tema a exponer o curso a realizar.</li>
              <li>Habilidades de comunicación efectiva y claridad en la exposición.</li>
              <li>Capacidad de análisis y resolución de problemas.</li>
              <li>Empatía y habilidades interpersonales para interactuar con otros.</li>
              <li>Compromiso y motivación hacia el aprendizaje y la enseñanza.</li>
            </ul>
          </div>
        }
      >
        {children}
      </Popover>
    </div>
  );
};

export default InfoColaborador;
