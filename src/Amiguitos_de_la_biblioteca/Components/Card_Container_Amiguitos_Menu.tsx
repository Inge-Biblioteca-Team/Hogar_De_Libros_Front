import { UseGetAmiguitosMenu } from "../Hooks/UseGetAmiguitosMenu";
import { IAmiguitosMenu } from "../Interfaces/Amiguitos_Menus.interface";
import Card_Amiguitos_Menu from "./Card_Amiguitos_Menu";


function Card_Container_Amiguitos_Menu() {
  const {menu, loading, error} =UseGetAmiguitosMenu();

  if(loading) return <p>Cargando.....</p>
  if(error) return <p>Error al cargar programas y actividades</p>
  return (
    <>
    
    <div className="flex flex-row flex-wrap gap-x-4 mt-20 justify-evenly">
      {menu.map((menu: IAmiguitosMenu) => (
        <Card_Amiguitos_Menu
          key={menu.Id.toString()}
          Imagen={menu.Imagen}
          Titulo={menu.Titulo}
          Descripcion={menu.Descripcion}
          Id={menu.Id}
        />
      ))}
      </div>
      
    </>
  );
}

export default Card_Container_Amiguitos_Menu;
