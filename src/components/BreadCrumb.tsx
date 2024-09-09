import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const HomeCrumb = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros" icon={HiHome}>
        Inicio
      </Breadcrumb.Item>
    </>
  );
};
const BooksCrumb = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/CatalogoDeLibros">
        Libros
      </Breadcrumb.Item>
    </>
  );
};
const ManageCrumb = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/Gestion">Gestión</Breadcrumb.Item>
    </>
  );
};

const ManageCrumbObj = ({ Objetive, LK }: { Objetive: string; LK: string }) => {
  return (
    <>
      <Breadcrumb.Item href={`/HogarDeLibros/Gestion/${LK}`}>
        {Objetive}
      </Breadcrumb.Item>
    </>
  );
};

const LastCrumb = ({ CurrentPage }: { CurrentPage: string }) => {
  return (
    <>
      <Breadcrumb.Item>{CurrentPage}</Breadcrumb.Item>
    </>
  );
};

const LoanCrumb = () => {
  return (
    <>
      <Breadcrumb.Item href="/HogarDeLibros/Gestion/Prestamos">
        Prestamos
      </Breadcrumb.Item>
    </>
  );
};
const SearchCrumb = () => {
  const navi = useNavigate();
  const goback = () => {
    navi(-1);
  };
  return (
    <>
      <Breadcrumb.Item onClick={goback}><span className=" text-black cursor-pointer">Busqueda</span></Breadcrumb.Item>
    </>
  );
};
export {
  ManageCrumb,
  HomeCrumb,
  LastCrumb,
  ManageCrumbObj,
  BooksCrumb,
  LoanCrumb,
  SearchCrumb,
};
