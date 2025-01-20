import { HiInbox } from "react-icons/hi"; 
import { useNavigate } from "react-router-dom"; 

const Inboxpage = () => {
    const navigate = useNavigate()
    const goto = () =>{
      navigate("/HogarDeLibros/Mensajeria")
    };

  return (
    <button 
      className="relative "
      onClick={goto}
      title="Mensajes recibidos"
      type="button"  
    >
      <HiInbox
      className=" md:hidden lg:table-cell max-sm:w-5 max-sm:h-5 sm:w-8 sm:h-8" 
       size={35} /> 
      
    </button>
  );
};

export default Inboxpage;
