import { Button, Modal } from "flowbite-react";
import { useQuery } from "react-query";
import { ActivitieList } from "../../types/Programs";
import { Dispatch, SetStateAction } from "react";
import { GetProgramsRelated } from "../../services/SvPrograms";
import ActivitiesRelated from "../ActivitiesRelated";

const RelatedActivitiesList = ({
  open,
  setOpen,
  id,
  programName,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  programName: string;
}) => {
  const { data: ActivitiesList } = useQuery<ActivitieList>(
    ["ProgramActivitiesList", id],
    () => GetProgramsRelated(id),
    {
      staleTime: 6000,
      enabled: !!id,
      retry: 2,
    }
  );

  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)}>
      <Modal.Header className="dark:bg-neutral-900">
        Actividades relacionadas al programa {programName}
      </Modal.Header>
      {ActivitiesList && ActivitiesList.count > 0 ? (
        <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-4">
          {ActivitiesList.data.map((Activitie) => (
            <ActivitiesRelated
              key={Activitie.activitieID}
              activities={Activitie}
            />
          ))}
        </Modal.Body>
      ) : (
        <span className="m-4">No existen actividades relacionadas al programa</span>
      )}
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button title="Cancelar y regresar" color={"blue"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RelatedActivitiesList;
