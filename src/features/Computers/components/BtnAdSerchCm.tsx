import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnAdminAdSearchCm = ({
  click,
  icon,
}: {
  click: () => void;
  icon: boolean;
}) => {
  return (
    <button
      title="Busqueda Avanzada"
      type="button"
      className="bg-Bottoms text-white text-2xl rounded-lg px-2
      hover:bg-Bottoms-dark hover:scale-105
       max-sm:hidden w-12"
      onClick={click}
    >
      {icon ? (
        <FontAwesomeIcon icon={faMinusCircle} />
      ) : (
        <FontAwesomeIcon icon={faPlusCircle} />
      )}
    </button>
  );
};

export default BtnAdminAdSearchCm;
