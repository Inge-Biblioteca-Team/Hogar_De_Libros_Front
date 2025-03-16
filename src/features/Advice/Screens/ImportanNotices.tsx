import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import NoticeCard from "../Components/NoticeCard";
import { Carousel } from "flowbite-react";
import { formatToYMD } from "../../../components/FormatTempo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      h-[17rem] sm:h-[17rem] xl:h-[18rem] 2xl:h-[22rem]
       space-y-4"
      id="Activities"
    >
      <>
        <h2 className="text-center font-bold text-4xl max-sm:text-xl">
          Avisos importantes
        </h2>
        {home && (
          <h4 className="text-center text-md mb-6">
            Mantente informado de nuestros eventos, cursos y demás.
          </h4>
        )}

        {isLoading ? (
          <>
            <div
              className="bg-white w-full max-lg:w-full rounded-md p-2
            h-[17rem] sm:h-[17rem] xl:h-[18rem] 2xl:h-[22rem]"
            >
              <Skeleton className="h-[70%]" />
              <Skeleton width={200} height={20} />
              <Skeleton width={150} height={20} />
              <Skeleton width={150} height={20} />
            </div>
          </>
        ) : (
          <Carousel indicators={false} pauseOnHover>
            {Advices?.data.map((advice) => (
              <NoticeCard advice={advice} key={"AD" + advice.id_Advice} />
            ))}
          </Carousel>
        )}
      </>
    </section>
  );
};

export default ImportanNotices;
