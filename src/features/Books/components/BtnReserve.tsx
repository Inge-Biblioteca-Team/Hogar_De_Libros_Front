import { useNavigate } from "react-router-dom";

const BtnReserve = ({ id }: { id: string }) => {
  const navi = useNavigate();
  const Goto = () => {
    navi(`/HogarDeLibros/CatalogoDeLibros/Libro/${id}`);
  };

  return (
    <button
      type="button"
      className="bg-Bottoms text-Text text-lg rounded-lg p-1 
        hover:bg-Bottoms-dark hover:scale-105
         mt-4 max-sm:hidden"
      onClick={Goto}
    >
      Reservar Ahora
    </button>
  );
};

export default BtnReserve;
