import { useState } from "react";
import { useQuery } from "react-query";
import { DonationsList } from "../Types/DonationType";
import { GetDonationList } from "../Service/SVDonations";
import { Label, Select, TextInput } from "flowbite-react";
import OptDonMainCategories from "../Components/OptDonMainCategories";
import { DonationsCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import TableDonations from "../Components/TableDonations";
import RowsRequestDonation from "../Components/RowsRequestDonation";
import NoResults from "../../../components/NoResults";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import Loader from "../../../components/Loader";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";

const ManageRequestDonations = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MRDPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: Donations, isLoading } = useQuery<DonationsList, Error>(
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

  const MaxPage = Math.ceil((Donations?.count ?? 0) / Limit);

  return (
    <>
      <DonationsCrumbs text="Propuestas de donación" />
      <main className=" px-3">
        <section className=" max-md:flex-col flex w-full gap-x-3 mb-3">
          <div>
            <Label value="Categoría de la donación" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OptDonMainCategories />
            </Select>
          </div>
          <div>
            <Label value="Fecha de donación" />
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
          {!isLoading && (!Donations || Donations.count == 0) && <NoResults />}
          {!isLoading && Donations && Donations.count > 0 && (
            <TableDonations>
              {Donations?.data.map((donation) => (
                <RowsRequestDonation
                  donation={donation}
                  key={donation.DonationID}
                />
              ))}
            </TableDonations>
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

export default ManageRequestDonations;
