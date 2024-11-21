import { Label, Select, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
import { FaIdBadge } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import OptRole from "./OptRole";
const SearchUsers = ({
  setYear,
  setRol,
  setCedula,
  setName,
}: {
  setYear: (Year: string) => void;
  setRol: (Rol: string) => void;
  setCedula: (Cedula: string) => void;
  setName: (Name: string) => void;
}) => {
  return (
    <div className="w-full max-sm:w-full max-sm:grid-cols-1 grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Cédula
        </Label>
        <TextInput
          id="InitialDate"
          type="text"
          placeholder="Cédula"
          icon={FaIdBadge}
          onChange={(event) => setCedula(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Nombre</Label>
        <TextInput
          type="text"
          placeholder="Nombre"
          icon={BsPersonSquare}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Tipo de usuario</Label>
        <Select
          icon={CgScrollV}
          onChange={(event) => setRol(event.target.value)}
        >
          <OptRole/>
        </Select>
      </div>
      <div>
        <Label className=" text-lg">Año de registro</Label>
        <TextInput
          onChange={(event) => setYear(event.target.value)}
          type="text"
          icon={FaFileSignature}
          placeholder="Año de registro"
        />
      </div>
    </div>
  );
};

export default SearchUsers;
