import { Button, ButtonGroup, Card } from "flowbite-react";
import { Artist } from "../types/LocalArtist";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const CardArtistL = ({ artist }: { artist: Artist }) => {
  return (
    <Card className="2xl:w-full  max-sm:w-full">
      <figure>
        <img
          className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
          max-sm:h-48 2xl:w-full max-sm:rounded-md max-sm:mb-0"
          src={artist.Cover}
          alt={artist.Name}
        />
        <div className="flex flex-col justify-between items-center">
        <figcaption
          className="text-lg break-words max-w-80 px-4  text-center
          max-sm:pt-7 max-sm:text-center max-sm:text-sm max-sm:h-auto flex flex-col justify-between items-center p-3
          max-sm:flex-wrap max-sm:overflow-hidden max-sm:gap-2"
        >
          <strong className="">{artist.Name}</strong>
          <span className="text-gray-600 text-sm ">{artist.ArtisProfession}</span>
          {artist.MoreInfo && (
            <p className="text-gray-500  text-sm line-clamp-3 lg:line-clamp-2 max-sm:overflow-hidden max-sm:text-ellipsis max-sm:w-full">
              {artist.MoreInfo}
            </p>
          )}
          <ButtonGroup className="mt-4 max-sm:mt-2">
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
        </div>
      </figure>
    </Card>
  );
};

export default CardArtistL;
