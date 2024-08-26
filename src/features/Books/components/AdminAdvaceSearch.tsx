import { faBarcode, faChartPie, faSignature, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminAdvaceSearch = ({see}:{see:boolean}) => {
  return (
    <div className={`flex gap-2 ${see?` block` :` hidden`}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Autor"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
        <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="ISBN"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
        <FontAwesomeIcon icon={faBarcode} />
        </span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Codigo de signatura"
          className="pl-8 pr-4 py-2 border rounded-lg"
        />
        <span className="absolute left-2 top-2">
        <FontAwesomeIcon icon={faSignature} />
        </span>
      </div>
      <div className="relative">
        <select
          name="status"
          id=""
          title="Estado del libro"
          className="pl-8 pr-4 py-2 border rounded-lg text-slate-500"
        >
          <option value="">Estado</option>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
        <span className="absolute left-2 top-2">
        <FontAwesomeIcon icon={faChartPie} />
        </span>
      </div>
    </div>
  );
};

export default AdminAdvaceSearch;
