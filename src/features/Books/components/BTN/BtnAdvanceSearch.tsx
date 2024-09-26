import { faMagnifyingGlassPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAdvanceSearch = ({
  click,
  icon,
}: {
  click: () => void;
  icon: boolean;
}) => {
  return (
    <button
      title="Bsqueda Avanzada"
      type="button"
      className="bg-Bottoms text-white text-2xl rounded-lg px-2
    hover:bg-Bottoms-dark hover:scale-105
     max-sm:hidden"
      onClick={click}
    >
      {icon ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
      )}
    </button>
  );
};

export default BtnAdvanceSearch;
