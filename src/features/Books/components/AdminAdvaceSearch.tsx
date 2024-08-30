import {faBarcode,faChartPie,faSignature,faUser,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminAdvaceSearch = ({see, Author,ISBN,SigCode,Status,}: {
  see: boolean;
  Author: (SAuthor: string) => void;
  ISBN: (SISBN: string) => void;
  SigCode: (SSigCode: string) => void;
  Status: (SStatus: string) => void;
}) => {
  return (
    <div className={`flex gap-2 ${see ? ` block` : ` hidden`}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Autor"
          className="pl-8 pr-4 py-2 border rounded-lg"
          onChange={(event) => Author(event.target.value)}
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
          onChange={(event) => ISBN(event.target.value)}
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
          onChange={(event) => SigCode(event.target.value)}
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
          onChange={(event) => Status(event.target.value)}
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
