import { useQuery } from "react-query";
import { ResponseA } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import CardArtistL from "../components/CardArtistL";
import { Carousel } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronsLeft, ChevronsRight } from "../../../components/Chrevrons/Chevrons";

const LocalArtistList = () => {
  const { data: LArtists, isLoading } = useQuery<ResponseA, Error>(
    ["LocalArtist"],
    () => getLocalArtist(1, 100, "", "", "1"),
    {
      staleTime: 600,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <h2
        className="font-bold text-4xl text-center 
          max-sm:text-xl"
      >
        Artistas locales
      </h2>
      {isLoading ? (
        <div
          className="grid max-lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
            max-sm:grid-cols-1 md:grid-cols-2 w-full h-full gap-4"
        >
          <div className="bg-white w-full flex gap-2 flex-col h-[27rem] p-2 rounded-md ">
            <Skeleton className="w-full h-52" />
            <div className=" flex flex-col items-center gap-4 justify-center">
              <Skeleton className="w-48 h-6" />
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-40 h-6" />
              <div className="flex items-center justify-center gap-8">
                <Skeleton className="w-10 h-10" />
                <Skeleton className="w-10 h-10" />
              </div>
            </div>
          </div>

          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="max-sm:hidden bg-white w-full flex gap-2 flex-col h-[27rem] rounded-md  p-2"
            >
              <Skeleton className="w-full h-52" />
              <div className=" flex flex-col items-center gap-4 justify-center">
                <Skeleton className="w-48 h-6" />
                <Skeleton className="w-32 h-6" />
                <Skeleton className="w-40 h-6" />
                <div className="flex items-center justify-center gap-8">
                  <Skeleton className="w-10 h-10" />
                  <Skeleton className="w-10 h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        LArtists &&
        LArtists.count > 0 && (
          <Carousel
          pauseOnHover
          slideInterval={5000}
          leftControl={<ChevronsLeft/>}
          rightControl={<ChevronsRight/>}
          indicators
          >
            {LArtists.data.map((artist) => (
              <CardArtistL key={"Art" + artist.ID} artist={artist} />
            ))}
          </Carousel>
        )
      )}
    </>
  );
};

export default LocalArtistList;
