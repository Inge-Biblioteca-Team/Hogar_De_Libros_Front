import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
import { FaIdBadge } from "react-icons/fa";

const FinishedLoanSearch = ({
  setName,
  setEndtDate,
  setSignaCode,
  setStartDate,
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setName: (Name: string) => void;
  setSignaCode: (SignaCode: string) => void;
}) => {
  return (
    <div className="w-full grid grid-cols-4 gap-2 pb-4">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Fecha de Solicitud (Inicio)
        </Label>
        <TextInput id="InitialDate" type="Date"
         onChange={(event) => {
          setStartDate(event.target.value);
        }}  />
      </div>
      <div>
        <Label className=" text-lg">Fecha De Solicitud (Fin)</Label>
        <TextInput type="date" onChange={(event)=>(setEndtDate(event.target.value))}/>
      </div>
      <div>
        <Label className=" text-lg">Nombre del solicitante</Label>
        <TextInput type="text" placeholder="Nombre de solicitante" icon={FaIdBadge} 
        onChange={(event)=>(setName(event.target.value))}/>
      </div>
      <div>
        <Label className=" text-lg">Código De Signatura</Label>
        <TextInput
        onChange={(event)=>(setSignaCode(event.target.value))}
          type="text"
          icon={FaFileSignature}
          placeholder="Código De Signaruta"
        />
      </div>
    </div>
  );
};

export default FinishedLoanSearch;
