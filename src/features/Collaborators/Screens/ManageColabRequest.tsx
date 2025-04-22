import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ColabsRows from "../Components/ColabsRows";
import ColabsTableBody from "../Components/ColabsTableBody";
import { GetColabs } from "../Service/ColabServices";
import { ColaboratorsList } from "../Types/ColaboratorTypes";
import OptMainCategory from "../Components/OptMainCategory";
import OptSubCategory from "../Components/OptSubCategory";
import { ColabCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";

const ManageColabRequest = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CLPage");
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
    ["ColaborationsList", Page, Limit, category, subCategory, date],
    () => GetColabs(Page, Limit, category, subCategory, date, "Pendiente"),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("CLPage", page.toString());
  };

  const MaxPage = Math.ceil((ColaborationsList?.count ?? 0) / 5);

    useEffect(() => {
      setCurrentPage(1);
    }, [ Limit, category, subCategory, date]);

  return (
    <>
      <ColabCrumbs text="Solicitudes de colaboraciones" />{" "}
      <main className="px-3">
        <section className=" flex gap-x-4 max-md:flex-col mb-3">
        <div className=" ">
            <Label value="Categoría del colaborador" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptMainCategory />
            </Select>
          </div>
          <div>
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
            <ColabsTableBody hiid>
              {ColaborationsList?.data.map((colab) => (
                <ColabsRows colaborator={colab} key={colab.CollaboratorId} />
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
export default ManageColabRequest;
