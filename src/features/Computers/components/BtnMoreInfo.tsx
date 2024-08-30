import { useNavigate } from "react-router-dom";

const BtnMoreInfo = () => {
  
  const navigate = useNavigate()
    const goto = () =>{
      navigate("/HogarDeLibros/Gestion/EquipodeComputo")
    }
  
  return (
    <> 
      <button 
      onClick={goto}
        type="button"
        className="bg-Bottoms w-fit text-Text text-lg rounded-lg p-1 
      hover:bg-Bottoms-dark hover:scale-105 mt-6"
      >
        Ver Mas Información
      </button>
    </>
  );
};

export default BtnMoreInfo;
