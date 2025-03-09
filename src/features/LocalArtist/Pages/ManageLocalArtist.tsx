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
import CustomPagination from "../../../components/CustomPagination";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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
    sessionStorage.setItem("ArtistPages", currentPage.toString());
  }, [currentPage]);

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

  const MaxPage = Math.ceil((Artists?.count ?? 0) / 5);

  return (
    <>
      <BreadCrumbManage text="Artistas locales" />

      <div className=" w-full flex items-center justify-center">
        <div className=" w-4/5 md:w-full md:pr-4 md:pl-4 max-sm:p-2 max-sm:w-full">
          <div className="flex md:flex-col lg:flex-row sm:w-full items-center max-sm:flex-col ">
            <div className="w-full sm:w-full flex justify-center max-sm:pb-8">
              <SearchArtists
                Status={SetStatus}
                SName={SetSName}
                SType={SetSType}
              />
            </div>
            <div className="w-full sm:w-full lg:mt-8 md:pb-6 flex justify-end max-sm:pb-8">
              <CreateArtist />
            </div>
          </div>
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : Artists ? (
            <>
              <Table
                hoverable
                className="text-center h-[30rem] max-sm:text-sm max-sm:justify-center"
              >
                <Table.Head className="h-20 text-sm bg-white">
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5">
                    Nombre
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 max-sm:hidden">
                    Tipo de Artista
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5 max-sm:hidden">
                    Información Relevante
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 xl:table-cell 2xl:w-1/5 2xl:table-cell max-sm:hidden">
                    Redes Sociales
                  </Table.HeadCell>
                  <Table.HeadCell className="xl:w-1/5 2xl:w-1/5">
                    Estado
                  </Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {Artists?.data.map((artist: Artist) => (
                    <TBLArtists key={artist.ID} artist={artist} />
                  ))}
                </Table.Body>
              </Table>
              <div className="block max-sm:hidden">
                <CustomPagination
                  page={currentPage}
                  onPageChange={onPageChange}
                  totalPages={MaxPage}
                  setCurrentLimit={setCurrentLimit}
                  total={Artists?.count || 0}
                />
              </div>
              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={currentPage}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </>
  );
};
export default ManageLocalArtist;
