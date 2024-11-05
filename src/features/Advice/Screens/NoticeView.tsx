import { useQuery } from "react-query";
import { ApiAdvices } from "../Types/Advice";
import { GetAdviceList } from "../Service/SvAdvice";
import { formatToYMD } from "../../../components/FormatTempo";
import { Carousel } from "flowbite-react";
import NoticeCard from "../Components/NoticeCard";

const NoticeView = () => {
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
export default NoticeView;
