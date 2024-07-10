import { UseGetAmiguitosMenu } from "../Hooks/UseGetAmiguitosMenu";
import { IAmiguitosMenu } from "../Interfaces/Amiguitos_Menus.interface";


function Card_Container_Programas_Actividades() {
  const {menu, loading, error} =UseGetAmiguitosMenu();

  if(loading) return <p>Cargando.....</p>
  if(error) return <p>Error al cargar programas y actividades</p>
  return (
    <>
      <section className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl mb-20">Programas y Actividades</h2>
        <div className="flex  justify-evenly">
        {menu.map((menu: IAmiguitosMenu)=>(
          <Card_Programas_Actividades
            key={menu.Id.toString()}
            Imagen={menu.Imagen}
            Titulo={menu.Titulo}
            Descripcion={menu.Descripcion}        
          />
        ))}
        </div>
      </section>
    </>
  );
}

export default Card_Container_Programas_Actividades;
