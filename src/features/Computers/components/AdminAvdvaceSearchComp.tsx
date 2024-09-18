import {
  faCode,
  faHashtag,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminAdvancedSearchComp = ({
  see,
  EStatus,
  ECategory,
  EBrand,
}: {
  see: boolean;
  EStatus: (EStatus: string) => void;
  ECategory: (ECategory: string) => void;
  EBrand: (EBrand: string) => void;
}) => {
  return (
    <div className={`flex gap-2 ${see ? `block` : `hidden`}`}>
      <div className="relative">
        <select
          title="Seleccione una categoría"
          className="pl-8 pr-4 py-2 border rounded-lg"
          onChange={(event) => ECategory(event.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          <option value="Mouse">Mouse</option>
          <option value="Teclado">Teclado</option>
          <option value="CPU">CPU</option>
          <option value="Monitor">Monitor</option>
          <option value="Otros">Otros</option>
        </select>
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faCode} />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Marca del equipo"
          className="pl-8 pr-4 py-2 border rounded-lg"
          onChange={(event) => EBrand(event.target.value)}
        />
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faRegistered} />
        </span>
      </div>
      <div className="relative">
        <select
          title="Seleccione el estado"
          className="pl-8 pr-4 py-2 border rounded-lg"
          onChange={(event) => EStatus(event.target.value)}
        >
          <option value="">Seleccione el estado</option>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
        <span className="absolute left-2 top-2">
          <FontAwesomeIcon icon={faHashtag} />
        </span>
      </div>
    </div>
  );
};

export default AdminAdvancedSearchComp;
