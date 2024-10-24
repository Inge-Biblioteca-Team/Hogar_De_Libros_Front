import { Button, ButtonGroup, Card } from "flowbite-react";
import { Artist } from "../types/LocalArtist";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const CardArtistL = ({ artist }: { artist: Artist }) => {
  return (
    <Card className="p0">
      <figure>
        <img
          className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
        max-sm:h-48 max-sm:rounded-md max-sm:mb-0"
          src={artist.Cover}
          alt={artist.Name}
        />
        <figcaption
          className=" text-lg break-words max-w-80 px-4 h-40 text-center
       max-sm:pt-7 max-sm:text-center max-sm:text-sm max-sm:h-32 flex flex-col justify-between items-center p-3"
        >
          <strong>{artist.Name}</strong>
          <span>{artist.ArtisProfession}</span>
          {artist.MoreInfo && artist.MoreInfo}

          <ButtonGroup>
            {artist.FBLink && (
              <Button
                className="bg-transparent hover:text-gray-700"
                color="grey"
                href={artist.FBLink}
              >
                <FaFacebookSquare size={30} />
              </Button>
            )}
            {artist.IGLink && (
              <Button
                className="bg-transparent hover:text-gray-700"
                color="grey"
                href={artist.IGLink}
              >
                <FaInstagramSquare size={30} />
              </Button>
            )}
            {artist.LILink && (
              <Button
                className="bg-transparent hover:text-gray-700"
                color="grey"
                href={artist.LILink}
              >
                <FaLinkedin size={30} />
              </Button>
            )}
          </ButtonGroup>
        </figcaption>
      </figure>
    </Card>
  );
};

export default CardArtistL;
