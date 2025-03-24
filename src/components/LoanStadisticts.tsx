
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
import html2canvas from "html2canvas";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Button } from "flowbite-react";
import { IoClipboard } from "react-icons/io5";

const LoanStadisticts = () => {
  const chartRef = useRef(null);
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

  const copyChartToClipboard = async () => {
    if (!chartRef.current) return;
    const canvas = await html2canvas(chartRef.current);
    canvas.toBlob(async (blob) => {
      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        toast("📋 Gráfico copiado al portapapeles");
      }
    });
  };

  return (
    <>
      {!isLoading ? (
        <div className="relative">
          <Button
            type="button"
            onClick={copyChartToClipboard}
            color={"gray"}
            className="z-20 absolute top-2 right-2 "
          >
            <IoClipboard size={23} />
          </Button>
          <div ref={chartRef} id="chart-container">
            <ResponsiveContainer
              width="100%"
              height={400}
              className={"bg-white dark:bg-gray-800 rounded-md p-3"}
            >
              <BarChart data={formattedStats}>
                <CartesianGrid strokeDasharray="3 4" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                     color: '#000000',
                     border: '1px solid #ddd',
                       borderRadius: '8px'
                  }}
                  cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                />
                <Legend />
                <Bar dataKey="Eventos" fill="#1a53d9" />
                <Bar dataKey="Cursos" fill="#00955e" />
                <Bar
                  dataKey="Prestamos"
                  fill="#ffc658"
                  name={"Prestamos de libros"}
                />
                <Bar
                  dataKey="UsoComputo"
                  fill="#ff00ff"
                  name={"Usos de equipo de computo"}
                />
                <Line type="monotone" dataKey="Eventos" stroke="#8884d8" />
                <Line type="monotone" dataKey="Prestamos" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Cursos" stroke="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <span>Cargando</span>
      )}
    </>
  );
};

export default LoanStadisticts;