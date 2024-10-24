import { Label, TextInput } from "flowbite-react";
import { FaIdBadge } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";

const SearchFriend = ({
setPrincipalCategory,
setSubCategory,
setDateGenerated
}: {
    setPrincipalCategory: (PrincipalCategory: string) => void;
    setSubCategory: (SubCategory: string) => void;
    setDateGenerated: (DateGenerated: string) => void;
}) => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Categoría Principal
        </Label>
        <TextInput
          type="text"
          placeholder="Categoría Principal"
          icon={FaIdBadge}
          onChange={(event) => setPrincipalCategory(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Sub Categoría</Label>
        <TextInput
          type="text"
          placeholder="Sub Categoría"
          icon={BsPersonSquare}
          onChange={(event) => setSubCategory(event.target.value)}
        />
      </div>
      <div>
      <Label className=" text-lg">Fecha de solicitud</Label>
        <TextInput
          type="text"
          placeholder="Fecha de solicitud"
          icon={BsPersonSquare}
          onChange={(event) => setDateGenerated(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFriend;
