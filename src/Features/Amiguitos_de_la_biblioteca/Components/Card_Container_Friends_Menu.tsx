
import { UseGetFriendsMenu } from "../Hooks/UseGetFriendsMenu";
import { IFriendsMenu } from "../Interfaces/Friends-Menu.interface";

import Card_Amiguitos_Menu from "./CardFriendsMenu";


function Card_Container_Friends_Menu() {
  const {menu, loading, error} =UseGetFriendsMenu();

  if(loading) return <p>Cargando.....</p>
  if(error) return <p>Error al cargar programas y actividades</p>
  return (
    <>
    
    <div className="flex flex-row flex-wrap gap-x-4 mt-20 justify-evenly">
      {menu.map((menu: IFriendsMenu) => (
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

export default Card_Container_Friends_Menu;
