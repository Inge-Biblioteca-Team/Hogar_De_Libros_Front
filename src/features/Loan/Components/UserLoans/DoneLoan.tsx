import { useQuery } from "react-query";
import { LoanResponse, Loans } from "../../Types/BookLoan";
import LoanBody from "./LoanBody";
import { Pagination, Table, TextInput } from "flowbite-react";
import { GetDoneLoans } from "../../Services/SvBookLoan";
import { useState } from "react";
import { Link } from "react-router-dom";

const DoneLoan = () => {
  const [startDate,setStartDate] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: Loan } = useQuery<LoanResponse, Error>(
    ["DLoans", currentPage, startDate],
    () => GetDoneLoans(currentPage, 3,startDate, "", "504420813")
  );
  const MaxPage = Math.ceil((Loan?.count ?? 0) / 3);

  
  return (
    <>
      <div className="">
        <h5 className=" font-bold">Ultimos Préstamos </h5>
        <Table hoverable className=" text-center">
          <Table.Head>
            <Table.HeadCell>#De Solicitud</Table.HeadCell>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell className="flex items-center justify-center gap-2">
              Fecha de solicitud <TextInput type="date"
              onChange={(event)=>{setStartDate(event.target.value)}}></TextInput>{" "}
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className=" h-44 max-h-44">
            {Loan?.count === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={6}>
                  No ha realizado Préstamos. Te invitamos a visitar nuestro{" "}
                  <Link to="/HogarDeLibros/Busqueda/Titulo">
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
