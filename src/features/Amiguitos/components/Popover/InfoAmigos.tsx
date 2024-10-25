import { Popover } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const InfoAmigos = () => {
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
        className="z-10"
        trigger="click"
        open={isOpen}
        onOpenChange={setIsOpen}
        content={
          <div className="p-4 bg-white border rounded shadow-md">
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
        <button className="text-blue-600">
          <AiOutlineQuestionCircle size={24} />
        </button>
      </Popover>
    </div>
  );
};

export default InfoAmigos;
