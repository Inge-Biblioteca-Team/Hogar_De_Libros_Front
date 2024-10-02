import {
  Button,
  Checkbox,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { Reservation } from "../../Types/RoomType";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PostNewRoomReservation from "../../Hooks/PostNewRoomReservation";

const ReservationForm = ({
  open,
  setOpen,
  end,
  start,
  roomId,
  date,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  start: string;
  end: string;
  roomId: string;
  date: string;
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Reservation>();

  const [extra, setExtra] = useState<string>("");
  const [furniture, setFuritureRequire] = useState<string>("");
  const internet = "Requiere conexion a Internet.";
  const food = " Presencia de Comida dentro de la sala.";
  const [needI, setNeedI] = useState<boolean>(false);
  const [needF, setNeedF] = useState<boolean>(false);

  const cedula = sessionStorage.getItem("cedula");

  useEffect(() => {
    if (cedula) {
      setValue("userCedula", cedula);
    }
    setValue("startTime", start);
    setValue("endTime", end);
    setValue("roomId", Number(roomId));
    setValue("date", date);
  }, [cedula, start, end, roomId, date, setValue]);

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
          <fieldset className=" grid grid-cols-2 gap-3">
            <legend className=" text-center font-bold">
              En base a sus necesidades, Marque y rellene los siguientes campos
              en caso de requerirlo
            </legend>
            <div>
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
            <div>
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
            <div>
              <Label value="Moviliario Requerido" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Ej. 2 Mesas, 3 Sillas, Proyector...."
                onChange={(event) => setFuritureRequire(event.target.value)}
              />
            </div>
            <div>
              <Label value="Comentarios Extras" />
              <Textarea
                rows={3}
                className="h-full"
                placeholder="Comentarios, si tienes alguna situacion o necesitas algo que no este contemplado en lo anterior puedes escibirlo aqui"
                onChange={(event) => setExtra(event.target.value)}
              />
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
