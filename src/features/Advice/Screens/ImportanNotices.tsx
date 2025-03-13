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
      className="relative w-full md:w-full max-sm:max-w-full max-sm:pr-4 max-sm:pl-4 lg:w-full lg:pl-20 lg:pr-20
      xl:w-full xl:pl-20 xl:pr-20 2xl:w-full 2xl:pr-20 2xl:pl-20 mt-10 md:pl-2 md:pr-2"
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
            className="Custom-Carousel w-full lg:w-full h-[28rem] max-sm:h-[23rem]"
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
