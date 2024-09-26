import { Label, Select, TextInput } from "flowbite-react";

const SearchEvents = ({
  EName,
  EStatus,
  EDateRange,
  ETargetAudience,
}: {
  EName: (name: string) => void;
  EStatus: (status: string) => void;
  EDateRange: (startDate: Date, endDate: Date) => void;
  ETargetAudience: (audience: string) => void;
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const [startDate, endDate] = event.target.value.split(" - ");
      if (startDate && endDate) {
          EDateRange(new Date(startDate), new Date(endDate));
      }
  };

  return (
      <div className="w-full grid grid-cols-5 gap-2 pb-4">
          <div>
              <Label className="text-lg">Titulo del evento</Label>
              <TextInput
                  type="text"
                  placeholder="Titulo del evento"
                  onChange={(event) => EName(event.target.value)}
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
          <div>
              <Label className="text-lg">Rango de Fecha</Label>
              <TextInput
                  type="text"
                  placeholder="Fecha de inicio - Fecha de fin"
                  onChange={handleDateChange}
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
      </div>
  );
};

export default SearchEvents;