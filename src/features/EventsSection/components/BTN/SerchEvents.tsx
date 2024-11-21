import { Label, Select, TextInput } from "flowbite-react";

const SearchEvents = ({
  EName,
  EStatus,
}: {
  EName: (name: string) => void;
  EStatus: (ES: string) => void;
}) => {
  return (
    <div className={`flex max-sm:w-full max-sm:flex-col items-center gap-2`}>
      <div className="max-sm:w-full">
        <Label className="text-lg">Título del evento</Label>
        <TextInput
          type="text"
          placeholder="Título del evento"
          onChange={(event) => EName(event.target.value)}
        />
      </div>
      <div className="max-sm:w-full">
        <Label className="text-lg">Estado</Label>
        <Select onChange={(event) => EStatus(event.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="Pendiente de ejecución">
            Pendientes de ejecución
          </option>
          <option value="Cancelado">Cancelados</option>
          <option value="Finalizado">Finalizados</option>
        </Select>
      </div>
    </div>
  );
};

export default SearchEvents;

/** EStatus,
  EDateRange,
  ETargetAudience,
  see, 
  

   EStatus: (status: string) => void;
  EDateRange: (startDate: Date, endDate: Date) => void;
  ETargetAudience: (audience: string) => void;
  see: boolean; 



   <div>
        <Label className="text-lg">Público Esperado</Label>
        <TextInput type="text" placeholder="Escriba el público esperado" />
      </div>
  */
