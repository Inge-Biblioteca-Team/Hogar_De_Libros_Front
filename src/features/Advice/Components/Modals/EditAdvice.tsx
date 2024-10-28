import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Advice } from "../../Types/Advice";
import OptAdviceCategory from "../OptAdviceCategory";
import UseEditAdvice from "../../Hooks/UseEditAdvice";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";

const EditAdvice = ({
  open,
  setOpen,
  advice,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  advice: Advice;
}) => {
  const min = formatToYMD(new Date());
  const { register, handleSubmit, reset, setValue, watch } = useForm<Advice>({
    defaultValues: {
      id_Advice: advice.id_Advice,
      date: advice.date,
      category: advice.category,
      extraInfo: advice.extraInfo,
      image: advice.image,
      reason: advice.reason,
    },
  });
  const { mutate: editAdvice } = UseEditAdvice();

  const onSubmit = (data: Advice) => {
    editAdvice(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [, setImageUrl] = useState<string>("");

  const handleImageSelect = useCallback(
    (url: string) => {
      setImageUrl(url);
      setValue("image", url);
      setOpenImage(false);
    },
    [setValue]
  );

  const onClose = () => {
    setOpen(false);
    reset();
    setImageUrl("");
  };

  const handleClose =()=>{
    setOpenImage(false)
  }

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar información del aviso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="">
          <fieldset>
            <legend className="mb-2 font-bol max-sm:hiddend">
              Imagen del aviso
            </legend>
            <figure>
              <div className="w-full flex items-center justify-center">
                {watch("image") ? (
                  <img
                    onClick={() => setOpenImage(true)}
                    src={watch("image")}
                    alt="Imagen del programa"
                    className="h-52 w-full rounded-md cursor-pointer
                     max-sm:h-32"
                  />
                ) : (
                  <div
                    onClick={() => setOpenImage(true)}
                    className="h-52 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md cursor-pointer
                     max-sm:h-32"
                  >
                    <span>Selecciona una imagen</span>
                  </div>
                )}
              </div>
            </figure>
          </fieldset>
          <div className=" flex flex-col justify-between gap-3 max-sm:pt-5">
            <fieldset className="my-2 font-bold max-sm:hidden">
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
              min={min}
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
        <ModalFooters onClose={onClose} />
      </form>
      <ModalAddNewImage
        open={openImage}
        text="del aviso"
        Folder="Avisos"
        onSelectImage={handleImageSelect}
        onClose={handleClose}
      />
    </Modal>
  );
};

export default EditAdvice;
