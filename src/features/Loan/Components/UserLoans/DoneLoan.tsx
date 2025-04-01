import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Pagination, Table, TextInput } from "flowbite-react";
import { GetDoneLoans } from "../../Services/SvBookLoan";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../../Context/UserContext/UserContext";

const DoneLoan = () => {
  const { currentUser } = useContext(UserContext);
  const cedula = currentUser?.cedula || "";

  const [startDate, setStartDate] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["DLoans", currentPage, startDate, cedula],
    () => GetDoneLoans(currentPage, 3, startDate, "", cedula)
  );
  const MaxPage = Math.ceil((Loan?.count ?? 0) / 3);

  return (
    <>
      <div className="">
        <h5 className=" font-bold">Últimos préstamos </h5>
        <Table hoverable className="dark:bg-neutral-900 text-center  bg-white">
          <Table.Head className="dark:bg-neutral-900">
            <Table.HeadCell className="dark:bg-neutral-900 max-sm:hidden">#De Solicitud</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900">Título</Table.HeadCell>
            <Table.HeadCell className="dark:bg-neutral-900 flex items-center justify-center gap-2">
              Fecha de solicitud{" "}
              <TextInput
                type="date"
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
              ></TextInput>{" "}
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-[#2d2d2d] h-44 max-h-44">
            {Loan?.count === 0 ? (
              <Table.Row className="dark:bg-neutral-900">
                <Table.Cell colSpan={6}>
                  No ha realizado préstamos. Te invitamos a visitar nuestro{" "}
                  <Link to="/HogarDeLibros/Catalogo/Completo">
                    Catalogo de libros.
                  </Link>
                </Table.Cell>
              </Table.Row>
            ) : (
              Loan?.data.map((loans: Loans) => (
                <LoanBody Loan={loans} key={loans.BookLoanId} Aprov />
              ))
            )}
          </Table.Body>
        </Table>
        <div className=" w-full flex items-end justify-end">
          <Pagination
            nextLabel="Siguiente"
            previousLabel="Anterior"
            currentPage={currentPage}
            totalPages={MaxPage}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </>
  );
};

export default DoneLoan;
