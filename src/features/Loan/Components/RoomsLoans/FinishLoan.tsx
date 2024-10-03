import { Button, Checkbox, Label, Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PatchFinishObservation from "../../Hooks/Rooms/PatchFinishObservation";
import { EndReservation, Reserve } from "../../Types/RoomsReservations";

const FinishLoan = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [Damage1, setDamage1] = useState<string>("");
  const [Damage2, setDamage2] = useState<string>("");
  const [extra, setExtra] = useState<string>("");

  const { setValue, reset, handleSubmit } = useForm<EndReservation>();

  const { mutate: endReserve } = PatchFinishObservation();
  useEffect(() => {
    if (reserve) {
      setValue("rommReservationId", reserve.rommReservationId);
    }
  }, [reserve, setValue]);

  const onSubmit = async (data: EndReservation) => {
    let observation = "";
    if (check1) {
      observation += "Se entrego la sala dentro de la hora establecida. ";
    }
    if (check2) {
      observation += " Se entrego la sala limpia. ";
    }
    if (Damage1 != "") {
      observation += Damage1;
    }
    if (Damage2 != "") {
      observation += Damage2;
    }
    if (extra != "") {
      observation += extra;
    }
    data.finishObservation = observation;
    endReserve(data, {
      onSuccess: () => {
        reset();
      },
      onError: () => {},
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>
        <h3>Formulario: Finalización de Prestamo</h3>
      </Modal.Header>
      <Modal.Body className=" grid grid-cols-2 gap-3">
        <div>
          <Checkbox onChange={(event) => setCheck1(event.target.checked)} />
          <Label
            className="ml-2"
            value="Se entrega dentro de la hora establecida"
          />
        </div>
        <div>
          <Checkbox onChange={(event) => setCheck2(event.target.checked)} />
          <Label className="ml-2" value="La sala se entrega limpia" />
        </div>
        <div>
          <Label value="La sala se entrega con daños" />
          <Textarea
            rows={3}
            placeholder="Especifique los daños"
            onChange={(event) => setDamage1(event.target.value)}
          />
        </div>
        <div>
          <Label value="El moviliario prestado se entrega con daños" />
          <Textarea
            rows={3}
            placeholder="Especifique el moviliario y los daños"
            onChange={(event) => setDamage2(event.target.value)}
          />
        </div>
        <div className=" col-span-2">
          <Label value="Anotaciones Extras" />
          <Textarea
            rows={3}
            placeholder="Especifique el moviliario y los daños"
            onChange={(event) => setExtra(event.target.value)}
          />
        </div>
      </Modal.Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Footer className=" items-center justify-center flex">
          <Button tabIndex={2} onClick={() => setOpen(false)} color={"failure"}>
            Cancelar
          </Button>
          <Button type="submit" color={"blue"}>
            Guardar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default FinishLoan;
