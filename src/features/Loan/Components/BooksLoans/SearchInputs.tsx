import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
const SearchInputs = ({
  setEndtDate,
  setSignaCode,
  setStartDate,
  SignaCode,
  EndDate,
  startDate
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setSignaCode: (SignaCode: string) => void;
  SignaCode: string;
  EndDate: string;
  startDate:string
}) => {
  
  return (
    <>
      <div className="w-full grid max-sm:grid-cols-1 grid-cols-4 gap-2 pb-4 items-end">
        <div>
          <Label htmlFor="InitialDate">
            Fecha de solicitud
          </Label>
          <TextInput
            id="InitialDate"
            type="Date"
            value={startDate}
            onChange={(event)=>setStartDate(event.target.value)}
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
          <Label>Código de signatura</Label>
          <TextInput
            type="text"
            icon={FaFileSignature}
            placeholder="Código de signatura"
            value={SignaCode}
            onChange={(event) => setSignaCode(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchInputs;
