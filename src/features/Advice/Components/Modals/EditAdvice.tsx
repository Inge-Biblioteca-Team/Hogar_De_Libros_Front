import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Advice } from "../../Types/Advice";
import OptAdviceCategory from "../OptAdviceCategory";
import ModalButtons from "../../../../components/BTNS/ModalButtons";

const EditAdvice = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register } = useForm<Advice>();
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Editar información del aviso</Modal.Header>
      <form>
        <Modal.Body className="">
          <fieldset>
            <legend className="mb-2 font-bold">Imagen del aviso</legend>
            <figure>
              <img
                className=" h-44  w-full rounded-xl"
                src="https://i.ytimg.com/vi/J4Zvihl_Is4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgzIFMocjAP&rs=AOn4CLCZRLQFBPFw75a1BfksXj9MehXWHQ"
                alt=""
              />
            </figure>
          </fieldset>
          <div className=" flex flex-col justify-between gap-3">
            <fieldset className="my-2 font-bold">
              Información del aviso
            </fieldset>
            <FloatingLabel
              variant="outlined"
              label="Motivo"
              {...register("reason")}
            />
            <FloatingLabel
              variant="outlined"
              label="Información extra"
              {...register("extraInfo")}
            />
            <FloatingLabel
              variant="outlined"
              label="Fecha"
              type="Date"
              {...register("date")}
            />
            <div>
              <Label value="Categoría del aviso" />
              <Select {...register("category")}>
                <OptAdviceCategory />
              </Select>
            </div>
          </div>
        </Modal.Body>
        <ModalButtons setOpen={setOpen}/>
      </form>
    </Modal>
  );
};

export default EditAdvice;
