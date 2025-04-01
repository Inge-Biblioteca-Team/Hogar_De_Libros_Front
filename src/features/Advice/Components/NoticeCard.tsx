import { formatToFullDate } from "../../../components/FormatTempo";
import { Advice } from "../Types/Advice";

const NoticeCard = ({ advice }: { advice: Advice }) => {
  const AdviceDay = formatToFullDate(advice.date);
  return (
    <div className=" w-full justify-end bg-white flex rounded-md h-full text-right">
      <span className="m-3 ml-5 ">
        <h3 className="text-2xl font-bold max-sm:text-sm">{advice.reason}</h3>
        <div className=" text-lg max-md:text-sm">
          <strong className="">Fecha:</strong> {AdviceDay}
          <p className="text-gray-600 ml-5">
            {advice.extraInfo.split(".").map((info, index) => (
              <span key={index}>
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
      <img src={advice.image} alt="" className="w-1/2 max-lg:w-1/2" />
    </div>
  );
};

export default NoticeCard;
