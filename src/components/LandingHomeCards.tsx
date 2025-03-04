import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const LandingHomeCards = ({
  Icon,
  Title,
  Message,
  Path,
}: {
  Icon: IconDefinition;
  Title: string;
  Message: string;
  Path: string;
}) => {
  return (
    <figure
      className="bg-Body text-white flex flex-col gap-5 items-center justify-center rounded-md
     max-sm:justify-start max-sm:px-2  max-sm:text-sm p-4"
    >
      <FontAwesomeIcon
        icon={Icon}
        className="text-white h-6 w-6 cursor-default"
      />{" "}
      <figcaption className="text-center">
        <p>
          <span className=" lg:text-xl text-lg font-bold">{Title}</span>
          <br />
          <span className="lg:text-lg">{Message}</span>
        </p>
        <Link to={Path} className=" underline hover:text-gray-400">
          Ver mas
        </Link>
      </figcaption>
    </figure>
  );
};

export default LandingHomeCards;
