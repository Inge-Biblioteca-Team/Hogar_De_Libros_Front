import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import NoticeCard from "../Components/NoticeCard";
import { Carousel } from "flowbite-react";
import { formatToYMD } from "../../../components/FormatTempo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronsLeft, ChevronsRight } from "../../../components/Chrevrons/Chevrons";

const ImportanNotices = ({ home }: { home?: boolean }) => {
  const date = new Date();
  const searchDate = formatToYMD(date);

  const { data: Advices, isLoading } = useQuery<ApiAdvices, Error>(
    ["AdvicesList"],
    () => GetAdviceList(1, 15, "", "", searchDate),
    {
      staleTime: 600,
    }
  );

  return (
    <section
      className="
      relative w-11/12
       space-y-4"
      id="Activities"
    >
      <>
        {home && (
          <h4 className="text-center text-md mb-6">
            Mantente informado de nuestros eventos, cursos y demás.
          </h4>
        )}

        {isLoading && (
          <>
            <h2 className="text-center font-bold text-4xl max-sm:text-xl">
              Avisos importantes
            </h2>
            <div
              className="bg-white w-full max-lg:w-full rounded-md p-2
            h-[17rem] sm:h-[17rem] xl:h-[18rem] 2xl:h-[22rem] flex gap-3"
            >
              <div className="w-3/6">
                <Skeleton height={"10%"} width={"100%"} count={2} />
                <Skeleton height={"10%"} width={"80%"} count={4} />
              </div>
              <div className="w-3/6">
                <Skeleton height={"99%"} width={"100%"} />
              </div>
            </div>
          </>
        )}

        {!isLoading && Advices && Advices.count > 0 && (
          <>
            <h2 className="text-center font-bold text-4xl max-sm:text-xl">
              Avisos importantes
            </h2>
            <Carousel
              pauseOnHover
              slideInterval={5000}
              leftControl={<ChevronsLeft/>}
              rightControl={<ChevronsRight/>}
              indicators
            >
              {Advices.data.map((advice) => (
                <NoticeCard advice={advice} key={"AD" + advice.id_Advice} />
              ))}
            </Carousel>
          </>
        )}
      </>
    </section>
  );
};

export default ImportanNotices;
