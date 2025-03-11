import { Card } from "flowbite-react";
import { formatToDMY } from "../../../components/FormatTempo";
import { Advice } from "../Types/Advice";

const NoticeCard = ({ advice }: { advice: Advice }) => {
  const AdviceDay = formatToDMY(advice.date);
  return (
    <Card className="p0 w-full h-full ">
      <figure className="h-full w-full ">
        <img
          src={advice.image}
          alt={advice.reason}
          className="w-full h-64 max-sm:h-48"
        />
        <figcaption className="p-4">
          <h3 className="text-lg lg:text-xl font-bold mb-2 ">{advice.reason}</h3>
          <div className="text-sm text-gray-600 ">
            <strong className="lg:text-lg">Fecha:</strong> {AdviceDay}
            <br />
            <p className="text-sm lg:text-lg text-gray-600 ">
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
            <br />
          </div>
        </figcaption>
      </figure>
    </Card>
  );
};

export default NoticeCard;
