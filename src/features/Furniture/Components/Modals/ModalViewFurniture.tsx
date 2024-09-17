import ConditionStatus from "../../../../components/ConditionStatus";
import BTNGoBack from "../../../../components/BTNGoBack";
import { furniture } from "../../type/furniture";

const FormViewFurniture = ({furniture}:{furniture:furniture}) => {
    
  
    return (
      <>
        <div className="flex text-2xl text-center place-content-center mt-32">
          <div className="shadow-lg p-6 rounded-2xl bg-white">
            <span className="grid grid-cols-2 place-content-center gap-x-20 gap-y-11">
              <span>
                <strong>Descripción</strong>
                <br />
                {furniture?.Description}
              </span>
              <span>
                <strong>Ubicación</strong>
                <br />
                {furniture?.Location}
              </span>
              <span>
                <strong>Persona a Cargo</strong>
                <br />
                {furniture?.InChargePerson}
              </span>
              <span>
                <strong>Condición</strong>
                <br />
                {furniture?.ConditionRating && (
                  <ConditionStatus condition={furniture?.ConditionRating} />
                )}
              </span>
              <span>
                <strong>Estado</strong>
                <br />
                {furniture?.Status}
              </span>
            </span>
            <BTNGoBack />
          </div>
        </div>
      </>
    );
  };
  
  export default FormViewFurniture;