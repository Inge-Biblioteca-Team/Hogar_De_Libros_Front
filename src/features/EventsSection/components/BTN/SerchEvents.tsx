import { Label, Select, TextInput } from "flowbite-react";

const SearchEvents = ({
  EName,
  EStatus,
}: {
  EName: (name: string) => void;
  EStatus: (ES: string) => void;
}) => {
  return (
    <div className={`flex items-center gap-2`}>
      <div>
        <Label className="text-lg">Título del evento</Label>
        <TextInput
          type="text"
          placeholder="Título del evento"
          onChange={(event) => EName(event.target.value)}
        />
      </div>
      <div>
        <Label className="text-lg">Estado</Label>
        <Select onChange={(event) => EStatus(event.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="F">Finalizado</option>
          <option value="E">Ejecución</option>
          <option value="P">Próximamente</option>
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
