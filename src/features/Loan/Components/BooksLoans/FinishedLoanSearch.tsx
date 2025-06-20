import { Label, Select, TextInput } from "flowbite-react";
import { FaIdBadge } from "react-icons/fa";

const FinishedLoanSearch = ({
  setName,
  setEndtDate,
  setStartDate,
  setType,
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setName: (Name: string) => void;
  setType: (tyoe: string) => void;
}) => {
  return (
    <div className=" flex max-md:flex-col w-full gap-4 mb-4 items-end max-md:items-stretch">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Fecha de solicitud (Inicio)
        </Label>
        <TextInput
          id="InitialDate"
          type="Date"
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />
      </div>
      <div>
        <Label className=" text-lg">Fecha de solicitud (Fin)</Label>
        <TextInput
          type="date"
          onChange={(event) => setEndtDate(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Nombre del solicitante</Label>
        <TextInput
          type="text"
          placeholder="Nombre de solicitante"
          icon={FaIdBadge}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label className=" text-lg" htmlFor="Type">
          Préstamos del catálogo.
        </label>
        <Select onChange={(e) => setType(e.target.value)}>
          <option value="">Todos</option>
          <option value="INFANTIL">Infantiles</option>
          <option value="GENERAL">General</option>
        </Select>
      </div>
    </div>
  );
};

export default FinishedLoanSearch;
