import { Table } from "flowbite-react";
import { useQuery } from "react-query";
import { Artist, ResponseA } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import { useEffect, useState } from "react";
import TBLArtists from "../components/TBLArtists";
import SearchArtists from "../components/SearchArtists";
import CreateArtist from "../components/Modals/CreateArtist";
import UseDebounce from "../../../hooks/UseDebounce";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";
import MobilePagination from "../../../components/MobileComponents/MobilePagination";
import DesktopPagination from "../../../components/DesktopComponents/DesktopPagination";

const ManageLocalArtist = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("ArtistPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const [SName, SetSName] = useState<string>("");
  const [SType, SetSType] = useState<string>("");
  const [Status, SetStatus] = useState<string>("");
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("ArtistCPages", page.toString());
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [SName, SType, Status]);

  const Name = UseDebounce(SName, 100);
  const Type = UseDebounce(SType, 100);

  const { data: Artists, isLoading } = useQuery<ResponseA, Error>(
    ["Artist", currentPage, currentLimit, Name, Type, Status],
    () => getLocalArtist(currentPage, currentLimit, Name, Type, Status),
    {
      staleTime: 2000,
      retry: 2,
    }
  );

  const MaxPage = Math.ceil((Artists?.count ?? 0) / currentLimit);

  return (
    <>
      <BreadCrumbManage text="Artistas locales" />
      <div className=" w-full px-3">
        <div className="flex items-end pb-4 max-md:flex-col w-full gap-y-2">
          <SearchArtists Status={SetStatus} SName={SetSName} SType={SetSType} />
          <div className=" w-1/4 max-md:w-full flex justify-end">
            <CreateArtist />
          </div>
        </div>
        {isLoading && (
          <div className=" w-full flex items-center justify-center">
            <Loader />
          </div>
        )}
        {Artists && Artists.count > 0 && (
          <Table
            hoverable
            className="text-center min-h-[30rem] text-black dark:text-white"
          >
            <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
              <Table.HeadCell>Nombre</Table.HeadCell>
              <Table.HeadCell>Tipo de Artista</Table.HeadCell>
              <Table.HeadCell className="max-md:hidden">
                Información Relevante
              </Table.HeadCell>
              <Table.HeadCell className=" max-md:hidden">
                Redes Sociales
              </Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell className=" max-md:hidden"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {Artists?.data.map((artist: Artist) => (
                <TBLArtists key={artist.ID} artist={artist} />
              ))}
            </Table.Body>
          </Table>
        )}
        {!isLoading && (!Artists || Artists.count == 0) && <NoResults />}
        <DesktopPagination
          page={currentPage}
          onPageChange={onPageChange}
          totalPages={MaxPage}
          setCurrentLimit={setCurrentLimit}
        />
        <MobilePagination
          page={currentPage}
          onPageChange={onPageChange}
          totalPages={MaxPage}
          setCurrentLimit={setCurrentLimit}
        />
      </div>
    </>
  );
};
export default ManageLocalArtist;
