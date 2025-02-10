import { useEffect, useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { GetEvents } from "../services/SvEvents";
import { apiResponseE } from "../types/Events";
import { Table } from "flowbite-react";
import EventsRows from "../components/EventsRows";
import SearchEvents from "../components/BTN/SerchEvents";
import CreateEvents from "../components/Modals/CreateEvents";
import { ServicesCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";

const ManageEvents = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("EventPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const [Stitle, setStitle] = useState<string>("");
  const [SStatus, setSStatus] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("EventPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("EventPages", currentPage.toString());
  }, [currentPage]);

  const Title = UseDebounce(Stitle, 100);
  const Status = UseDebounce(SStatus, 100);

  const { data: Events } = useQuery<apiResponseE, Error>(
    ["EventCatalog", currentPage, currentLimit, Title, Status],
    () => GetEvents(currentPage, currentLimit, Title, Status),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Events?.count ?? 0) / currentLimit);
  return (
    <>
      <ServicesCrumbs text="Eventos" />
      <div className="w-full  flex items-center justify-center">
        <div className="w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:w-full max-sm:p-2 ">
          <div className="flex max-sm:gap-4 max-sm:items-center max-sm:flex-col items-end justify-between w-full mb-4 ">
            <SearchEvents EName={setStitle} EStatus={setSStatus} />
           
              <CreateEvents />
            
          </div>

          {Events && Events?.count > 0 ? (
            <>
              <Table hoverable className="text-center">
                <Table.Head>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6">Título</Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6 2xl:table-cell xl:table-cell md:hidden max-sm:hidden">
                    Ubicación
                  </Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Persona a Cargo
                  </Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6 max-sm:hidden">
                    Fecha
                  </Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6 2xl:table-cell xl:table-cell md:hidden max-sm:hidden">
                    Hora
                  </Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6">Estado</Table.HeadCell>
                  <Table.HeadCell className="2xl:w-1/6 xl:w-1/6 max-sm:hidden"></Table.HeadCell>
                </Table.Head>
                <Table.Body className=" h-[30rem]">
                  {Events?.data.map((event) => (
                    <EventsRows key={event.EventId} event={event} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Events?.count || 0}
                />
              </div>

              <div className="sm:hidden max-sm:pt-2  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={currentPage}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
