import { faLaptop, faCode, faHashtag, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AdminAdvancedSearchProps {
  see: boolean;
}

const AdminAdvancedSearchComp = ({ see }: AdminAdvancedSearchProps) => {
  return (
    <div className={`flex gap-2 ${see ? `block` : `hidden`}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Marca del equipo"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faRegistered} />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Código"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faCode} />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Número de serie"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faHashtag} />
        </span>
      </div>
    </div>
  );
};

export default AdminAdvancedSearchComp;