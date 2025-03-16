import { formatToFullDate } from "../../../components/FormatTempo";
import { Advice } from "../Types/Advice";

const NoticeCard = ({ advice }: { advice: Advice }) => {
  const AdviceDay = formatToFullDate(advice.date);
  return (
    <div className=" w-full gap-8 justify-between bg-white flex rounded-md h-[15rem] sm:h-[15rem] xl:h-[16rem] 2xl:h-[20rem] space-x-2">
      <span className=" m-3">
        <h3 className="text-2xl font-bold">{advice.reason}</h3>
        <div className="">
          <strong className="">Fecha:</strong> {AdviceDay}
          <p className="text-gray-600 ">
            {advice.extraInfo.split(".").map((info, index) => (
              <span className=" !bg-transparent" key={index}>
                {info.trim()}
                {index < advice.extraInfo.split(".").length - 1 && (
                  <>
                    . <br />{" "}
                  </>
                )}
              </span>
            ))}
          </p>
        </div>
      </span>
      <img src={advice.image} alt="" className=" rounded-br-md w-2/4" />
    </div>
  );
};

export default NoticeCard;
