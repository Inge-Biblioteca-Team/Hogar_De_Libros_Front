import { Popover } from "flowbite-react";
import React from "react";

const InfoDonation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Popover
        className="z-10"
        trigger="click"
        content={
          <div className="dark:bg-[#2d2d2d] p-4 bg-white border rounded shadow-md w-80 h-auto lg:h-max lg:w-max">
            <h3 className="font-semibold">Requisitos para donar libros</h3>
            <p className="mb-2">
              Para que un libro sea aceptado en donación, debe cumplir con los
              siguientes requisitos:
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Estar en buen estado, sin daños significativos.</li>
              <li>No presentar ácaros ni plagas.</li>
              <li>Estar libres de polvo y suciedad.</li>
              <li>
                No presentar pérdida de color; si tiene más del 80% de pérdida
                de color, no será recibido.
              </li>
              <li>No estar rayado ni tener hojas sueltas.</li>
            </ul>
            <h4 className="font-semibold mt-4">Temáticas Aceptadas</h4>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Matemáticas</li>
              <li>Contaduría</li>
              <li>Ciencias Naturales</li>
              <li>Literatura</li>
              <li>Historia</li>
              <li>etc.</li>
            </ul>
            <p className="text-sm mb-2">
              Los libros deben ser de las ediciones más recientes, no sé
              aceptarán libros publicados hace más de 5 años.
            </p>

            <h3 className="font-semibold mt-4">Donación de Mobiliario</h3>
            <p className="mb-2">
              Para la donación de mobiliario, es importante proporcionar la
              siguiente información:
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>
                Descripción detallada del mobiliario (tipo, material, etc.).
              </li>
              <li>Medidas del mobiliario (alto, ancho, largo).</li>
              <li>Estado general del mobiliario (nuevo, usado, reparado).</li>
              <li>Imágenes del mobiliario si es posible.</li>
            </ul>

            <h3 className="font-semibold mt-4">Notas Importantes</h3>
            <p className="text-sm">
              Por favor, asegúrate de que todos los artículos cumplan con los
              requisitos mencionados antes de proceder con la donación.
            </p>
          </div>
        }
      >
        {children}
      </Popover>
    </div>
  );
};

export default InfoDonation;
