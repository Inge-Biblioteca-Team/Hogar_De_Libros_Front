import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LoginAcces = () => {
  const Navi = useNavigate();
  return (
    <>
      <button type="button">
        {""}
        <IoMdLogIn size={34} onClick={()=>Navi("/IniciarSesion")} />
      </button>
    </>
  );
};

export default LoginAcces;
