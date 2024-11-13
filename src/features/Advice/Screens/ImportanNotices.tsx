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
      className="relative w-full max-w-4xl mx-auto max-sm:w-4/5 mt-10"
      id="Activities"
    >
      {Advices && Advices.count > 0 ? (
        <>
          <h2 className="text-center font-bold text-2xl mb-6">
            Avisos importantes
          </h2>
          {home && (
            <h4 className="text-center text-md mb-6">
              Mantente informado de nuestros eventos, cursos y demás.
            </h4>
          )}
          <Carousel
            className="Custom-Carousel"
            indicators={false}
            pauseOnHover
            style={{ height: "28rem" }}
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
