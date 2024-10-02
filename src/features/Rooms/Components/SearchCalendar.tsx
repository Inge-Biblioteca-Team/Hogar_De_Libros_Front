import { addDay } from "@formkit/tempo";
import { Datepicker } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const SearchCalendar = ({
  setSearchDate,
}: {
  setSearchDate: Dispatch<SetStateAction<Date>>;
}) => {
  return (
    <div>
      <div className=" font-bold text-center text-lg">Fecha a consultar</div>
      <Datepicker
        onSelectedDateChanged={(e) => setSearchDate(e)}
        className="custom-DatePicker"
        size={120}
        inline
        labelClearButton="Limpiar"
        labelTodayButton="Hoy"
        minDate={addDay(new Date())}
      />
    </div>
  );
};

export default SearchCalendar;
