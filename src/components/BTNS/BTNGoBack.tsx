import { useNavigate } from "react-router-dom";

const BTNGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      type="button"
      onClick={handleGoBack}
      className="bg-Bottoms text-white text-2xl rounded-lg p-2 mt-9
hover:bg-Bottoms-dark hover:scale-105
max-sm:hidden"
    >
      Regresar
    </button>
  );
};

export default BTNGoBack;
