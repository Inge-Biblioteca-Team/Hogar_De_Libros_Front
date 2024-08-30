import { useNavigate } from "react-router-dom";

const CreateNewActive = ({objetive}:{objetive:string}) => {
  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/Gestion/${objetive}s/Crear${objetive}`)
  }
  return (
    <button
      type="button"
      className="bg-Bottoms text-Text text-lg rounded-lg py-1 px-2
      hover:bg-Bottoms-dark hover:scale-105
       max-sm:hidden"
       onClick={Goto}
      >
      Añadir {objetive}
    </button>
  );
};

export default CreateNewActive;
