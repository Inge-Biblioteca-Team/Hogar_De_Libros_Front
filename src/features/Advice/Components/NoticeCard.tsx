import { formatToFullDate } from "../../../components/FormatTempo";
import { Advice } from "../Types/Advice";

const NoticeCard = ({ advice }: { advice: Advice }) => {
  const AdviceDay = formatToFullDate(advice.date);
  return (
    <div className=" w-full gap-8 justify-between bg-white flex rounded-md h-full space-x-2">
      <span className="m-3 !bg-white ml-8">
        <h3 className="text-2xl font-bold max-sm:text-sm">{advice.reason}</h3>
        <div className=" text-lg ml-3 max-md:text-sm">
          <strong className="">Fecha:</strong> {AdviceDay}
          <p className="text-gray-600 ml-5">
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
