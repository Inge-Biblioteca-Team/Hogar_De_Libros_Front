import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import OptDonMainCategories from "../Components/OptDonMainCategories";
import { GetDonationList } from "../Service/SVDonations";
import { DonationsList } from "../Types/DonationType";
import { DonationsCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import RowsHistoryDonations from "../Components/RowstHistoryDonations";
import TableDonations from "../Components/TableDonations";
import NoResults from "../../../components/NoResults";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";

const ManageDonationsHistory = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MHDPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: Donations, isLoading } = useQuery<DonationsList, Error>(
    ["DonationsFinished", Page, Limit, category, date],
    () => GetDonationList(Page, Limit, category, date),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MHDPage", page.toString());
  };

  const MaxPage = Math.ceil((Donations?.count ?? 0) / Limit);

  useEffect(() => {
    onPageChange(1);
  }, [Limit, category, date]);

  return (
    <>
      <DonationsCrumbs text="Donaciones finalizadas" />{" "}
      <main className=" px-3">
        <section className=" max-sm:flex-col flex gap-3 mb-3">
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
            <TableDonations hidd>
              {Donations?.data.map((donation) => (
                <RowsHistoryDonations
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

export default ManageDonationsHistory;
