import { useQuery } from "react-query";
import { Artist } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import CardArtistL from "../components/CardArtistL";

const LocalArtistList = () => {
  const {
    data: Artist,
    error,
    isLoading,
  } = useQuery<Artist[], Error>(["Artist"], getLocalArtist);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="w-4/5 flex flex-col items-center justify-center">
      <h2 className="text-3xl pb-8">Artistas Locales</h2>
      <div className="grid grid-cols-4 gap-5
      max-sm:flex max-sm:w-full max-sm:overflow-x-scroll max-sm:gap-2 max-sm:pb-2">
        {Artist?.slice(0,4).map((artist: Artist,index:number) => (
            <CardArtistL key={index} artist={artist} />
        ))}
      </div>
    </section>
  );
};

export default LocalArtistList;
