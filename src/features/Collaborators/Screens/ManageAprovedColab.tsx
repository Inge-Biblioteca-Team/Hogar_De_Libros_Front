import { useQuery } from "react-query";
import ColabsTableBody from "../Components/ColabsTableBody";
import { GetColabs } from "../Service/ColabServices";
import { ColaboratorsList } from "../Types/ColaboratorTypes";
import CustomPagination from "../../../components/CustomPagination";
import { useState } from "react";
import { Label, Select, TextInput } from "flowbite-react";
import ColabAprovedRow from "../Components/ColabAprovedRow";
import OptSubCategory from "../Components/OptSubCategory";
import OptMainCategory from "../Components/OptMainCategory";
import { ColabCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

const ManageAprovedColab = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CLAPage");
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
    ["ColaborationsAproved", Page, Limit, category, subCategory, date],
    () => GetColabs(Page, Limit, category, subCategory, date, "Aprobado"),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CLAPage", page.toString());
  };

  const MaxPage = Math.ceil((ColaborationsList?.count ?? 0) / 5);

  return (
    <>
      <ColabCrumbs text="Colaboraciones futuras" />
      <main className=" flex flex-col items-center justify-center w-full gap-5">
        <section className=" flex lg:flex-row md:flex-col md:w-full md:pr-4 md:pl-4 max-sm:flex-col w-4/5 gap-2 max-sm:w-full max-sm:px-3">
          <div className=" ">
            <Label value="Categoría del colaborador" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptMainCategory />
            </Select>
          </div>
          <div className=" ">
            <Label value="Categoría secundaria" />
            <Select onChange={(event) => setSubCategory(event.target.value)}>
              <OptSubCategory />
            </Select>
          </div>
          <div>
            <Label value="Fecha de colaboración" />
            <TextInput
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </section>
        <section className=" w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:px-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : ColaborationsList ? (
            <>
              <ColabsTableBody hiid>
                {ColaborationsList?.data.map((colab) => (
                  <ColabAprovedRow
                    colaborator={colab}
                    key={colab.CollaboratorId}
                  />
                ))}
              </ColabsTableBody>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={Page}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={ColaborationsList?.count || 0}
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
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>
    </>
  );
};

export default ManageAprovedColab;
