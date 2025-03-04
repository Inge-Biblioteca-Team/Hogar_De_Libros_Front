import {
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GetStats } from "../Services/Stats";
import { useQuery } from "react-query";
import { BiblioStats } from "../Types/GlobalTypes";

const LoanStadisticts = () => {
  const { data: stats, isLoading } = useQuery<BiblioStats[]>(
    ["StatsList"],
    () => GetStats(),
    {
      staleTime: 600,
    }
  );

  const formattedStats = Array.isArray(stats)
    ? stats
        .map((stat) => {
          const monthValue = stat.month;

          let date;
          if (monthValue && !isNaN(new Date(monthValue).getTime())) {
            date = new Date(monthValue);
          } else {
            console.error("Fecha inválida: ", monthValue);
            return stat;
          }

          const monthInSpanish = new Intl.DateTimeFormat("es-ES", {
            month: "long",
            year: "numeric",
          }).format(date);

          return {
            ...stat,
            month:
              monthInSpanish.charAt(0).toUpperCase() + monthInSpanish.slice(1),
          };
        })
        .reverse()
    : [];
  return (
    <>
      {!isLoading ? (
        <ResponsiveContainer
          width="100%"
          height={400}
          className={"bg-white rounded-md p-3"}
        >
          <BarChart data={formattedStats}>
            <CartesianGrid strokeDasharray="3 4" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Eventos" fill="#8884d8" />
            <Bar dataKey="Cursos" fill="#82ca9d" />
            <Bar
              dataKey="Prestamos"
              fill="#ffc658"
              name={"Prestamos de libros"}
            />
            <Bar
              dataKey="UsoComputo"
              fill="#82ca9d"
              name={"Usos de equipo de computo"}
            />
            <Line type="monotone" dataKey="Eventos" stroke="#8884d8" />
            <Line type="monotone" dataKey="Prestamos" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Cursos" stroke="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <span>Cargando</span>
      )}
    </>
  );
};

export default LoanStadisticts;
