import { addDay } from "@formkit/tempo";
import { Datepicker } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { formatToYMD } from "../../../../components/FormatTempo";

const SearchCalendar = ({
  setSearchDate,
}: {
  setSearchDate: Dispatch<SetStateAction<string>>;
}) => {
  const handleChange = (date: Date | null) => {
    if (date) {
      const searchDate = formatToYMD(date);
      setSearchDate(searchDate);
    }
  };
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="font-bold text-center text-lg">Fecha a consultar</div>
      <Datepicker
        onSelectedDateChanged={handleChange}
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