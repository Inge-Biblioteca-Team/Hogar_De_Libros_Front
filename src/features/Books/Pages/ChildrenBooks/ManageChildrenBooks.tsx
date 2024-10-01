import { Breadcrumb } from "flowbite-react";
import { useQuery } from "react-query";
import { BookApiResponse } from "../../type/Book";
import InpSearchTitle from "../../../../components/Inputs/InpSearchTitle";
import { useCallback, useEffect, useState } from "react";
import BtnAdvanceSearch from "../../components/BTN/BtnAdvanceSearch";
import SltCurrentLimit from "../../../../components/Paginations/SltCurrentLimit";
import PaginatationSelector from "../../../../components/Paginations/PaginatationSelector";
import { HomeRoute, ManageRoute } from "../../components/Redirections";
import AdminAdvaceSearch from "../../components/SearchINP/AdminAdvaceSearch";
import UseDebounce from "../../../../hooks/UseDebounce";
import { LastCrumb } from "../../../../components/BreadCrumb";
import { useNavigate } from "react-router-dom";
import BookTBL from "../../components/BookTBL";
import { GetChildrenBPaginated } from "../../services/SvChildBooks";

const ManageChildrenBooks = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MBCPage");
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
    sessionStorage.setItem("MBCPage", page.toString());
  };

  const viewAdvanceSerch = useCallback(() => setAdvance((prev) => !prev), []);
  const searchTitleDelay = UseDebounce(searchTitle, 1000);
  const seachISBNDelay = UseDebounce(searchISBN, 1000);
  const seachAuthorDelay = UseDebounce(searchAuthor, 1000);
  const seachSignaCodeDelay = UseDebounce(searchSignaCode, 1000);

  const { data: books } = useQuery<BookApiResponse, Error>(
    ["ChildrenCatalog", currentPage, currentLimit, searchTitleDelay, seachAuthorDelay, seachISBNDelay, seachSignaCodeDelay,
       searchStatus,],() => GetChildrenBPaginated(
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
  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/Gestion/LibrosI/NuevoLibro`)
  }
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
        <LastCrumb CurrentPage="Libros Infantiles"/>
      </Breadcrumb>
      <div className=" flex w-full place-content-center mt-5">
        <div className=" w-5/6 flex flex-col gap-4">
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <InpSearchTitle onSearch={setSearchTitle} Criterio="Título" />
              <AdminAdvaceSearch
                see={advance}
                Author={setSearchAuthor}
                ISBN={setSearchISBN}
                SigCode={setSearchSignaCode}
                Status={setSearchStatus}
              />
              <BtnAdvanceSearch click={viewAdvanceSerch} icon={advance} />
            </div>
            <button
      type="button"
      className="bg-Bottoms text-Text text-lg rounded-lg py-1 px-2
      hover:bg-Bottoms-dark hover:scale-105
       max-sm:hidden"
       onClick={Goto}
      >
      Añadir Libro
    </button>
          </div>
         {books && <BookTBL accion1={false} books={books}/>}
          <div className=" w-full flex justify-between">
            <div>
              <span className=" pl-5">
                Mostrar{" "}
                <span>
                  <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                </span>{" "}
                Libros por página
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

export default ManageChildrenBooks;
