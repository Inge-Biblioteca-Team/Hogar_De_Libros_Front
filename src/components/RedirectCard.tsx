import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const RedirectCard = ({
  text,
  Path,
  icon,
  List,
}: {
  text: string;
  Path: string;
  icon: React.ReactNode;
  List: React.ReactNode;
}) => {
  return (
    <Card className=" w-60">
      <Link
        className=" flex items-center justify-center flex-col"
        to={`/HogarDeLibros/${Path}`}
      >
        {icon}
        {text}
      </Link>
      <ul className="list-disc">{List}</ul>
    </Card>
  );
};

export default RedirectCard;
