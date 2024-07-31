import { Artist } from "../types/LocalArtist"

const CardArtistL = ({artist}:{artist:Artist}) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 
    max-sm:min-w-40">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover
                  max-sm:h-48 max-sm:rounded-md max-sm:mb-0"
        src={artist.image}
        alt={artist.name}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4 h-40 text-center
       max-sm:pt-7 max-sm:text-center max-sm:text-sm max-sm:h-32">
        <strong>{artist.name}</strong>
        <p>
          <span>{artist.work}</span>
          {artist.Local?  <span className=" max-sm:hidden"> <br />Nombre del taller: {artist.address} </span>: <span></span>}
        </p>
      </figcaption>
    </figure>
  )
}

export default CardArtistL
