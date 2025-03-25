import { Table, Pagination } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getEnrollByCourse } from "../services/Enrollment";
import { EnrollResp } from "../types/Enroll";
import EnrollRow from "./EnrollRow";

const EnrollBody = ({ courseId }: { courseId: number }) => {
  const [Page, setPage] = useState<number>(1);

  const { data: EnrollList } = useQuery<EnrollResp, Error>(
    ["EnrollList", courseId, Page],
    () => getEnrollByCourse(courseId, Page),
    {
      staleTime: 600,
    }
  );

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const MaxPage = Math.ceil((EnrollList?.count ?? 0) / 5);
  return (
    <>
      <Table hoverable className=" text-center">
        <Table.Head className="dark:text-white !rounded-none">
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Nombre
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Cédula
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Fecha de matrícula
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Dirección
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Teléfono
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Teléfono de Emergencia
          </Table.HeadCell>
          <Table.HeadCell className=" bg-gray-300 !rounded-none">
            Correo
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="dark:text-white">
          {EnrollList?.data.map((Enroll) => (
            <EnrollRow Enroll={Enroll} key={Enroll.courseId} />
          ))}
        </Table.Body>
      </Table>
      <div className="pb-4 flex items-center justify-center">
        {MaxPage > 1 ? (
          <Pagination
            currentPage={Page}
            onPageChange={onPageChange}
            totalPages={MaxPage}
            previousLabel="Anterior"
            nextLabel="Siguiente"
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EnrollBody;
