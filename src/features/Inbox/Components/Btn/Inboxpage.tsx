import { HiInbox } from "react-icons/hi"; 
import { useNavigate } from "react-router-dom"; 

const Inboxpage = () => {
    const navigate = useNavigate()
    const goto = () =>{
      navigate("/HogarDeLibros/Mensajeria")
    };

  return (
    <button 
      className="relative"
      onClick={goto}
      title="Mensajes recibidos"
      type="button"  
    >
      <HiInbox size={35} /> 
      
    </button>
  );
};

export default Inboxpage;
