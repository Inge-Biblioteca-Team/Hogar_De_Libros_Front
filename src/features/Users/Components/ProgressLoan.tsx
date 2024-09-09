import { Card } from "flowbite-react";
import { useState } from "react";
import MDLoanInfo from "./Modals/MDLoanInfo";

const ProgressLoan = () => {
  const rows = Array(5).fill(null);
  const [open, SetOpen] = useState(false)
  return (
    <>
      <Card className="max-w-sm text-center mx-auto">
        <div>
          <h5 className=" font-bold">Pendientes de Devolucion</h5>
          {rows.map((_, index) => (
            <div
              className=" shadow-lg p-3 flex flex-col rounded-xl mt-4
             hover:shadow-blue-300 hover:scale-110"
             onClick={()=>SetOpen(true)}
              key={index}
            >
              <span className=" line-clamp-1">Titulo: Unica Mirando Al mar junto a los 10 enanos magicos junto a la sirenita y sus amigos</span>
              <span><strong>Fecha limite de devolucion:</strong> 25/5/2026</span>
            </div>
          ))}
        </div>
      </Card>
      <MDLoanInfo open={open} SetOpen={SetOpen} Retry={true} />
    </>
  );
};

export default ProgressLoan;
