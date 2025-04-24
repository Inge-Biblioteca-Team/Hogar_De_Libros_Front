import { Table } from "flowbite-react";
import { useState } from "react";
import SeeLoanInfo from "../Modals/SeeLoanInfo";
import { format } from "@formkit/tempo";
import { LoansRes } from "../../Types/BookLoan";
import LoanRenuve from "./LoanRenuve";
import FinishLoanBook from "../Modals/FinishLoanBook";
import DenyRequest from "./DenyRequest";
import MDApproveLoan from "./MDApproveLoan";
import MobilePopOverOptions from "../../../../components/MobileComponents/MobilePopOverOptions";
import BTNAccions from "../../../../components/DesktopComponents/BTNAccions";

const TblRow = ({
  Loan,
  NeedAccions,
  Inprogress,
}: {
  Loan: LoansRes;
  NeedAccions?: boolean;
  Inprogress?: boolean;
}) => {
  const ReqDate = format({
    date: Loan.LoanRequestDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });

  const ExDate = format({
    date: Loan.LoanExpirationDate,
    format: "DD/MM/YYYY",
    tz: "America/Costa_Rica",
  });

  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);
  const [open5, setOpen5] = useState<boolean>(false);
  const [openT, setOpenT] = useState<boolean>(false);
  const handleRowClick = () => {
    setOpenT(true);
  };
  return (
    <>
      <Table.Row
        className="dark:border-zinc-700  dark:bg-[#2d2d2d]"
        onClick={!NeedAccions ? () => setOpen1(true) : handleRowClick}
      >
        <Table.Cell className="">{ReqDate}</Table.Cell>
        <Table.Cell className=" max-md:hidden">{ExDate}</Table.Cell>
        <Table.Cell className="">
          <MobilePopOverOptions
            setopenTrigger={setOpenT}
            openTrigger={openT}
            setOpen1={setOpen1}
            setOpen4={setOpen2}
            setOpen5={setOpen3}
            setOpen10={setOpen4}
            setOpen9={setOpen5}
            status={Inprogress? true : false}
            text={Loan.userName}
          />
        
        </Table.Cell>
        <Table.Cell>
          <div className="line-clamp-1 max-sm:hidden">
            {Loan.book?.Title || Loan.childrenBook?.Title}
          </div>
        </Table.Cell>
        <Table.Cell className=" max-lg:hidden">
          {Loan.book?.signatureCode || Loan.childrenBook?.SignatureCode}{" "}
        </Table.Cell>
        <Table.Cell className={`${NeedAccions ? `hidden` : ``} max-md:hidden `}>
          {Loan.aprovedBy}
        </Table.Cell>
        <Table.Cell className={`${NeedAccions ? `` : `hidden`} max-md:hidden`}>
          <BTNAccions
             setOpen1={setOpen1}
             setOpen4={setOpen2}
             setOpen5={setOpen3}
             setOpen9={setOpen5}
             setOpen10={setOpen4}
             status={Inprogress? true : false}
          />
     
        </Table.Cell>
      </Table.Row>
      <>
        <SeeLoanInfo see={open1} setSee={setOpen1} Loan={Loan} />
        <MDApproveLoan
          open={open2}
          setOpen={setOpen2}
          LoanID={Loan.BookLoanId}
        />
        <DenyRequest showCancel={open3} setShowCancel={setOpen3} Loan={Loan} />
        <LoanRenuve showChange={open4} setShowChange={setOpen4} Loan={Loan} />
        <FinishLoanBook
          open={open5}
          setOpen={setOpen5}
          BookLoanId={Loan.BookLoanId}
          UserCedula={Loan.userName}
          BookTitle={
            Loan.book?.Title || Loan.childrenBook?.Title || "Desconocido"
          }
        />
      </>
    </>
  );
};

export default TblRow;
