import { Table } from "flowbite-react";
import { Enrollment } from "../types/Enroll";
import { format } from "@formkit/tempo";

const EnrollRow = ({Enroll}:{Enroll: Enrollment}) => {
  const Date = format({
    date: Enroll.enrollmentDate,
    format: "DD MMMM YYYY",
    tz: "America/Costa_Rica",
  });

  return (
    <>
      <Table.Row>
        <Table.Cell>{Enroll.UserName} </Table.Cell>
        <Table.Cell>{Enroll.userCedula} </Table.Cell>
        <Table.Cell>{Date} </Table.Cell>
        <Table.Cell>{Enroll.direction} </Table.Cell>
        <Table.Cell>{Enroll.phone} </Table.Cell>
        <Table.Cell>{Enroll.ePhone} </Table.Cell>
        <Table.Cell>{Enroll.email} </Table.Cell>
      </Table.Row>
    </>
  );
};

export default EnrollRow;
