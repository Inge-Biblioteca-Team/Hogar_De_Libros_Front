import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ColabsTableBody from "../Components/ColabsTableBody";
import { GetColabs } from "../Service/ColabServices";
import { ColaboratorsList } from "../Types/ColaboratorTypes";
import ColabHistoryRow from "../Components/ColabHistoryRow";
import OptMainCategory from "../Components/OptMainCategory";
import OptSubCategory from "../Components/OptSubCategory";
import { ColabCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";
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

    useEffect(() => {
      setCurrentPage(1);
    }, [ Limit, category, subCategory, date]);

  const MaxPage = Math.ceil((ColaborationsList?.count ?? 0) / Limit);

  return (
    <>
      <ColabCrumbs text="Historial de colaboraciones" />
      <main className=" px-3">
      <section className=" flex gap-x-4 max-md:flex-col mb-3">
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
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading &&
            (!ColaborationsList || ColaborationsList.count == 0) && (
              <NoResults />
            )}
          {!isLoading && ColaborationsList && ColaborationsList.count > 0 && (
            <ColabsTableBody>
              {ColaborationsList?.data.map((colab) => (
                <ColabHistoryRow
                  colaborator={colab}
                  key={colab.CollaboratorId}
                />
              ))}
            </ColabsTableBody>
          )}
          <DesktopPagination
            page={Page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
          <MobilePagination
            page={Page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
        </section>
      </main>
    </>
  );
};

export default ManageColabHistory;
