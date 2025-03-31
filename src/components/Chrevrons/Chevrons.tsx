import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const ChevronsRight = () => {
  return (
    <span className=" relative right-[-60px] max-lg:hidden" title="Siguiente">
      <CiCircleChevRight className="text-black" size={40} />
    </span>
  );
};
const ChevronsLeft = () => {
  return (
    <span className=" relative left-[-60px] max-lg:hidden" title="Anterior">
      <CiCircleChevLeft className="text-black" size={40} />
    </span>
  );
};

export { ChevronsLeft, ChevronsRight };
