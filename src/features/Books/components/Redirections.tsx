import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BooksRoute = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/Gestion/Libros">
        Libros
      </Breadcrumb.Item>
    </>
  );
};
const ManageRoute = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/Gestion" className=" !text-3xl">Gestión</Breadcrumb.Item>
    </>
  );
};

const HomeRoute = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros" icon={HiHome}>
        Inicio
      </Breadcrumb.Item>
    </>
  );
};

const SpecialRoute = ({ FinalPath }: { FinalPath: string }) => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros">{FinalPath}</Breadcrumb.Item>
    </>
  );
};

const CurrentRoute = ({ CurrentPage }: { CurrentPage: string }) => {
  return (
    <>
      <Breadcrumb.Item>{CurrentPage}</Breadcrumb.Item>
    </>
  );
};

export { BooksRoute, HomeRoute, ManageRoute, SpecialRoute, CurrentRoute };
