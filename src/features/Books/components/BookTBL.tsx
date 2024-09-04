import { Table } from "flowbite-react"
import { Book, BookApiResponse } from "../type/Book"
import AccionButtons from "./BTN/AccionButtons"

const BookTBL = ({books}:{books:BookApiResponse}) => {
  return (
    <>
       <Table hoverable className=" text-center">
            <Table.Head className="">
              <Table.HeadCell>Titulo</Table.HeadCell>
              <Table.HeadCell>Autor</Table.HeadCell>
              <Table.HeadCell>ISBN</Table.HeadCell>
              <Table.HeadCell>Codigo De Signatura</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Acciones</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {books?.data.map((Books: Book) => (
                <Table.Row key={Books.BookCode} className=" h-24">
                  <Table.Cell className="w-96">{Books.Title}</Table.Cell>
                  <Table.Cell className="w-64 line-clamp-2">{Books.Author}</Table.Cell>
                  <Table.Cell className="w-44">
                    {Books.ISBN ? Books.ISBN : "No Posee"}
                  </Table.Cell>
                  <Table.Cell className="w-44">
                    {Books.SignatureCode ? Books.SignatureCode : "Pendiente"}
                  </Table.Cell>
                  <Table.Cell className="w-12">{Books.Status? "Activo":"Inactivo"}</Table.Cell>
                  <Table.Cell>
                    <AccionButtons id={Books.BookCode} BookTitle={Books.Title} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
    </>
  )
}

export default BookTBL
