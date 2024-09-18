import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
import { FaIdBadge } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
const SearchUsers = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Cedula
        </Label>
        <TextInput
          id="InitialDate"
          type="text"
          placeholder="Cédula sin guiones"
          icon={FaIdBadge}
        />
      </div>
      <div>
        <Label className=" text-lg">Nombre</Label>
        <TextInput type="text" placeholder="Nombre" icon={BsPersonSquare} />
      </div>
      <div>
        <Label className=" text-lg">Privilegios</Label>
        <TextInput type="text" placeholder="Roll" icon={CgScrollV} />
      </div>
      <div>
        <Label className=" text-lg">Año de registro</Label>
        <TextInput
          type="text"
          icon={FaFileSignature}
          placeholder="Año de Registro"
        />
      </div>
    </div>
  );
};

export default SearchUsers;
