import { useNavigate } from "react-router-dom";

const BtnNewComputer = () => {

  const navigate = useNavigate()
  const goto = () =>{
    navigate("/HogarDeLibros/Gestion/EquipodeComputo/AñadirEquipo")
  }
  return (
    <> 
      <button onClick={goto}
        type="button"
        className="bg-Bottoms w-fit text-Text text-lg rounded-lg p-1 
      hover:bg-Bottoms-dark hover:scale-105"
      >
        Añadir Equipo
      </button>
    </>
  );
};

export default BtnNewComputer;
