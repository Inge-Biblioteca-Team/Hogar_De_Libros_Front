import RoomsSchedule from "../../Components/RoomsLoans/RoomsSchedule";
import SearchCalendar from "../../Components/RoomsLoans/SearchCalendar";
import { useState } from "react";
import { formatToYMD } from "../../../../components/FormatTempo";
import { addDay } from "@formkit/tempo";
import { useQuery } from "react-query";
import { queque } from "../../Types/RoomsReservations";
import { getQueQueReservations } from "../../Services/SVReservations";
import { LoansAndCirculationCrumbs } from "../../../../components/Breadcrumbs/BreadCrumbsItems";

const RoomsScheduleManage = () => {
  const tomorrow = addDay(new Date());
  const StartDate = formatToYMD(tomorrow);

  const [SearchDate, setSearchDate] = useState<string>(StartDate);

  const { data: reservations = [] } = useQuery<queque[], Error>(
    ["QueQueReservations", SearchDate],
    () => getQueQueReservations(SearchDate),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <LoansAndCirculationCrumbs text="Reservas de salas" />
      <div className="flex items-center justify-center pb-10">
        <div className="flex flex-col md:flex-row items-start justify-between w-full md:w-auto">
          <SearchCalendar setSearchDate={setSearchDate} />
          <RoomsSchedule date={SearchDate} reservations={reservations} />
        </div>
      </div>
    </>
  );
};

export default RoomsScheduleManage;