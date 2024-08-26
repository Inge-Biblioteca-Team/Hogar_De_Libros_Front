import { Breadcrumb, Table } from "flowbite-react";
import AccionButtons from "../components/AccionButtons";
import { useQuery } from "react-query";
import { GetBookPaginated } from "../services/SvBooks";
import { Book } from "../type/Book";
import InpSearchTitle from "../../../components/InpSearchTitle";
import { useEffect, useState } from "react";
import BtnAdvanceSearch from "../components/BtnAdvanceSearch";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import CreateNewActive from "../../../components/CreateNewActive";
import PaginatationSelector from "../../../components/PaginatationSelector";
import { BooksRoute, HomeRoute, ManageRoute } from "../components/Redirections";
import AdminAdvaceSearch from "../components/AdminAdvaceSearch";

const ManageBooks = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  const viewAdvanceSerch = () => setAdvance(!advance);

  const { data: books } = useQuery<Book[], Error>(
    ["BookCatalog", currentPage, currentLimit],
    () => GetBookPaginated(currentPage, currentLimit),
    {
      keepPreviousData: true,
      staleTime: 60000,
    }
  );

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksRoute />
      </Breadcrumb>
      <div className=" flex w-full place-content-center mt-5">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <InpSearchTitle />
              <AdminAdvaceSearch see={advance} />
              <BtnAdvanceSearch click={viewAdvanceSerch} icon={advance} />
            </div>
            <CreateNewActive objetive="Libro" />
          </div>
          <Table hoverable>
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
              {books?.map((Books) => (
                <Table.Row key={Books.id} className=" h-24">
                  <Table.Cell className="w-96">{Books.Title}</Table.Cell>
                  <Table.Cell className="w-64">{Books.Author}</Table.Cell>
                  <Table.Cell className="w-44">{Books.ISBN}</Table.Cell>
                  <Table.Cell className="w-44">{Books.SignatureCode}</Table.Cell>
                  <Table.Cell className="w-12">Activo</Table.Cell>
                  <Table.Cell>
                    <AccionButtons id={Books.id} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div className=" w-full flex justify-between">
            <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Libros por pagina
              </span>
            </div>
            <PaginatationSelector
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBooks;
