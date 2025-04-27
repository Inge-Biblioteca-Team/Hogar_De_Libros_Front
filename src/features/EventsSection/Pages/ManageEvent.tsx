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
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";

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

  const { data: Events, isLoading } = useQuery<apiResponseE, Error>(
    ["EventCatalog", currentPage, currentLimit, Title, Status],
    () => GetEvents(currentPage, currentLimit, Title, Status),
    {
      staleTime: 600,
    }
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [currentLimit, Title, Status]);

  const MaxPage = Math.ceil((Events?.count ?? 0) / currentLimit);
  return (
    <>
      <ServicesCrumbs text="Eventos" />
      <main className=" px-3">
        <section className=" flex justify-between items-end w-full mb-4
        max-md:flex-col gap-3">
          <SearchEvents EName={setStitle} EStatus={setSStatus} />
          <CreateEvents />
        </section>
        <section>
          {isLoading && (
            <div className=" w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {!isLoading && Events && Events.count > 0 && (
            <Table
              hoverable
              className="text-center min-h-[30rem] text-black dark:text-white"
            >
              <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
                <Table.HeadCell>Título</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">
                  Ubicación
                </Table.HeadCell>
                <Table.HeadCell className=" max-lg:hidden">
                  Persona a Cargo
                </Table.HeadCell>
                <Table.HeadCell>Fecha</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden">Hora</Table.HeadCell>
                <Table.HeadCell className=" max-sm:hidden">Estado</Table.HeadCell>
                <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {Events?.data.map((event) => (
                  <EventsRows key={event.EventId} event={event} />
                ))}
              </Table.Body>
            </Table>
          )}
          {!isLoading && (!Events || Events.count == 0) && <NoResults />}
          <DesktopPagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
          <MobilePagination
            page={currentPage}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            setCurrentLimit={setCurrentLimit}
          />
        </section>
      </main>
    </>
  );
};

export default ManageEvents;
