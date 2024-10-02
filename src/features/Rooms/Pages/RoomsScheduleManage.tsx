import { Breadcrumb } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";
import RoomsSchedule from "../Components/RoomsSchedule";
import SearchCalendar from "../Components/SearchCalendar";
import { useState } from "react";
import { format } from "@formkit/tempo";

const RoomsScheduleManage = () => {
  const [SearchDate, setSearchDate] = useState<Date>(new Date());

  const date = format({
    date: SearchDate,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });


  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Disponibilidad de salas" />
      </Breadcrumb>
      <div className=" w-full flex items-center justify-center mt-40">
        <div className=" w-11/12 flex items-start justify-between gap-6">
          <SearchCalendar setSearchDate={setSearchDate} />
          <RoomsSchedule date={date} />
        </div>
      </div>
    </>
  );
};

export default RoomsScheduleManage;
