import { Table } from "flowbite-react";
import { Book, BookApiResponse } from "../type/Book";
import AccionButtons from "./BTN/AccionButtons";
import AccionButtonsChildrens from "./BTN/AccionButtonsChildrens";

const BookTBL = ({ books, accion1 }: { books: BookApiResponse, accion1:boolean }) => {
  
  return (
    <>
      <Table hoverable className=" text-center">
        <Table.Head className="">
          <Table.HeadCell className=" w-44">Título</Table.HeadCell>
          <Table.HeadCell className=" w-44">Autor</Table.HeadCell>
          <Table.HeadCell className=" w-44">ISBN</Table.HeadCell>
          <Table.HeadCell className=" w-44">Código De Signatura</Table.HeadCell>
          <Table.HeadCell className=" w-44">Estado</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Acciones</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {books?.data.map((Books: Book) => (
            <Table.Row key={Books.BookCode} className=" h-24">
              <Table.Cell className="w-96">
                {" "}
                <div className="max-h-16 overflow-hidden">{Books.Title}</div>
              </Table.Cell>
              <Table.Cell className="w-64">
                <div className="max-h-16 overflow-hidden">{Books.Author}</div>
              </Table.Cell>
              <Table.Cell className="w-44">
                {Books.ISBN ? Books.ISBN : "No Posee"}
              </Table.Cell>
              <Table.Cell className="w-44">
                {Books.SignatureCode ? Books.SignatureCode : "Pendiente"}
              </Table.Cell>
              <Table.Cell className="w-12">
                {Books.Status ? "Activo" : "Inactivo"}
              </Table.Cell>
              <Table.Cell>
                {accion1? <AccionButtons id={Books.BookCode} BookTitle={Books.Title} Status={Books.Status} />: <AccionButtonsChildrens id={Books.BookCode} BookTitle={Books.Title} Status={Books.Status} />}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default BookTBL;
