import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Reservation } from "../../Types/RoomsReservations";
import PostNewRoomReservation from "../../Hooks/Rooms/PostNewRoomReservation";
import ProgramsOPT from "../../../Courses/components/OPTS/ProgramsOPT";

const ReservationForm = ({
  open,
  setOpen,
  roomId,
  date,
  selectHours,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roomId: string;
  date: string;
  selectHours: number[];
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Reservation>();

  const [extra, setExtra] = useState<string>("");
  const [furniture, setFuritureRequire] = useState<string>("");
  const internet = "Requiere conexion a Internet.";
  const food = " Presencia de Comida dentro de la sala.";
  const [needI, setNeedI] = useState<boolean>(false);
  const [needF, setNeedF] = useState<boolean>(false);

  const cedula = sessionStorage.getItem("cedula");
  const rol = sessionStorage.getItem("role");

  useEffect(() => {
    if (cedula) {
      setValue("userCedula", cedula.toString());
    }
    setValue("roomId", Number(roomId));
    setValue("date", date);
    setValue("selectedHours", selectHours);
  }, [cedula, roomId, date, setValue, selectHours]);

  const { mutate: createReservation } = PostNewRoomReservation();

  const onSubmit = async (data: Reservation) => {
    let observation = "";
    if (needI) {
      observation += internet;
    }
    if (needF) {
      observation += food;
    }
    if (furniture !== "") {
      observation += ` Necesita el siguiente Mobiliario: ${furniture}.`;
    }
    if (extra !== "") {
      observation += ` Comentarios Extra: ${extra}.`;
    }
    data.observations = observation;
    createReservation(data, {
      onSuccess: () => {
        reset();
      },
      onError: () => {},
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)} popup>
      <Modal.Header>Formulario: Solicitud de reservacion de sala</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" grid-rows-2 grid gap-3">
          <fieldset className="grid grid-cols-2 gap-3">
            <legend className=" font-bold text-center">
              Información general
            </legend>
            <div className=" col-span-2">
              <Label value="Responsable" />
              <TextInput
                placeholder="Nombre de la institucion o persona responsable"
                required
                type="text"
                {...register("name")}
              />
            </div>
            <div>
              <Label value="Motivo" />
              <TextInput
                placeholder="Motivo de uso"
                required
                type="text"
                {...register("reason")}
              />
            </div>
            <div>
              <Label value="Cantidad de personas" />
              <TextInput
                placeholder="Cantidad aproximada de Personas"
                required
                type="number"
                {...register("personNumber")}
              />
            </div>
          </fieldset>
          <fieldset
            className={`${
              rol === "admin"
                ? " flex flex-col gap-4"
                : "grid grid-cols-2 gap-3"
            }`}
          >
            <legend className=" text-center font-bold">
              {rol == "admin" ? (
                <span>Curso o Evento relacionado a la reserva</span>
              ) : (
                <span>
                  {" "}
                  En base a sus necesidades, Marque y rellene los siguientes
                  campos en caso de requerirlo
                </span>
              )}
            </legend>
            <div className={`${rol === "admin" ? "hidden" : "visible"}`}>
              <Checkbox
                color={"blue"}
                id="needInternet"
                onChange={(event) => setNeedI(event.target.checked)}
              />
              <Label
                htmlFor="needInternet"
                value="Acceso a internet"
                className="ml-2"
              />
            </div>
            <div className={`${rol === "admin" ? "hidden" : "visible"}`}>
              <Checkbox
                color={"blue"}
                id="needFood"
                onChange={(event) => setNeedF(event.target.checked)}
              />
              <Label
                htmlFor="needFood"
                value="Comida dentro de la sala"
                className="ml-2"
              />
            </div>
            <div className={`${rol === "admin" ? "hidden" : "visible"}`}>
              <Label value="Moviliario Requerido" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Ej. 2 Mesas, 3 Sillas, Proyector...."
                onChange={(event) => setFuritureRequire(event.target.value)}
              />
            </div>
            <div className={`${rol === "admin" ? "hidden" : "visible"}`}>
              <Label value="Comentarios Extras" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Comentarios, si tienes alguna situacion o necesitas algo que no este contemplado en lo anterior puedes escibirlo aqui"
                onChange={(event) => setExtra(event.target.value)}
              />
            </div>
            <div className={`${rol !== "admin" ? "hidden" : "visible"}`}>
              <Label value="Evento Realizado" />
              <Select {...register("EventId")}>
                <ProgramsOPT />
              </Select>
            </div>
            <div className={`${rol !== "admin" ? "hidden" : "visible"}`}>
              <Label value="Curso Realizado" />
              <Select {...register("courseId")}>
                <ProgramsOPT />
              </Select>
            </div>
          </fieldset>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"failure"} tabIndex={2} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button color={"blue"} type="submit">
            Confirmar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ReservationForm;
