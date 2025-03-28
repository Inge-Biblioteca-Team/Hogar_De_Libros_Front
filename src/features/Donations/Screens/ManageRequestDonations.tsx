import { useState } from "react";
import { useQuery } from "react-query";
import CustomPagination from "../../../components/CustomPagination";
import { DonationsList } from "../Types/DonationType";
import { GetDonationList } from "../Service/SVDonations";
import { Label, Select, TextInput } from "flowbite-react";
import OptDonMainCategories from "../Components/OptDonMainCategories";
import { DonationsCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import TableDonations from "../Components/TableDonations";
import RowsRequestDonation from "../Components/RowsRequestDonation";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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

  const MaxPage = Math.ceil((Donations?.count ?? 0) / 5);

  return (
    <>
      <DonationsCrumbs text="Propuestas de donación" />
      <main className=" flex flex-col items-center justify-center w-full gap-5">
        <section className=" flex md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:p-2 max-sm:flex-col w-4/5 gap-2">
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
        <section className=" max-sm:w-full md:w-full md:pr-4 md:pl-4 max-sm:p-2 w-4/5">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Donations && Donations.data.length > 0 ? (
            <>
              <TableDonations>
                {Donations?.data.map((donation) => (
                  <RowsRequestDonation
                    donation={donation}
                    key={donation.DonationID}
                  />
                ))}
              </TableDonations>
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

export default ManageRequestDonations;
