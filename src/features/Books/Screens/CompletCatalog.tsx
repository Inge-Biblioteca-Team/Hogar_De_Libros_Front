import { ColecctionCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CatalogLists from "../Components/Views/CatalogLists";

const CompletCatalog = () => {
  const categories = [
    "Ciencias Sociales",
    "Literatura",
    "Geografía",
    "Artes y Recreación",
    "Ciencias Naturales",
    "Filosofía y Psicología",
    "Tecnología",
    "Religión",
    "Lenguas",
    "Obras Generales",
  ];

  return (
    <>
      <ColecctionCrumbs text="Catalogo completo" />
      <main className=" flex flex-col items-center justify-center w-full">
        {categories.map((category) => (
          <CatalogLists category={category} />
        ))}
      </main>
    </>
  );
};

export default CompletCatalog;
