import { useQuery } from "react-query";
import { getCategoriesNames } from "../Services/BooksServices";

const OptCategories = () => {
  const { data: categories, isLoading: loadingCategories } = useQuery<string[]>(
    ["CategoriesName"],
    getCategoriesNames,
    {
      staleTime: Infinity,
    }
  );

  return (
    <>
      {loadingCategories && <option value="">Cargando categorías</option>}
      {!loadingCategories && <option value="">Seleccione una categoría</option>}
      {categories
        ?.filter((category) => category !== "")
        .map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
    </>
  );
};

export default OptCategories;
