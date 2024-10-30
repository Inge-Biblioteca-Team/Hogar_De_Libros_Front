import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";
const BooksMiddleScreen = () => {
  const navi = useNavigate();

  return (
    <>
      <MiddleCrumb label="Catalogo" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Catalogo/Infantil")}
          >
            <h3>Catalogo infantil</h3>
            <p>
              No dejamos a nadie por fuera y los pequeñines no son la exención,
              tenemos un amplio catalogo infantil con mas de X ejemplares,
              listos para que tus niños se diviertas mientras lees junto a
              ellos.
            </p>
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Catalogo/Completo")}
          >
            <h3>Búsquedas por titulo y categoría</h3>
            <p>
              Entre los mas de x libros que tenemos puedes buscar por diferentes
              criterios, si prefieres una búsqueda sencilla esta es tu opción.
              podrás ver nuestro amplio catalogo desde cualquier lugar.
            </p>
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Catalogo/Avanzado")}
          >
            <h3>Búsqueda avanzada</h3>
            <p>
              Si buscas algo mas especifico esta es tu opción, en este apartado
              podrás filtrar nuestro catalogo por los siguientes criterios.
              <ul>
                <li>Autor</li>
                <li>Titulo</li>
                <li>Código de signatura</li>
                <li>ISBN</li>
                <li>Editorial</li>
                <li>Categoría de estante</li>
              </ul>
            </p>
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Catalogo/Catalogo_Completo")}
          >
            <h3>Catalogo general</h3>
            <p>
              Actualmente contamos con un catalogo con mas de X libros de los
              cuales X están disponibles para que los leas en cualquier momento
              explora la amplia gama de libros que tenemos disponibles para ti.
            </p>
          </Card>
        </section>
      </main>
    </>
  );
};

export default BooksMiddleScreen;
