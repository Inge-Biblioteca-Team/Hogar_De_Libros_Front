import { Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "react-query";
import CustomPagination from "../../../components/CustomPagination";
import ColabsTableBody from "../Components/ColabsTableBody";
import { GetColabs } from "../Service/ColabServices";
import { ColaboratorsList } from "../Types/ColaboratorTypes";
import ColabHistoryRow from "../Components/ColabHistoryRow";
import OptMainCategory from "../Components/OptMainCategory";
import OptSubCategory from "../Components/OptSubCategory";
import { ColabCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
const ManageColabHistory = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CLHPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: ColaborationsList, isLoading } = useQuery<
    ColaboratorsList,
    Error
  >(
    ["ColaborationsHistory", Page, Limit, category, subCategory, date],
    () => GetColabs(Page, Limit, category, subCategory, date),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CLHPage", page.toString());
  };

  const MaxPage = Math.ceil((ColaborationsList?.count ?? 0) / 5);

  return (
    <>
      <ColabCrumbs text="Historial de colaboraciones" />
      <main className="  flex flex-col items-center justify-center w-full gap-5">
        <section className=" flex lg:flex-row md:flex-col md:w-full md:pl-4 md:pr-4 max-sm:flex-col w-4/5 gap-2 max-sm:w-full max-sm:px-2">
          <div>
            <Label value="Categoría del colaborador" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptMainCategory />
            </Select>
          </div>
          <div className=" ">
            <Label value="Subcategoría" />
            <Select onChange={(event) => setSubCategory(event.target.value)}>
              <OptSubCategory />
            </Select>
          </div>
          <div className=" ">
            <Label value="Fecha de colaboración" />
            <TextInput
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </section>
        <section className="w-4/5 md:w-full md:pl-4 md:pr-4 max-sm:w-full max-sm:px-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : ColaborationsList && ColaborationsList.data.length > 0 ? (
            <>
              <ColabsTableBody>
                {ColaborationsList?.data.map((colab) => (
                  <ColabHistoryRow
                    colaborator={colab}
                    key={colab.CollaboratorId}
                  />
                ))}
              </ColabsTableBody>
            </>
          ) : (
            <NoResults />
          )}

          <div className="block max-sm:hidden">
            <CustomPagination
              page={Page}
              onPageChange={onPageChange}
              totalPages={MaxPage}
              setCurrentLimit={setCurrentLimit}
            />
          </div>

          <div className="sm:hidden  flex justify-center ">
            <Pagination
              layout="navigation"
              currentPage={Page}
              totalPages={MaxPage}
              onPageChange={onPageChange}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ManageColabHistory;
