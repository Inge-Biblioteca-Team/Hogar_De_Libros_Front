import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import OptDonMainCategories from "../Components/OptDonMainCategories";
import { GetDonationList } from "../Service/SVDonations";
import { DonationsList } from "../Types/DonationType";
import { DonationsCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import TableDonations from "../Components/TableDonations";
import RowsPeningReceive from "../Components/RowsPeningReceive";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import Loader from "../../../components/Loader";
const ManagePendingReceiveDon = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("MPRage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { data: Donations, isLoading } = useQuery<DonationsList, Error>(
    ["PendingRecolection", Page, Limit, category, date],
    () => GetDonationList(Page, Limit, category, date, "Aprobado"),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("MPRPage", page.toString());
  };

  const MaxPage = Math.ceil((Donations?.count ?? 0) / Limit);

  useEffect(() => {
    onPageChange(1);
  }, [Limit, category, date]);

  return (
    <>
      <DonationsCrumbs text="Donaciones pendientes de recepción" />
      <main className=" px-3">
        <section className=" flex gap-x-2 mb-3 max-sm:flex-col">
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
                <RowsPeningReceive
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

export default ManagePendingReceiveDon;
