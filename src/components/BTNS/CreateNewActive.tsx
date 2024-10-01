import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const CreateNewActive = ({objetive}:{objetive:string}) => {
  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/Gestion/${objetive}s/Nuevo${objetive}`)
  }
  return (
    <Button
      type="button"
    color={"blue"}
       onClick={Goto}
      >
      Añadir {objetive}
    </Button>
  );
};

export default CreateNewActive;
