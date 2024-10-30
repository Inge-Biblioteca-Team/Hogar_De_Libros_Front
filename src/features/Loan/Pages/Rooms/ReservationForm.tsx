import {
  Checkbox,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Reservation } from "../../Types/RoomsReservations";
import PostNewRoomReservation from "../../Hooks/Rooms/PostNewRoomReservation";
import OPTEvents from "../../Components/RoomsLoans/OPTEvents";
import OPTCourses from "../../Components/RoomsLoans/OPTCourses";
import UserContext from "../../../../Context/UserContext/UserContext";
import ModalFooters from "../../../../components/ModalFooters";

const ReservationForm = ({
  open,
  setOpen,
  roomId,
  date,
  selectHours,
  finish,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roomId: string;
  date: string;
  selectHours: number[];
  finish: () => void;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Reservation>();

  const [extra, setExtra] = useState<string>("");
  const [furniture, setFuritureRequire] = useState<string>("");
  const internet = "Requiere conexión a Internet.";
  const food = " Presencia de Comida dentro de la sala.";
  const [needI, setNeedI] = useState<boolean>(false);
  const [needF, setNeedF] = useState<boolean>(false);

  const { currentUser } = useContext(UserContext);

  const cedula = currentUser?.cedula || 0;
  const rol = currentUser?.role;

  useEffect(() => {
    if (cedula) {
      setValue("userCedula", cedula.toString());
    }
    setValue("roomId", Number(roomId));
    setValue("date", date);
    setValue("selectedHours", selectHours);
    setValue("EventId", "0");
    setValue("courseId", "0");
  }, [cedula, date, roomId, selectHours, setValue]);

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
        finish();
        reset();
        setOpen(false);
      },
      onError: () => {},
    });
  };

  const onClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Modal show={open} onClose={onClose} popup>
      <Modal.Header>Formulario: Solicitud de reservación de sala</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" grid-rows-2 grid gap-3">
          <fieldset className="grid grid-cols-2 gap-3">
            <legend className=" font-bold text-center">
              Información general
            </legend>
            <div className=" col-span-2">
              <Label value="Responsable" />
              <TextInput
                placeholder="Nombre de la institución o persona responsable"
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
                <span>Curso o evento relacionado a la reserva</span>
              ) : (
                <span>
                  {" "}
                  En base a sus necesidades, marque o rellene los siguientes
                  campos.
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
              <Label value="Mobiliario requerido" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Ej. 2 Mesas, 3 Sillas, Proyector...."
                onChange={(event) => setFuritureRequire(event.target.value)}
              />
            </div>
            <div className={`${rol === "admin" ? "hidden" : "visible"}`}>
              <Label value="Comentarios extras" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Comentarios, si tienes alguna situación o necesitas algo que no este contemplado en lo anterior puedes escribirlo aquí."
                onChange={(event) => setExtra(event.target.value)}
              />
            </div>
            <div className={`${rol !== "admin" ? "hidden" : "visible"}`}>
              <Label value="Evento realizado" />
              <Select {...register("EventId")}>
                <OPTEvents date={date} />
              </Select>
            </div>
            <div className={`${rol !== "admin" ? "hidden" : "visible"}`}>
              <Label value="Curso realizado" />
              <Select {...register("courseId")}>
                <OPTCourses date={date} />
              </Select>
            </div>
          </fieldset>
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default ReservationForm;
