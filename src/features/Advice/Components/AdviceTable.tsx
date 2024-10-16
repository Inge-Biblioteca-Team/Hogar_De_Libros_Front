import { Table } from "flowbite-react";
import { ApiAdvices } from "../Types/Advice";
import AdviceRow from "./AdviceRow";

const AdviceTable = ({ advices }: { advices: ApiAdvices }) => {
  return (
    <>
      <Table className=" text-center mb-4" hoverable>
        {advices.count > 0 ? (
          <>
            <Table.Head>
              <Table.HeadCell className="w-52">Numero de aviso</Table.HeadCell>
              <Table.HeadCell className="w-52">Motivo</Table.HeadCell>
              <Table.HeadCell className="w-52">Categoría</Table.HeadCell>
              <Table.HeadCell className="w-52">
                Fecha de actividad
              </Table.HeadCell>
              <Table.HeadCell className="w-52">
                Información Extra
              </Table.HeadCell>
              <Table.HeadCell className="w-52">Estado</Table.HeadCell>
              <Table.HeadCell className="w-52"></Table.HeadCell>
            </Table.Head>
            <Table.Body className=" h-96">
              {advices.data.map((advice) => (
                <AdviceRow key={"A" + advice.id_Advice} advice={advice} />
              ))}
            </Table.Body>
          </>
        ) : (
          <div className=" h-96 flex items-center justify-center">
            <span className=" text-3xl">No existen avisos</span>
          </div>
        )}
      </Table>
    </>
  );
};

export default AdviceTable;
