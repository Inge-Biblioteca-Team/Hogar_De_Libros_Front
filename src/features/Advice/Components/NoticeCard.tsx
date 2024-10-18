import { Card } from "flowbite-react";
import { formatToDMY } from "../../../components/FormatTempo";
import { Advice } from "../Types/Advice";

const NoticeCard = ({ advice }: { advice: Advice }) => {
  const AdviceDay = formatToDMY(advice.date);
  return (
    <Card className="p0">
      <figure>
        <img
          src={advice.image}
          alt={advice.reason}
          className="w-full h-72 max-sm:h-48"
        />
        <figcaption className="p-4">
          <h3 className="text-lg font-bold mb-2 ">{advice.reason}</h3>
          <p className="text-sm text-gray-600 ">
            <strong className="">Fecha:</strong> {AdviceDay}
            <br />
            <strong>{advice.extraInfo}</strong>
          </p>
        </figcaption>
      </figure>
    </Card>
  );
};

export default NoticeCard;
