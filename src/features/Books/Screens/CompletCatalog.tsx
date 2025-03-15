import { ColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CatalogLists from "../Components/Views/CatalogLists";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import { useEffect, useState } from "react";
const CompletCatalog = () => {
  const categories = [
    "Artes y Recreacion",
    "Ciencias Naturales y Matematicas",
    "Ciencias Sociales",
    "Filosofia y Psicologia",
    "Geografia e Historia",
    "Lenguas",
    "Literatura",
    "Obras Generales",
    "Religion",
    "Tecnologia (Aplicada)",
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ColecctionCrumbs text="Catalogo completo" />

      {isLoading ? (
        <div className=" w-full flex items-center justify-center">
          <figure>
            <img width={400} src={Loader} alt="...Cargando" />
            <figcaption className=" text-center">...Cargando</figcaption>
          </figure>
        </div>
      ) : (
        <main className=" flex flex-col items-center justify-center w-full">
          {categories.map((category) => (
            <CatalogLists category={category} />
          ))}
        </main>
      )}
    </>
  );
};

export default CompletCatalog;
