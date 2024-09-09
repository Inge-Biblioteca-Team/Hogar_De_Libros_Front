import { Card } from "flowbite-react";
import MDLoanInfo from "./Modals/MDLoanInfo";
import { useState } from "react";

const DoneLoan = () => {
  const rows = Array(5).fill(null);
  const [open, SetOpen] = useState(false)
  return (
    <>
      <Card className="max-w-sm text-center mx-auto">
        <div>
          <h5 className=" font-bold">Finalizados Recientes</h5>
          {rows.map((_, index) => (
            <div
              className=" shadow-lg p-3 flex flex-col rounded-xl mt-4
                 hover:shadow-blue-300 hover:scale-110"
              key={index} onClick={()=>SetOpen(true)}
            >
              <span className=" line-clamp-1">
                <strong>Titulo:</strong> Unica Mirando Al mar junto a los 10
                enanos
              </span>
              <span>
                <strong>Fecha de solicitud:</strong> 25/5/2026
              </span>
            </div>
          ))}
        </div>
      </Card>
      <MDLoanInfo open={open} SetOpen={SetOpen} Done={true} />
    </>
  );
};

export default DoneLoan;
