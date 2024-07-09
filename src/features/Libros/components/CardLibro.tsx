const CardLibro = ({ cover, name }: { cover: string; name: string }) => {
  return (
    <>
        <img
          src={cover}
          alt="Portada del libro"
          className=" h-96 w-80 object-fill"
        />
        <figcaption className="p-2 text-center">
          <span className=" text-lg">{name}</span>
        </figcaption>
    </>
  );
};

export default CardLibro;
