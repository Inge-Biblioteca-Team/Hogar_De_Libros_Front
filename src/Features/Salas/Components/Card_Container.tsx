import { UseGetSalas } from "../Hooks/UseGetSalas";
import { IRoom } from "../interfaces/Room_Interface";
import Card from "./Card";

// funcion que trae la informacion de las salas y las muestra en las tarjetas
function Card_Container() {
  const { rooms, loading, error } = UseGetSalas();


  if (loading) return <p>Cargando...</p>; // si esta cargando muestra este mensaje
  if (error) return <p>Error al cargar las salas</p>; // si hay un error muestra este mensaje
  return (
    <>
    <div className="flex justify-center  mb-10"> 
      <h1 className="text-2xl">Nuestras salas</h1>
    </div>
    <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
      {rooms.map((room: IRoom) => ( 
        // Con un .map recorremos el arreglo de salas y por cada sala creamos una tarjeta
        <Card
          key={room.Id.toString()} //Pone la key a la tarjeta
          Imagen={room.Imagen} //Pone la imagen de la tarjeta
          Nombre={room.Nombre} //Pone el nombre de la tarjeta
          Area={room.Area} //Pone el area de la tarjeta
          Aforo={room.Aforo} //Pone el aforo de la tarjeta
          Ubicacion={room.Ubicacion} //Pone la ubicacion de la tarjeta
          Id={room.Id} //Pone el id de la tarjeta
        />
      ))}
      </div>
    </>
  );
}

export default Card_Container;
