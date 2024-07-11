
import { UseGetFriendsMenu } from "../Hooks/UseGetFriendsMenu";
import { IFriendsMenu } from "../Interfaces/Friends-Menu.interface";

import Card_Amiguitos_Menu from "./CardFriendsMenu";


function Card_Container_Friends_Menu() {
  const {menu, loading, error} =UseGetFriendsMenu(); // se llama a la funcion que trae los datos de la API del hook UseGetFriendsMenu

  if(loading) return <p>Cargando.....</p> // si esta cargando muestra este mensaje
  if(error) return <p>Error al cargar programas y actividades</p> // si hay un error muestra este mensaje
  return (
    <>
    
    <div className="flex flex-row flex-wrap gap-x-4 mt-20 justify-evenly">
      {menu.map((menu: IFriendsMenu) => ( /* mediante un .map recorremos el arreglo de programas y
       actividades y por cada uno creamos una tarjeta*/
        <Card_Amiguitos_Menu
          key={menu.Id.toString()} //Pone la key a la tarjeta
          Imagen={menu.Imagen} //Pone la imagen de la tarjeta
          Titulo={menu.Titulo} //Pone el titulo de la tarjeta
          Descripcion={menu.Descripcion} //Pone la descripcion de la tarjeta
          Id={menu.Id} //Pone el id de la tarjeta
        />
      ))}
      </div>
      
    </>
  );
}

export default Card_Container_Friends_Menu;
