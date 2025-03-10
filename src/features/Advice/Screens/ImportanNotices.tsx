import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import NoticeCard from "../Components/NoticeCard";
import { Carousel } from "flowbite-react";
import { formatToYMD } from "../../../components/FormatTempo";

const ImportanNotices = ({ home }: { home?: boolean }) => {
  const date = new Date();
  const searchDate = formatToYMD(date);

  const { data: Advices } = useQuery<ApiAdvices, Error>(
    ["AdvicesList"],
    () => GetAdviceList(1, 15, "", "", searchDate),
    {
      staleTime: 600,
    }
  );
  return (
    <section
      className="relative w-full md:w-full max-sm:max-w-full max-sm:pr-4 max-sm:pl-4 lg:w-full  mt-10"
      id="Activities"
    >
      {Advices && Advices.count > 0 ? (
        <>
          <h2 className="text-center font-bold lg:text-4xl pb-4 text-2xl mb-6">
            Avisos importantes
          </h2>
          {home && (
            <h4 className="text-center text-md mb-6">
              Mantente informado de nuestros eventos, cursos y demás.
            </h4>
          )}
          <Carousel
            className="Custom-Carousel w-full max-sm:pl-0 max-sm:pr-0 pl-20 pr-20 lg:pl-20 lg:pr-20 md:w-full md:h-full md:pl-2 md:pr-2 h-[28rem]  "
            indicators={false}
            pauseOnHover
            
          >
            {Advices?.data.map((advice) => (
              <NoticeCard advice={advice} key={"AD" + advice.id_Advice} />
            ))}
          </Carousel>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default ImportanNotices;
