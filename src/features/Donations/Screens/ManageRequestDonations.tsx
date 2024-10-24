import { useState } from "react";
import { useQuery } from "react-query";
import CustomPagination from "../../../components/CustomPagination";
import { DonationsList } from "../Types/DonationType";
import { GetDonationList } from "../Service/SVDonations";
import { Label, Select, TextInput } from "flowbite-react";
import OptDonMainCategories from "../Components/OptDonMainCategories";
import { DonationsCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";

const ManageRequestDonations = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MRDPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: Donations } = useQuery<DonationsList, Error>(
    ["DonationsRequest", Page, Limit, category, date],
    () => GetDonationList(Page, Limit, category, date, "Pendiente"),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MRDPage", page.toString());
  };

  const MaxPage = Math.ceil((Donations?.count ?? 0) / 5);

  return (
    <>
    <DonationsCrumbs text="Propuestas de donación"/>
      <main className="flex flex-col items-center justify-center w-full gap-5">
        <section className=" flex w-4/5 gap-2">
          <div>
            <Label value="Categoría del colaborador" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptDonMainCategories />
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
        <CustomPagination
          page={Page}
          onPageChange={onPageChange}
          totalPages={MaxPage}
          setCurrentLimit={setCurrentLimit}
          total={Donations?.count || 0}
        />
      </main>
    </>
  );
};

export default ManageRequestDonations;
