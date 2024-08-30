import { useNavigate } from "react-router-dom";

const BtnReserve = ({ text, Goto, Objetive }: { id: string, text:string, Goto:string, Objetive:string }) => {

const Navigate = useNavigate()

const Navi = () =>{
  Navigate(`/HogarDeLibros/CatalogoDeLibros/Libro/${Objetive}/${Goto}`)
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
