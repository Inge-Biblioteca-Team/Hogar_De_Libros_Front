import { FloatingLabel, Label, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Advice } from "../../Types/Advice";
import OptAdviceCategory from "../OptAdviceCategory";
import UseCreateAdvice from "../../Hooks/UseCreteAdvice";
import ModalAddNewImage from "../../../../components/Modals/ModalAddNewImage";
import { formatToYMD } from "../../../../components/FormatTempo";
import ModalFooters from "../../../../components/ModalFooters";

const NewAdvice = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const min = formatToYMD(new Date());

  const { register, reset, handleSubmit, setValue } = useForm<Advice>();
  const { mutate: createAdvice } = UseCreateAdvice();

  const onSubmit = useCallback(
    (data: Advice) => {
      createAdvice(data, {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
      });
    },
    [createAdvice, reset, setOpen]
  );
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

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
      <Modal.Header>Generar nuevo aviso</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className="">
          <fieldset>
            <legend className="mb-2 font-bold max-sm:hidden">
              Imagen del aviso
            </legend>
            <figure>
              <div
                className="w-full flex items-center justify-center
               max-sm:h-32"
              >
                {imageUrl ? (
                  <img
                    onClick={() => setOpenImage(true)}
                    src={imageUrl}
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
          <div className=" flex flex-col justify-between gap-3  max-sm:pt-4">
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
              <Select {...register("category")} className="">
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

export default NewAdvice;
