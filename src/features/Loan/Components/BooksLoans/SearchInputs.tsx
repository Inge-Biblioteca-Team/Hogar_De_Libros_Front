import { Label, Select, TextInput } from "flowbite-react";
const SearchInputs = ({
  setEndtDate,
  setStartDate,
  EndDate,
  startDate,
  setType
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setType: (type: string) => void;
  EndDate: string;
  startDate: string;
}) => {
  return (
    <>
      <div className="w-full grid max-sm:grid-cols-1 grid-cols-4 gap-2 pb-4 items-end">
        <div>
          <Label htmlFor="InitialDate">Fecha de solicitud</Label>
          <TextInput
            id="InitialDate"
            type="Date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
        <div>
          <Label>Fecha de vencimiento</Label>
          <TextInput
            type="date"
            value={EndDate}
            onChange={(event) => setEndtDate(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Type">Préstamos del catálogo.</label>
          <Select onChange={(e) => setType(e.target.value)}>
            <option value="">Todos</option>
            <option value="INFANTIL">Infantiles</option>
            <option value="GENERAL">General</option>
          </Select>
        </div>
      </div>
    </>
  );
};

export default SearchInputs;
