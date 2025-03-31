import { ButtonGroup, Button } from "flowbite-react";
import { Artist } from "../types/LocalArtist";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const CardArtistL = ({ artist }: { artist: Artist }) => {
  return (
    <div className=" w-full justify-start bg-white flex rounded-md h-full text-left">
      <img
        src={artist.Cover}
        alt={artist.Name}
        className="w-1/2 max-lg:w-1/2"
      />
      <span className="m-3">
        <h3 className="text-2xl font-bold max-sm:text-sm">{artist.Name}</h3>
        <div className=" text-lg max-md:text-sm mr-12 max-md:m-0">
          <strong>{artist.ArtisProfession}</strong>
          {artist.MoreInfo && (
            <p className="text-gray-600 max-xl:line-clamp-6 max-sm:line-clamp-[12]">{artist.MoreInfo}</p>
          )}
        </div>
        <ButtonGroup>
          {artist.FBLink && (
            <Button
              className="bg-transparent hover:text-gray-700"
              color="grey"
              href={artist.FBLink}
            >
              <FaFacebookSquare size={25} />
            </Button>
          )}
          {artist.IGLink && (
            <Button
              className="bg-transparent hover:text-gray-700"
              color="grey"
              href={artist.IGLink}
            >
              <FaInstagramSquare size={25} />
            </Button>
          )}
          {artist.LILink && (
            <Button
              className="bg-transparent hover:text-gray-700"
              color="grey"
              href={artist.LILink}
            >
              <FaLinkedin size={25} />
            </Button>
          )}
        </ButtonGroup>
      </span>
    </div>
  );
};

export default CardArtistL;
