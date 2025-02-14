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
    <LoansAndCirculationCrumbs text="Reservas de salas"/>
      <div className=" w-full flex items-center justify-center mt-40 max-sm:mt-0">
        <div className="md:-mt-32 w-11/12 md:items-center md:flex-col lg:flex-row flex items-start justify-between gap-6 max-sm:flex-col">
          <SearchCalendar setSearchDate={setSearchDate} />
          <RoomsSchedule date={SearchDate} reservations={reservations} />
        </div>
      </div>
    </>
  );
};

export default RoomsScheduleManage;
