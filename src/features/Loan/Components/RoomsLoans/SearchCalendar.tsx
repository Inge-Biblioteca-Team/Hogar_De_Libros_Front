import { addDay } from "@formkit/tempo";
import { Datepicker } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className=" font-bold text-center text-lg">Fecha a consultar</div>
      <Datepicker
        onSelectedDateChanged={handleChange}
        className="custom-DatePicker"
        size={120}
        inline={!isSmallScreen}
        language="es-CR"
        labelClearButton="Limpiar"
        labelTodayButton="Hoy"
        minDate={addDay(new Date())}
      />
    </div>
  );
};

export default SearchCalendar;
