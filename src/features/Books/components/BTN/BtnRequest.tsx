import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const BtnRequest = ({ text, Objetive }: { text:string, Objetive:string }) => {

const Navigate = useNavigate()

const Navi = () =>{
  Navigate(`/HogarDeLibros/Solicitud/${Objetive}`)
}

  return (
    <Button
    color={"blue"}
    onClick={Navi}>
      {text}
    </Button>
 
  );
};

export default BtnRequest;
