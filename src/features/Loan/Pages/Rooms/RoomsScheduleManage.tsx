import { Breadcrumb } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../../components/BreadCrumb";
import RoomsSchedule from "../../Components/RoomsLoans/RoomsSchedule";
import SearchCalendar from "../../Components/RoomsLoans/SearchCalendar";
import { useState } from "react";
import { formatToYMD } from "../../../../components/FormatTempo";
import { addDay } from "@formkit/tempo";

const RoomsScheduleManage = () => {
  const tomorrow = addDay(new Date());
  const StartDate = formatToYMD(tomorrow);

  const [SearchDate, setSearchDate] = useState<string>(StartDate);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Disponibilidad de salas" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-40">
        <div className=" w-11/12 flex items-start justify-between gap-6">
          <SearchCalendar setSearchDate={setSearchDate} />
          <RoomsSchedule date={SearchDate} />
        </div>
      </div>
    </>
  );
};

export default RoomsScheduleManage;
