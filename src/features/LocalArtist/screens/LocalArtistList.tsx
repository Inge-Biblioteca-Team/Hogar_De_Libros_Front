import { useQuery } from "react-query";
import { Artist, ResponseA } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import CardArtistL from "../components/CardArtistL";
import { Carousel } from "flowbite-react";

const LocalArtistList = () => {
  const { data: LArtists } = useQuery<ResponseA, Error>(
    ["LocalArtist"],
    () => getLocalArtist(1, 100),
    {
      staleTime: 600,
    }
  );

  const chunkArray = (arr: Artist[], size: number): Artist[][] => {
    const result: Artist[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedArtist = chunkArray(LArtists?.data || [], 2);

  return (
    <section
      className="flex items-center w-4/5 flex-col max-sm:m-0"
      id="Courses"
    >
      <h2 className="font-bold text-3xl">Artistas locales</h2>
      <Carousel
        indicators={false}
        pauseOnHover
        leftControl
        rightControl
        style={{ height: "32rem" }}
      >
        {groupedArtist.map((group, groupIndex) => (
          <div key={groupIndex} className=" flex justify-center gap-x-4">
            {group.map((artist) => (
              <CardArtistL key={"Art" + artist.ID} artist={artist} />
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default LocalArtistList;
