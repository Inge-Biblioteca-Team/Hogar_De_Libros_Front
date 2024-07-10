const BookCard = ({ cover, name }: { cover: string; name: string }) => {
  return (
    <>
        <img
          src={cover}
          alt="Portada del libro"
          className=" h-96 w-80 object-fill hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950"
        />
        <figcaption className="p-2 text-center">
          <span className=" text-lg">{name}</span>
        </figcaption>
    </>
  );
};

export default BookCard;
