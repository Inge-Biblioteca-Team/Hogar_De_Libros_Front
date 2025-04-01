import { HiInbox } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getNotesCount } from "../../Services/SvInbox";
import { useQuery } from "react-query";
const Inboxpage = () => {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/HogarDeLibros/Mensajeria");
  };

  const { data: count, isLoading } = useQuery<number, Error>(
    ["MessageCount"],
    () => getNotesCount(),
    {
      staleTime: 2000,
      refetchInterval: 5000,
    }
  );

  return (
    <>
      <button
        className="relative"
        onClick={goto}
        title="Mensajes recibidos"
        type="button"
      >
        <HiInbox
          className=" md:hidden lg:table-cell max-sm:w-5 max-sm:h-5 sm:w-8 sm:h-8"
          size={35}
        />
        {!isLoading && count && count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {count}
          </span>
        )}
      </button>
    </>
  );
};

export default Inboxpage;
