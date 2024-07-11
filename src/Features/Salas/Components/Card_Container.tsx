import { UseGetSalas } from "../Hooks/UseGetSalas";
import { IRoom } from "../interfaces/Room_Interface";
import Card from "./Card";

function Card_Container() {
  const { rooms, loading, error } = UseGetSalas();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las salas</p>;
  return (
    <>
    <div className="flex justify-center  mb-10">
      <h1 className="text-2xl">Nuestras salas</h1>
    </div>
    <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
      {rooms.map((room: IRoom) => (
        <Card
          key={room.Id.toString()}
          Imagen={room.Imagen}
          Nombre={room.Nombre}
          Area={room.Area}
          Aforo={room.Aforo}
          Ubicacion={room.Ubicacion}
          Id={room.Id}
        />
      ))}
      </div>
    </>
  );
}

export default Card_Container;
