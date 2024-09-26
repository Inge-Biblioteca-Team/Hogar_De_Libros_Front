import { useEffect, useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { GetEvents } from "../services/SvEvents";
import { apiResponseE } from "../types/Events";
import { Breadcrumb, Table} from "flowbite-react";
import { HomeCrumb, LastCrumb, LoanCrumb, ManageCrumb } from "../../../components/BreadCrumb";
import PaginatationSelector from "../../../components/PaginatationSelector";
import NoRequest from "../../Loan/Components/NoRequest";
import EventsRows from "../components/EventsRows";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import SearchEvents from "../components/BTN/SerchEvents";
import CreateEvents from "../components/Modals/CreateEvents";
import BTNSearchE from "../components/BTN/BTNSerchE";

const ManageEvents = () => {
    const [currentLimit, setCurrentLimit] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(() => {
        const savedPage = sessionStorage.getItem("EventPages");
        return savedPage ? Number(savedPage) : 1;
    });

    const [STitle, setSTitle] = useState<string>("");
    const [SLocation, setSLocation] = useState<string>("");
    const [Status, setStatus] = useState<string>("");
    const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        sessionStorage.setItem("EventCPages", page.toString());
    };

    useEffect(() => {
        sessionStorage.setItem("EventPages", currentPage.toString());
    }, [currentPage]);

    const Title = UseDebounce(STitle, 100);
    const Location = UseDebounce(SLocation, 100);
    const handleDateRange = (startDate: Date, endDate: Date) => {
        setDateRange({ start: startDate, end: endDate });
    };

    const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);
    const { data: Events } = useQuery<apiResponseE, Error>(
        ["EventCatalog",
            currentPage,
            currentLimit,
            Title,
            Location,
            Status],
        () => GetEvents(
            currentPage,
            currentLimit,
            Title,
            Location,
            Status),
        {
            staleTime: 600,
        }
    );

    const MaxPage = Math.ceil((Events?.count ?? 0) / currentLimit);

    return (
        <>
            <Breadcrumb className="custom-breadcrumb">
                <HomeCrumb />
                <ManageCrumb />
                <LoanCrumb />
                <LastCrumb CurrentPage="Gestión de Eventos" />
            </Breadcrumb>

            <div className=" w-full flex items-center justify-center pt-12">
                <div className=" w-4/5">
                    <div className="flex gap-2">
                        <BTNSearchE
                            click={() => setShowAdvancedFilters(prev => !prev)}
                            icon={showAdvancedFilters}
                        />

                        <CreateEvents />
                    </div>
                    {showAdvancedFilters && (
                        <div className="mb-4">
                            <SearchEvents
                                EName={setSTitle}
                                EStatus={setStatus}
                                EDateRange={handleDateRange}
                                ETargetAudience={setSLocation}
                            />
                        </div>
                    )}
                    {Events?.data.length === 0 ? (
                        <NoRequest text="No Existen Eventos registrados" />
                    ) : (
                        <>
                            <Table hoverable className=" text-center">
                                <Table.Head className=" h-20 text-sm">
                                    <Table.HeadCell>Título</Table.HeadCell>
                                    <Table.HeadCell>Ubicación</Table.HeadCell>
                                    <Table.HeadCell>Fecha</Table.HeadCell>
                                    <Table.HeadCell>Hora</Table.HeadCell>
                                    <Table.HeadCell>Persona a Cargo</Table.HeadCell>
                                    <Table.HeadCell>Estado</Table.HeadCell>
                                    <Table.HeadCell></Table.HeadCell>
                                </Table.Head>
                                <Table.Body>
                                    {Events?.data.map((event) => (
                                        <EventsRows key={event.EventId} event={event} />
                                    ))}
                                </Table.Body>
                            </Table>
                            <div className=" w-full flex justify-between">
                                <div>
                                    <span className=" pl-5">
                                        Mostrar{" "}
                                        <span>
                                            <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                                        </span>{" "}
                                        Eventos por página
                                    </span>
                                </div>
                                <PaginatationSelector
                                    totalPages={MaxPage}
                                    currentPage={currentPage}
                                    onPageChange={onPageChange}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ManageEvents;