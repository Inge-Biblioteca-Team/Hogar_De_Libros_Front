import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingHomeCards = ({
  Icon,
  Title,
  Message,
  Path,
}: {
  Icon: any;
  Title: string;
  Message: string;
  Path: string;
}) => {
  return (
    <figure className="bg-Body text-white flex flex-col gap-5 items-center justify-center rounded-md
    max-sm:justify-start max-sm:px-2 py-2 max-sm:text-sm">
      <FontAwesomeIcon
        icon={Icon}
        className="text-white h-6 w-6 cursor-default"
      />{" "}
      <figcaption className="text-center">
        <p>
          <span>{Title}</span>
          <br />
           <span>{Message}</span>
        </p>
        <a href={Path} className=" underline">
          Más Información
        </a>
      </figcaption>
    </figure>
  );
};

export default LandingHomeCards;
