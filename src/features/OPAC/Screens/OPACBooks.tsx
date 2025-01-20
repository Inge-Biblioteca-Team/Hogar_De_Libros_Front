import { Button, Label, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Catalog } from "../../Books/Types/BooksTypes";
import { getColection } from "../Services/BooksServices";
import OPACGridFBooks from "../Components/OPACGridFBooks";

const OPACBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [Author, setAuthor] = useState<string>("");
  const [publishYear, setPublishYear] = useState<string>("");

  const { data: catalog } = useQuery<Catalog, Error>(
    ["OPACSearch", title, Author, publishYear, selectedCategory],
    () => getColection(1, 20, title, Author, publishYear, selectedCategory),
    {
      staleTime: 5000,
    }
  );

  const handleCategoryClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const value = event.currentTarget.getAttribute("data-value");
    if (value) {
      setSelectedCategory(value);
      console.log("Categoría seleccionada:", value);
    }
  };

  const resetState = () => {
    setSelectedCategory("");
    setTitle("");
    setAuthor("");
    setPublishYear("");
  };

  return (
    <main className=" flex">
      <Sidebar className=" custom-Sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="custom-Group">
            <Sidebar.Item
              onClick={handleCategoryClick}
              data-value="Ciencias Sociales"
            >
              Ciencias Sociales
            </Sidebar.Item>
            <Sidebar.Item onClick={handleCategoryClick} data-value="Literatura">
              Literatura
            </Sidebar.Item>
            <Sidebar.Item onClick={handleCategoryClick} data-value="Geografía">
              Geografía
            </Sidebar.Item>
            <Sidebar.Item
              onClick={handleCategoryClick}
              data-value="Artes y Recreación"
            >
              Artes y Recreación
            </Sidebar.Item>
            <Sidebar.Item
              onClick={handleCategoryClick}
              data-value="Ciencias Naturales"
            >
              Ciencias Naturales
            </Sidebar.Item>
            <Sidebar.Item
              onClick={handleCategoryClick}
              data-value="Filosofía y Psicología"
            >
              Filosofía y Psicología
            </Sidebar.Item>
            <Sidebar.Item onClick={handleCategoryClick} data-value="Tecnología">
              Tecnología
            </Sidebar.Item>
            <Sidebar.Item onClick={handleCategoryClick} data-value="Religión">
              Religión
            </Sidebar.Item>
            <Sidebar.Item onClick={handleCategoryClick} data-value="Lenguas">
              Lenguas
            </Sidebar.Item>
            <Sidebar.Item
              onClick={handleCategoryClick}
              data-value="Obras Generales"
            >
              Obras Generales
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <Label value="Titulo" />
              <TextInput onChange={(event) => setTitle(event?.target.value)} />
            </Sidebar.Item>
            <Sidebar.Item>
              <Label value="Autor" />
              <TextInput onChange={(event) => setAuthor(event?.target.value)} />
            </Sidebar.Item>
            <Sidebar.Item>
              <Label value="Año de publicación" />
              <TextInput
                onChange={(event) => setPublishYear(event?.target.value)}
              />
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <Button color={"blue"} className=" w-full" onClick={resetState}>
                Borrar filtros
              </Button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className=" w-full pt-4">
        {catalog && <OPACGridFBooks colection={catalog} />}
      </div>
    </main>
  );
};

export default OPACBooks;
