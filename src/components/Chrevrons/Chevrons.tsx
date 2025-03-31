import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const ChevronsRight = () => {
  return (
    <span className=" relative max-md:hidden" title="Siguiente">
      <CiCircleChevRight
        className="text-black hover:scale-125 hover:text-sky-800"
        size={40}
      />
    </span>
  );
};
const ChevronsLeft = () => {
  return (
    <span className=" max-md:hidden" title="Anterior">
      <CiCircleChevLeft
        className="text-black hover:scale-125 hover:text-sky-800"
        size={40}
      />
    </span>
  );
};

export { ChevronsLeft, ChevronsRight };
