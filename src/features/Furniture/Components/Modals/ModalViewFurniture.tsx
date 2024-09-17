import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { furniture } from "../../type/furniture";
import { GetFurniturebyID } from "../../services/SvFurniture";
import ConditionStatus from "../../../../components/ConditionStatus";
import BTNGoBack from "../../../../components/BTNGoBack";

const FormViewFurniture = () => {
    const { Id } = useParams<{ Id?: string }>();
    const { data: FurnitureI } = useQuery<furniture, Error>(
      ["OneFurniture", Id],
      () => {
        if (!Id) {
          throw new Error("Error: No existe ID de mobiliario para buscar");
        }
        return GetFurniturebyID(Id); 
      },
      { enabled: !!Id, staleTime: 60000 }
    );
  
    return (
      <>
        <div className="flex text-2xl text-center place-content-center mt-32">
          <div className="shadow-lg p-6 rounded-2xl bg-white">
            <span className="grid grid-cols-2 place-content-center gap-x-20 gap-y-11">
              <span>
                <strong>Descripción</strong>
                <br />
                {FurnitureI?.Description}
              </span>
              <span>
                <strong>Ubicación</strong>
                <br />
                {FurnitureI?.Location}
              </span>
              <span>
                <strong>Persona a Cargo</strong>
                <br />
                {FurnitureI?.InChargePerson}
              </span>
              <span>
                <strong>Condición</strong>
                <br />
                {FurnitureI?.ConditionRating && (
                  <ConditionStatus condition={FurnitureI?.ConditionRating} />
                )}
              </span>
              <span>
                <strong>Estado</strong>
                <br />
                {FurnitureI?.Status}
              </span>
            </span>
            <BTNGoBack />
          </div>
        </div>
      </>
    );
  };
  
  export default FormViewFurniture;