import { Breadcrumb } from "flowbite-react";
import { useQuery } from "react-query";
import { GetBookPaginated } from "../services/SvBooks";
import { BookApiResponse } from "../type/Book";
import InpSearchTitle from "../../../components/InpSearchTitle";
import { useCallback, useEffect, useState } from "react";
import BtnAdvanceSearch from "../components/BTN/BtnAdvanceSearch";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import CreateNewActive from "../../../components/CreateNewActive";
import PaginatationSelector from "../../../components/PaginatationSelector";
import { HomeRoute, ManageRoute } from "../components/Redirections";
import AdminAdvaceSearch from "../components/SearchINP/AdminAdvaceSearch";
import UseDebounce from "../../../hooks/UseDebounce";
import { BooksCrumb, LastCrumb } from "../../../components/BreadCrumb";
import BookTBL from "../components/BookTBL";

const ManageBooks = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [advance, setAdvance] = useState<boolean>(false);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchISBN, setSearchISBN] = useState<string>("");
  const [searchAuthor, setSearchAuthor] = useState<string>("");
  const [searchSignaCode, setSearchSignaCode] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<string>("");
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentPage", page.toString());
  };

  const viewAdvanceSerch = useCallback(() => setAdvance((prev) => !prev), []);
  const searchTitleDelay = UseDebounce(searchTitle, 1000);
  const seachISBNDelay = UseDebounce(searchISBN, 1000);
  const seachAuthorDelay = UseDebounce(searchAuthor, 1000);
  const seachSignaCodeDelay = UseDebounce(searchSignaCode, 1000);

  const { data: books } = useQuery<BookApiResponse, Error>(
    ["BookCatalog", currentPage, currentLimit, searchTitleDelay, seachAuthorDelay, seachISBNDelay, seachSignaCodeDelay,
       searchStatus,],() => GetBookPaginated(
        currentPage,
        currentLimit,
        searchTitleDelay,
        seachAuthorDelay,
        seachISBNDelay,
        seachSignaCodeDelay,
        searchStatus
      ),
    {
      staleTime: 600,
    }
  );
  const MaxPage = Math.ceil((books?.count ?? 0) / currentLimit);

  useEffect(() => {
    sessionStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
  
  useEffect(() => {
    setCurrentPage(1); 
  }, [searchTitleDelay, seachISBNDelay, seachAuthorDelay, seachSignaCodeDelay, searchStatus]);


  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute />
        <ManageRoute />
        <BooksCrumb/>
        <LastCrumb CurrentPage="Catalogo Libros Generales"/>
      </Breadcrumb>
      <div className=" flex w-full place-content-center mt-5 pb-6">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <InpSearchTitle onSearch={setSearchTitle} Criterio="Titulo" />
              <AdminAdvaceSearch
                see={advance}
                Author={setSearchAuthor}
                ISBN={setSearchISBN}
                SigCode={setSearchSignaCode}
                Status={setSearchStatus}
              />
              <BtnAdvanceSearch click={viewAdvanceSerch} icon={advance} />
            </div>
            <CreateNewActive objetive="Libro" />
          </div>
         {books && <BookTBL accion1={true} books={books}/>}
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
            totalPages={MaxPage}
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
