import { useNavigate } from "react-router-dom";
import icon from "./../../../Assets/LoginIcon.png"

const LoginAcces = () => {
  const Navi = useNavigate();
  return (
    <>
      <button type="button" title="Iniciar Sesión">
        {""}
        <img src={icon} alt="Iniciar Session" width={40} onClick={()=>Navi("/IniciarSesion")}
        className="invert" />
      </button>
    </>
  );
};

export default LoginAcces;
