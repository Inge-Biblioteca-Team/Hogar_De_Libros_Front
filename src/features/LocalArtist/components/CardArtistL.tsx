import { Button, ButtonGroup, Card } from "flowbite-react";
import { Artist } from "../types/LocalArtist";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const CardArtistL = ({ artist }: { artist: Artist }) => {
  return (
    <Card className="w-full flex flex-col justify-between shadow-lg">
      
      <figure className="w-full flex justify-center">
        <img
          className="w-full h-60 object-cover rounded-t-md max-sm:h-48 md:w-full lg:w-80 2xl:w-full"
          src={artist.Cover}
          alt={artist.Name}
        />
      </figure>


      <figcaption className="flex flex-col flex-grow justify-between items-center text-center px-4 py-3">
        <div className="flex flex-col items-center">
          <strong className="text-lg lg:text-xl">{artist.Name}</strong>
          <span className="text-gray-600 text-sm lg:text-base">
            {artist.ArtisProfession}
          </span>
        </div>

      
        <div className="flex-grow overflow-hidden">
          {artist.MoreInfo && (
            <p className="text-gray-500 text-sm line-clamp-3 lg:line-clamp-4">
              {artist.MoreInfo}
            </p>
          )}
        </div>

   
        <ButtonGroup className="mt-4 flex justify-center">
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
      </figcaption>
    </Card>
  );
};

export default CardArtistL;
