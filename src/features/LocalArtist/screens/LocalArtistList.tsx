import { useQuery } from "react-query";
import { Artist, ResponseA } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import CardArtistL from "../components/CardArtistL";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

const LocalArtistList = () => {
  const { data: LArtists } = useQuery<ResponseA, Error>(
    ["LocalArtist"],
    () => getLocalArtist(1, 100),
    {
      staleTime: 600,
    }
  );

  const [itemsPerGroup, setItemsPerGroup] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerGroup(1); 
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setItemsPerGroup(2); 
      } else {
        setItemsPerGroup(5); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkArray = (arr: Artist[], size: number): Artist[][] => {
    const result: Artist[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedArtist = chunkArray(LArtists?.data || [], itemsPerGroup);

  return (
    <>
      {LArtists && LArtists.count > 0 && (
        <section
          className="flex gap-6 items-center max-sm:pr-4 max-sm:pl-4  max-sm:w-full  w-4/5 flex-col "
          id="Courses"
        >
          <h2 className="2xl:text-4xl font-bold text-2xl lg:text-4xl pb-4">Artistas locales</h2>
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "32rem" }}
          >
            {groupedArtist.map((group, groupIndex) => (
              <div key={groupIndex} className=" flex justify-center  gap-x-4">
                {group.map((artist) => (
                  <CardArtistL key={"Art" + artist.ID} artist={artist} />
                ))}
              </div>
            ))}
          </Carousel>
        </section>
      )}
    </>
  );
};

export default LocalArtistList;
