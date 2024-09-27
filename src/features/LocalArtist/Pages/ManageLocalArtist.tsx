import { Breadcrumb, Table } from "flowbite-react";
import {
  HomeCrumb,
  LastCrumb,
  LoanCrumb,
  ManageCrumb,
} from "../../../components/BreadCrumb";
import NoRequest from "../../Loan/Components/NoRequest";
import SltCurrentLimit from "../../../components/SltCurrentLimit";
import PaginatationSelector from "../../../components/PaginatationSelector";
import { useQuery } from "react-query";
import { Artist, ResponseA } from "../types/LocalArtist";
import { getLocalArtist } from "../services/SvArtist";
import { useEffect, useState } from "react";
import TBLArtists from "../components/TBLArtists";
import SearchArtists from "../components/SearchArtists";
import CreateArtist from "../components/Modals/CreateArtist";
import UseDebounce from "../../../hooks/UseDebounce";

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

  const Name = UseDebounce(SName, 100);
  const Type = UseDebounce(SType, 100);

  const { data: Artists } = useQuery<ResponseA, Error>(
    ["LocalArtistMG", currentPage, currentLimit, Name, Type, Status],
    () => getLocalArtist(currentPage, currentLimit, Name, Type, Status),
    {
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((Artists?.count ?? 0) / 5);

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <LoanCrumb />
        <ManageCrumb />
        <LastCrumb CurrentPage="Lista de Artistas" />
      </Breadcrumb>

      <div className=" w-full flex items-center justify-center pt-12">
        <div className=" w-4/5">
          <div className="flex items-center">
            <SearchArtists
              Status={SetStatus}
              SName={SetSName}
              SType={SetSType}
            />
            <CreateArtist />
          </div>
          {Artists?.data.length == 0 ? (
            <NoRequest text="No Existen Artistas Locales registrados" />
          ) : (
            <>
              <Table hoverable className=" text-center">
                <Table.Head className=" h-20 text-sm">
                  <Table.HeadCell>Nombre</Table.HeadCell>
                  <Table.HeadCell>Tipo de Artista</Table.HeadCell>
                  <Table.HeadCell>Información Relevante</Table.HeadCell>
                  <Table.HeadCell>Redes Sociales</Table.HeadCell>
                  <Table.HeadCell>Estado</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {Artists?.data.map((artist: Artist) => (
                    <TBLArtists key={artist.ID} artist={artist} />
                  ))}
                </Table.Body>
              </Table>
              <div className=" w-full flex justify-between">
                <div>
                  <span className=" pl-5">
                    Mostrar{" "}
                    <span>
                      <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                    </span>{" "}
                    Artistas por página
                  </span>
                </div>
                <PaginatationSelector
                  totalPages={MaxPage}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ManageLocalArtist;
