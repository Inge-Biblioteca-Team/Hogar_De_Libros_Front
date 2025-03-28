import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { CiLogin } from "react-icons/ci";
const LoginAcces = () => {
  const Navi = useNavigate();
  return (
    <>
      <Button title="Iniciar sesión" className=" transition-transform hover:scale-105 " onClick={() => Navi("/IniciarSesion")} color={"gray"}>
        Iniciar sesión<CiLogin size={22} />
      </Button>
    </>
  );
};

export default LoginAcces;
