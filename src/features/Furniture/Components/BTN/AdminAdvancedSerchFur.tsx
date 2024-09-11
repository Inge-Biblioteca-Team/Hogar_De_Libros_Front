import {
    faHashtag,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const AdminAdvancedSearchFur = ({
    see,
    EStatus,
  }: {
    see: boolean;
    EStatus: (EStatus: string) => void;
    
  }) => {
    return (
      <div className={`flex gap-2 ${see ? `block` : `hidden`}`}>
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
  
  export default AdminAdvancedSearchFur;