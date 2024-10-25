import { Popover } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const InfoActividadAcademica = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      <Popover
        className="z-10 "
        trigger="click"
        open={isOpen}
        onOpenChange={setIsOpen}
        content={
          <div className="p-4 bg-white border rounded shadow-md">
            <h3 className="font-semibold">Documentos Requeridos</h3>
            <p className="mb-2">
              Para desarrollar las pasantías, se requieren los siguientes documentos:
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Póliza</li>
              <li>Carta de la institución</li>
              <li>Currículum</li>
              <li>Boleta de evaluación</li>
            </ul>
            <p className="mb-2">
              Para el servicio comunal, se requieren:
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Carta de la institución</li>
              <li>Boleta de evaluación</li>
            </ul>
            <p className="text-sm font-medium">Nota: Estos documentos pueden ser presentados en formato digital o físico.</p>
            
            <h3 className="font-semibold mt-4">Cualidades Necesarias</h3>
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Responsabilidad y compromiso</li>
              <li>Capacidad de trabajo en equipo</li>
              <li>Habilidades de organización y planificación</li>
              <li>Adaptabilidad a diferentes entornos y situaciones</li>
              <li>Capacidad de escucha activa y empatía</li>
            </ul>
          </div>
        }
      >
        <button className="text-blue-600">
          <AiOutlineQuestionCircle size={24} />
        </button>
      </Popover>
    </div>
  );
};

export default InfoActividadAcademica;
