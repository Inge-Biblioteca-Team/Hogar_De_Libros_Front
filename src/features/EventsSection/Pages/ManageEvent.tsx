import { useEffect, useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { GetEvents } from "../services/SvEvents";
import { apiResponseE } from "../types/Events";
import { Table } from "flowbite-react";
import NoRequest from "../../Loan/Components/NoRequest";
import EventsRows from "../components/EventsRows";
import SearchEvents from "../components/BTN/SerchEvents";
import CreateEvents from "../components/Modals/CreateEvents";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import CustomPagination from "../../../components/CustomPagination";

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
      <BreadCrumbManage text="Eventos" />
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5">
          <div className="flex items-end justify-between w-full mb-5 mt-3">
            <SearchEvents EName={setStitle} EStatus={setSStatus} />
            <div>
              <CreateEvents />
            </div>
          </div>

          {Events?.count === 0 ? (
            <NoRequest text="No Existen Eventos registrados" />
          ) : (
            <>
              <Table hoverable className="text-center">
                <Table.Head className="h-20 text-sm">
                  <Table.HeadCell>Título</Table.HeadCell>
                  <Table.HeadCell>Ubicación</Table.HeadCell>
                  <Table.HeadCell>Persona a Cargo</Table.HeadCell>
                  <Table.HeadCell>Fecha</Table.HeadCell>
                  <Table.HeadCell>Hora</Table.HeadCell>
                  <Table.HeadCell>Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body className=" h-96">
                  {Events?.data.map((event) => (
                    <EventsRows key={event.EventId} event={event} />
                  ))}
                </Table.Body>
              </Table>
              <CustomPagination
                page={currentPage}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={Events?.count || 0}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageEvents;
