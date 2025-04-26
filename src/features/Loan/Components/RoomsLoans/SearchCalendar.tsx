import { addDay } from "@formkit/tempo";
import { Datepicker } from "flowbite-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { formatToYMD } from "../../../../components/FormatTempo";

const SearchCalendar = ({
  setSearchDate,
}: {
  setSearchDate: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [datepickerKey, setDatepickerKey] = useState(0);

  const getNextMonday = (date: Date) => {
    const day = date.getDay();
    const daysUntilMonday = day === 0 ? 1 : day === 6 ? 2 : 0;
    const nextMonday = new Date(date);
    nextMonday.setDate(date.getDate() + daysUntilMonday);
    return nextMonday;
  };

  const handleChange = (date: Date | null) => {

    if (date) {
      const day = date.getDay(); 
      if (day === 0 || day === 6) {
        const nextMonday = getNextMonday(date);

        setSelectedDate(nextMonday);
        setSearchDate(formatToYMD(nextMonday));
        setIsPopoverVisible(true);
        setDatepickerKey(prev => prev + 1);

        setTimeout(() => setIsPopoverVisible(false), 4000);
        return;
      }

      setSelectedDate(date); 
      const searchDate = formatToYMD(date);
      setSearchDate(searchDate);
      setIsPopoverVisible(false);
    }
  };

 
  return (
    <div>
      <div className=" font-bold text-center text-lg">Fecha a consultar</div>
      <div ref = {calendarRef}>
      <Datepicker
        key={datepickerKey}
        onSelectedDateChanged={handleChange}
        className="custom-DatePicker max-lg:hidden "
        size={120}
        inline
        language="es-CR"
        labelClearButton="Limpiar"
        labelTodayButton="Hoy"
        minDate={addDay(new Date())}
      />
      <Datepicker
        onSelectedDateChanged={handleChange}
        className="custom-DatePicker max-lg:block hidden"
        size={120}
        inline={false}
        language="es-CR"
        labelClearButton="Limpiar"
        labelTodayButton="Hoy"
        minDate={addDay(new Date())}
      />
      </div>
      {isPopoverVisible && (
        <div className="absolute z-50 bg-red-600 text-white font-semibold px-4 py-2 rounded shadow-lg top-10 left-1/2 transform -translate-x-1/2">
        ⚠️ No se permiten reservas sábados ni domingos.
      </div>
      )}
    </div>
  );
};

export default SearchCalendar;
