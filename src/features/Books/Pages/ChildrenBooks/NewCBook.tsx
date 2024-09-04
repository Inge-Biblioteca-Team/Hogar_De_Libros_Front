import { Breadcrumb } from "flowbite-react";
import {
  HomeRoute,
  CurrentRoute,
  ManageRoute,
} from "../../components/Redirections";
import { ManageCrumbObj } from "../../../../components/BreadCrumb";
import FromNewBook from "../../components/Forms/FromNewBook";

const NewCBook = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <ManageCrumbObj Objetive="Libros Infantiles" LK="LibrosI"/>
        <CurrentRoute CurrentPage={"Añadir Libro"} />
      </Breadcrumb>
      <FromNewBook category="book-children"/>
    </>
  );
};

export default NewCBook;
