import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import NoticeCard from "../Components/NoticeCard";
import { Carousel } from "flowbite-react";
import { formatToYMD } from "../../../components/FormatTempo";

const ImportanNotices = () => {
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
      className="relative w-full max-w-4xl mx-auto max-sm:w-4/5"
      id="Activities"
    >
      {Advices && Advices.count > 0 ? (
        <>
          <h2 className="text-center font-bold text-2xl mb-6">
            Avisos Importantes
          </h2>
          <div className="flex items-center justify-between">
            <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
              <article className="flex transition-transform duration-300">
                <Carousel
                  className="Custom-Carousel"
                  indicators={false}
                  pauseOnHover
                >
                  {Advices?.data.map((advice) => (
                    <NoticeCard advice={advice} key={advice.id_Advice} />
                  ))}
                </Carousel>
              </article>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default ImportanNotices;
