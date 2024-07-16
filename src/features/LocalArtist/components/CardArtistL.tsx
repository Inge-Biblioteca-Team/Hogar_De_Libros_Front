
const CardArtistL = ({artist}:{artist:any}) => {
  return (
    <figure className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3">
      <img
        className="h-64 w-80 mb-8 border-t border-transparent rounded-t-md object-cover"
        src={artist.image}
        alt={artist.name}
      />
      <figcaption className=" text-lg break-words max-w-80 px-4">
        <h3>{artist.Name}</h3>
        <p>
          <span>{artist.Tipo}</span>
          <br />
          <span>Nombre del taller</span>
          <br />
          <span>Localizacion:{}</span>
          <br />
          <span>Bibliografia</span>
        </p>
        <div>Redes sociales</div>
      </figcaption>
    </figure>
  
  )
}

export default CardArtistL
