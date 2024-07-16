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
    <figure className="bg-Body text-white flex flex-col gap-5 items-center justify-center rounded-md">
      <FontAwesomeIcon
        icon={Icon}
        className="text-white h-6 w-6 cursor-default"
      />{" "}
      <figcaption className="text-center">
        <p>
          <span>{Title}</span>
          <br />
          {Message}
        </p>
        <a href={Path} className=" underline">
          Mas Informacion
        </a>
      </figcaption>
    </figure>
  );
};

export default LandingHomeCards;
