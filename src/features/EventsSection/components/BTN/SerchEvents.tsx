import { Label, Select, TextInput } from "flowbite-react";

const SearchEvents = ({
  EName,
  EStatus,
  EDateRange,
  ETargetAudience,
  see, 
}: {
  EName: (name: string) => void;
  EStatus: (status: string) => void;
  EDateRange: (startDate: Date, endDate: Date) => void;
  ETargetAudience: (audience: string) => void;
  see: boolean; 
}) => {
  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = new Date(event.target.value);
    const endDate = new Date(); 
    
    if (startDate) {
      EDateRange(startDate, endDate); 
    }
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDate = new Date(event.target.value);
    const startDate = new Date(); 

    if (endDate) {
      EDateRange(startDate, endDate); 
    }
  };

  return (
    <div className={`flex items-center gap-2 ${see ? 'block' : 'hidden'}`}>
      <div>
        <Label className="text-lg">Título del evento</Label>
        <TextInput
          type="text"
          placeholder="Título del evento"
          onChange={(event) => EName(event.target.value)}
        />
      </div>
      <div>
        <Label className="text-lg">Público Esperado</Label>
        <TextInput
          type="text"
          placeholder="Escriba el público esperado"
          onChange={(event) => ETargetAudience(event.target.value)}
        />
      </div>
      <div>
        <Label className="text-lg">Estado</Label>
        <Select onChange={(event) => EStatus(event.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="finalized">Finalizado</option>
          <option value="execution">Ejecución</option>
          <option value="inprogress">En Progreso</option>
        </Select>
      </div>
    </div>
  );
};

export default SearchEvents;