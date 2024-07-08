import { UseGetSalas } from "../Hooks/UseGetSalas";
import { ISala } from "../interfaces/Sala_Interface";
import Card from "./Card";

function Card_Container() {
  const { salas, loading, error } = UseGetSalas();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las salas</p>;
  return (
    <>
    <div className="flex justify-center mb-10">
      <h1 className="text-2xl">Nuestras salas</h1>
    </div>
    <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
      {salas.map((sala: ISala) => (
        <Card
          key={sala.Id.toString()}
          Imagen={sala.Imagen}
          Nombre={sala.Nombre}
          Area={sala.Area}
          Aforo={sala.Aforo}
          Ubicacion={sala.Ubicacion}
          Id={sala.Id}
        />
      ))}
      </div>
    </>
  );
}

export default Card_Container;
