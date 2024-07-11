import { useNavigate } from "react-router-dom";

function RoomsInfoText() {
  const navigate = useNavigate(); // Hook de react-router-dom para navegar entre rutas
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-5"> 
          Bienvenido a las salas de la Biblioteca
        </h2>  
        <p className="text-center max-w-md">
          <span>
            En este apartado podras ver y solicitar las distintas salas que
            cuenta la biblioteca para el uso de estudio y actividades grupales.
          </span>
        </p>
        <button
          onClick={() => navigate("/rooms")} // Navega a la ruta /rooms
          className="bg-slate-600 border mt-5 border-transparent rounded-md"
          type="button"
        >
          Ver Salas
        </button>
      </div>
    </>
  );
}

export default RoomsInfoText;
