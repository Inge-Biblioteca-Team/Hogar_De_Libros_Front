import { format } from "@formkit/tempo";

const Tz = "America/Costa_Rica";

export const formatToDMY = (date: Date | string): string => {
  return format({
    date: date,
    format: "DD/MM/YYYY",
    tz: Tz,
  });
};

export const formatToYMD = (date: Date | string): string => {
  return format({
    date: date,
    format: "YYYY-MM-DD",
    tz: Tz,
  });
};

/*
const time = format({
  date: dateTime,
  format: "h:mm A",
  tz: "America/Costa_Rica",
});
const fullDate = format({
  date: courseDate,
  format: "DD MMMM YYYY",
  tz: "America/Costa_Rica",
});
 const CourseDate = format({
    date: courseDate,
    format: "MMMM YYYY",
    tz: "America/Costa_Rica",
  });
   const endDate = format({
    date: course.endDate,
    format: "DD-MM-YYYY",
    tz: "America/Costa_Rica",
  });

   const minDay = format({
    date: tomorrow,
    format: "YYYY-MM-DD",
    tz: "America/Costa_Rica",
  });

   const ReqDate = format({
    date: Loan.LoanRequestDate,
    format: "DD/MM/YYYY hh:mm A",
    tz: "America/Costa_Rica",
  });



*/
