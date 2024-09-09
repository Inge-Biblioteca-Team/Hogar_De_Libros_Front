import { useNavigate } from "react-router-dom";

const BtnReserve = ({ text, Objetive }: { text:string, Objetive:string }) => {

const Navigate = useNavigate()

const Navi = () =>{
  Navigate(`/HogarDeLibros/Gestion/Prestamos/SolicitarLibro/${Objetive}`)
}

  return (
    <button
      type="button"
      className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105
         mt-4 max-sm:hidden"
      onClick={Navi}
    >
      {text}
    </button>
  );
};

export default BtnReserve;
