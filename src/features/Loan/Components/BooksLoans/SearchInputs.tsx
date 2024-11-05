import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
const SearchInputs = ({
  setEndtDate,
  setSignaCode,
  setStartDate,
  SignaCode,
  EndDate,
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setSignaCode: (SignaCode: string) => void;
  SignaCode: string;
  EndDate: string;
}) => {
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = event.target.value;
    const time = " 00:00:00";
    const StarDate = date + time;
    setStartDate(StarDate);
  };

  return (
    <>
      <div className="w-full grid grid-cols-4 gap-2 pb-4 items-end">
        <div>
          <Label htmlFor="InitialDate">
            Fecha de solicitud
          </Label>
          <TextInput
            id="InitialDate"
            type="Date"
            onChange={handleStartDateChange}
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
