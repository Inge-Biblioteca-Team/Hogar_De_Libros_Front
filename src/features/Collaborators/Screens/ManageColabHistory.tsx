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

const ManageColabHistory = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("CLHPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: ColaborationsList } = useQuery<ColaboratorsList, Error>(
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
      <main className=" flex flex-col items-center justify-center w-full gap-5">
        <section className=" flex w-4/5 gap-2">
          <div>
            <Label value="Categoría del colaborador" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptMainCategory />
            </Select>
          </div>
          <div>
            <Label value="Sub categoría" />
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
        <section className=" w-4/5">
          {ColaborationsList && ColaborationsList.count > 0? (
            <>
              <ColabsTableBody hiid>
                {ColaborationsList?.data.map((colab) => (
                  <ColabHistoryRow
                    colaborator={colab}
                    key={colab.CollaboratorId}
                  />
                ))}
              </ColabsTableBody>
              <CustomPagination
                page={Page}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={ColaborationsList?.count || 0}
              />
            </>
          ):<NoResults/>}
        </section>
      </main>
    </>
  );
};

export default ManageColabHistory;
