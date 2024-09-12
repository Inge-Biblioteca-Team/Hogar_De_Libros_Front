import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa'; // Importamos el icono de lupa
import SltCurrentLimit from "../../components/SltCurrentLimit";
import PaginatationSelector from "../../components/PaginatationSelector";

const SingleUser = () => {
  const [, setCurrentLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("UersCPages");
    return savedPage ? Number(savedPage) : 1;
  });

  const [searchName, setSearchName] = useState<string>("");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("UersCPages", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("UersCPages", currentPage.toString());
  }, [currentPage]);

//   const { data: Users } = useQuery<UsersResponse, Error>(
//     ["Users", currentPage, currentLimit],
//     () => GetUsersList(currentPage, currentLimit, searchName), // Se agrega el filtro de nombre
//     {
//       staleTime: 600,
//     }
//   );

//   const MaxPage = Math.ceil((Users?.count ?? 0) / 5);
     const MaxPage = 5;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: "Arial" }}>
        Consulta de Usuario Administrador
      </h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="border p-2 ml-32"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="button" className="ml-2 p-2 bg-blue-500 text-white">
        {""}  <FaSearch />
        </button>
      </div>

      {/* {Users?.count == 0 ? (
        <NoRequest text="No hay nada que mostrar aquí" />
      ) : ( */}
        <div className="flex place-content-center">
          <div className="w-4/5">
            <Table hoverable className=" text-center">
              <Table.Head className=" h-20 text-sm">
                <Table.HeadCell>CEDULA</Table.HeadCell>
                <Table.HeadCell>NOMBRE</Table.HeadCell>
                <Table.HeadCell>APELLIDOS</Table.HeadCell>
                <Table.HeadCell>GENERO</Table.HeadCell>
                <Table.HeadCell>EDAD</Table.HeadCell>
                <Table.HeadCell>CORREO</Table.HeadCell>
                <Table.HeadCell>PRIVILEGIOS</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {/* {Users?.data.map((user: User) => (
                  <TBLUsers user={user} />
                ))} */}
              </Table.Body>
            </Table>

            <div className=" w-full flex justify-between">
              <div>
                <span className=" pl-5">
                  Mostrar{" "}
                  <span>
                    <SltCurrentLimit setCurrentLimit={setCurrentLimit} />
                  </span>{" "}
                  Libros por página
                </span>
              </div>
              <PaginatationSelector
                totalPages={MaxPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default SingleUser;
