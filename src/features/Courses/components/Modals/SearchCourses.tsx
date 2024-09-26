import { Label, TextInput } from "flowbite-react";
import { BsPersonSquare } from "react-icons/bs";

const SearchCourses = ({
  SName,
}: {
  SName: (Name: string) => void;
}) => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg">Nombre</Label>
        <TextInput
          type="text"
          placeholder="Nombre"
          icon={BsPersonSquare}
          onChange={(event) => SName(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchCourses;