import { Breadcrumb } from "flowbite-react";
import {
  HomeRoute,
  BooksRoute,
  CurrentRoute,
  ManageRoute,
} from "../components/Redirections";
import FromNewBook from "../components/Forms/FromNewBook";

const NewBook = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksRoute />
        <CurrentRoute CurrentPage={"Añadir Libro"} />
      </Breadcrumb>
      <FromNewBook category="books" />
    </>
  );
};

export default NewBook;
